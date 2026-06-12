"use client"
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { AIModel, ConvertTextToSpeech, getToken } from '@/services/GlobalServices';
import { CoachingExpert } from '@/services/Options';
import { UserButton } from '@stackframe/stack';
/* Removed: import { RealtimeTranscriber } from 'assemblyai'; */ 
import { useMutation, useQuery } from 'convex/react';
import { Loader2Icon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatBox from './_components/ChatBox';
import { toast } from 'sonner';
import { UserContext } from '@/app/_context/UserContext';
import Webcam from 'react-webcam';

// Small wrapper for AssemblyAI Universal-Streaming v3
class UniversalTranscriber {
    constructor({ token, sample_rate = 16000, encoding = 'pcm_s16le', format_turns = true } = {}) {
        // token may be { token: '...' } or a string
        this.token = token?.token ?? token;
        this.sample_rate = sample_rate;
        this.encoding = encoding;
        this.format_turns = format_turns;
        this.ws = null;
        this.handlers = { transcript: [], open: [], error: [], close: [], begin: [] };
    }

    on(name, fn) {
        if (!this.handlers[name]) this.handlers[name] = [];
        this.handlers[name].push(fn);
    }

    async connect() {
        const params = new URLSearchParams({
            sample_rate: String(this.sample_rate),
            encoding: this.encoding,
            format_turns: String(this.format_turns),
        });
        if (this.token) params.set('token', this.token);

        const url = `wss://streaming.assemblyai.com/v3/ws?${params.toString()}`;
        this.ws = new WebSocket(url);
        this.ws.binaryType = 'arraybuffer';

        // basic handlers
        this.ws.onopen = (ev) => {
            (this.handlers.open || []).forEach(h => h(ev));
        };

        this.ws.onerror = (err) => {
            (this.handlers.error || []).forEach(h => h(err));
        };

        this.ws.onclose = (ev) => {
            (this.handlers.close || []).forEach(h => h(ev));
        };

        this.ws.onmessage = (ev) => {
            // The streaming messages are JSON text messages describing Begin/Turn/Termination
            if (typeof ev.data === 'string') {
                try {
                    const data = JSON.parse(ev.data);
                    if (data.type === 'Begin') {
                        (this.handlers.begin || []).forEach(h => h(data));
                        return;
                    }
                    if (data.type === 'Turn') {
                        // Normalize to the old event shape your app expects
                        const transcriptEvent = {
                            // emulate previous message_type naming so your page logic remains unchanged:
                            message_type: (data.turn_is_formatted && data.end_of_turn) ? 'FinalTranscript' : 'PartialTranscript',
                            text: data.transcript ?? '',
                            // audio_start: use first word start if available (the docs expose words[].start)
                            audio_start: (data.words && data.words.length && (data.words[0].start ?? null)) ?? (data.turn_order ?? 0),
                            raw: data
                        };
                        (this.handlers.transcript || []).forEach(h => h(transcriptEvent));
                        return;
                    }
                    if (data.type === 'Termination') {
                        (this.handlers.close || []).forEach(h => h(data));
                        return;
                    }
                    // other messages ignored for now
                } catch (e) {
                    // ignore JSON parse errors
                    console.warn("AssemblyAI: failed to parse message", e);
                }
            } else {
                // Binary frames from server are not expected for v3 in normal flow. Ignore.
            }
        };

        // wait for open
        await new Promise((resolve, reject) => {
            const onOpen = () => { cleanup(); resolve(); };
            const onError = (e) => { cleanup(); reject(e); };
            const cleanup = () => {
                this.ws.removeEventListener('open', onOpen);
                this.ws.removeEventListener('error', onError);
            };
            this.ws.addEventListener('open', onOpen);
            this.ws.addEventListener('error', onError);
        });
    }

    // send audio binary (ArrayBuffer or Blob or typed-array)
    sendAudio(buffer) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
        if (buffer instanceof Blob) {
            buffer.arrayBuffer().then(ab => this.ws.send(ab)).catch(() => {});
            return;
        }
        if (ArrayBuffer.isView(buffer)) {
            this.ws.send(buffer.buffer);
            return;
        }
        // assume ArrayBuffer
        this.ws.send(buffer);
    }

    // Terminate session and close
    async close() {
        if (!this.ws) return;
        try {
            if (this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({ type: 'Terminate' }));
                // allow server to respond then close
                await new Promise(r => setTimeout(r, 100));
                try { this.ws.close(); } catch (e) {}
            }
        } catch (e) {
            console.warn("Error closing websocket:", e);
        } finally {
            this.ws = null;
        }
    }
}

function DiscussionRoom() {
    const router = useRouter();
    const { roomid } = useParams();
    const { userData, setUserData } = useContext(UserContext);
    const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom, { id: roomid });
    const [expert, setExpert] = useState();
    const [enableMic, setEnableMic] = useState(false);
    const recorder = useRef(null)
    const realtimeTranscriber = useRef(null);
    const [transcribe, setTranscribe] = useState();
    const [conversation, setConversation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [audioUrl, setAudioUrl] = useState();
    const [enableFeedbackNotes, setEnableFeedbackNotes] = useState(false);
    const UpdateConversation = useMutation(api.DiscussionRoom.UpdateConversation)
    const updateUserToken = useMutation(api.users.UpdateUserToken)
    let silenceTimeout;
    let waitForPause;
    let texts = {};

    const [isCameraEnabled, setIsCameraEnabled] = useState(null);

    //Check if camera enabled or not
    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(() => setIsCameraEnabled(true))
            .catch(() => setIsCameraEnabled(false));
    }, []);

    useEffect(() => {
        if (DiscussionRoomData) {
            const Expert = CoachingExpert.find(item => item.name == DiscussionRoomData.expertName);
            console.log(Expert);
            setExpert(Expert);
        }
    }, [DiscussionRoomData])

    const connectToServer = async () => {

        setLoading(true);

        // Create streaming token on the server and use it in the client
        const tokenData = await getToken();

        // Init our small UniversalTranscriber wrapper
        realtimeTranscriber.current = new UniversalTranscriber({
            token: tokenData?.token ?? tokenData,
            sample_rate: 16_000,
            encoding: 'pcm_s16le',
            format_turns: true
        });

        realtimeTranscriber.current.on('transcript', async (transcript) => {
            let msg = ''
            // Keep your original logic intact: treat FinalTranscript as final
            if (transcript.message_type == 'FinalTranscript') {
                setConversation(prev => [...prev, {
                    role: 'user',
                    content: transcript.text
                }]);
                await updateUserTokenMathod(transcript.text);// Update user generate Token
            }

            texts[transcript.audio_start] = transcript?.text;
            const keys = Object.keys(texts);
            keys.sort((a, b) => a - b);

            for (const key of keys) {
                if (texts[key]) {
                    msg += `${texts[key]}`
                }
            }

            setTranscribe(msg);
        })

        try {
            await realtimeTranscriber.current.connect();
            setLoading(false);
            setEnableMic(true);
            toast('Connected...')
        } catch (e) {
            console.error("Failed to connect to AssemblyAI streaming endpoint:", e);
            setLoading(false);
            toast.error('Failed to connect to transcription service');
            return;
        }

        if (typeof window !== "undefined" && typeof navigator !== "undefined") {
            const RecordRTC = (await import("recordrtc")).default; //Importing here
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    recorder.current = new RecordRTC(stream, {
                        type: 'audio',
                        mimeType: 'audio/webm;codecs=pcm',
                        recorderType: RecordRTC.StereoAudioRecorder,
                        timeSlice: 250,
                        desiredSampRate: 16000,
                        numberOfAudioChannels: 1,
                        bufferSize: 4096,
                        audioBitsPerSecond: 128000,
                        ondataavailable: async (blob) => {
                            if (!realtimeTranscriber.current) return;
                            // Reset the silence detection timer on audio input
                            clearTimeout(silenceTimeout);
                            const buffer = await blob.arrayBuffer();
                            realtimeTranscriber.current.sendAudio(buffer);
                            // Restart the silence detection timer
                            silenceTimeout = setTimeout(() => {
                                console.log('User stopped talking');
                                // Handle user stopped talking (e.g., send final transcript, stop recording, etc.)
                            }, 2000);
                        },

                    });
                    recorder.current.startRecording();
                })
                .catch((err) => console.error(err));
        }
    }

    useEffect(() => {
        clearTimeout(waitForPause);
        async function fetchData() {
            if (conversation[conversation.length - 1]?.role == 'user') {
                // Calling AI text Model to Get Response
                const lastTwoMsg = conversation.slice(-8);
                const aiResp = await AIModel(
                    DiscussionRoomData.topic,
                    DiscussionRoomData.coachingOption,
                    lastTwoMsg);

                const url = await ConvertTextToSpeech(aiResp.content, DiscussionRoomData.expertName);
                console.log(url)
                setAudioUrl(url);
                setConversation(prev => [...prev, aiResp]);
                await updateUserTokenMathod(aiResp.content);// Update AI generated TOKEN
            }
        }

        waitForPause = setTimeout(() => {
            console.log('WAIT...')
            fetchData()
        }, 800)
        console.log(conversation)


    }, [conversation])

    const disconnect = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (realtimeTranscriber.current) {
            await realtimeTranscriber.current.close();
        }
        if (recorder.current) {
            try { recorder.current.pauseRecording(); } catch (e) { /* ignore */ }
            recorder.current = null;
        }
        setEnableMic(false);
        toast('Disconnected!')
        await UpdateConversation({
            id: DiscussionRoomData._id,
            conversation: conversation
        })

        setLoading(false);
        setEnableFeedbackNotes(true);

    }

    const updateUserTokenMathod = async (text) => {
        const tokenCount = text.trim() ? text.trim().split(/\s+/).length : 0
        const result = await updateUserToken({
            id: userData._id,
            credits: Number(userData.credits) - Number(tokenCount)
        })

        setUserData(prev => ({
            ...prev,
            credits: Number(userData.credits) - Number(tokenCount)
        }))
    }


    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <div className="flex items-center mb-4">
                <Button 
                    variant="outline" 
                    onClick={() => router.push('/dashboard')}
                    className="mr-4"
                >
                    ← Back to Dashboard
                </Button>
                <h1 className="text-2xl font-bold">Discussion Room</h1>
            </div>
            <h2 className='text-lg font-bold'>{DiscussionRoomData?.coachingOption}</h2>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='lg:col-span-2'>
                    <div className=' h-[60vh] bg-secondary border rounded-4xl
                flex flex-col items-center justify-center relative
                '>
                        {expert?.avatar && <Image src={expert?.avatar} alt='Avatar' width={200} height={200}
                            className='h-[80px] w-[80px] rounded-full object-cover animate-pulse'
                        />}
                        <h2 className='text-gray-500'>{expert?.name}</h2>

                        <audio src={audioUrl} type="audio/mp3" autoPlay />
                        {!isCameraEnabled ? <div className='p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10'>
                            <UserButton />
                        </div> :
                            <div className='absolute bottom-10 right-10'>
                                <Webcam height={80}
                                    width={130}
                                    className='rounded-2xl'
                                />
                            </div>}
                    </div>
                    <div className='mt-5 flex items-center justify-center'>
                        {!enableMic ? <Button onClick={connectToServer} disabled={loading}>
                            {loading && <Loader2Icon className='animate-spin' />} Connect</Button>
                            :
                            <Button variant="destructive" onClick={disconnect} disabled={loading}>
                                {loading && <Loader2Icon className='animate-spin' />}
                                Disconnect</Button>}
                    </div>
                </div>
                <div>
                    <ChatBox conversation={conversation}
                        enableFeedbackNotes={enableFeedbackNotes}
                        coachingOption={DiscussionRoomData?.coachingOption}
                    />
                </div>
            </div>

            {transcribe && <div>
                <h2 className='p-4 border rounded-2xl mt-5'>{transcribe}</h2>
            </div>}
        </div>
    )
}

export default DiscussionRoom
