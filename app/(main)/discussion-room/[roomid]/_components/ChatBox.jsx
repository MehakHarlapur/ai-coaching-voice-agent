import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api';
import { AIModelToGenerateFeedbackAndNotes } from '@/services/GlobalServices'
import { useMutation } from 'convex/react';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

function ChatBox({ conversation, enableFeedbackNotes, coachingOption }) {
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const updateSummery = useMutation(api.DiscussionRoom.UpdateSummery);
    const { roomid } = useParams();

    // Remove auto-scroll to bottom

    const GenerateFeedbackNotes = async () => {
        setLoading(true);
        try {
            const result = await AIModelToGenerateFeedbackAndNotes(coachingOption, conversation);
            console.log(result.content);

            await updateSummery({
                id: roomid,
                summery: result.content
            });
            setLoading(false);
            toast('Feedback/Notes Saved!');
        } catch (e) {
            setLoading(false);
            toast('Internal server error, Try again');
        }
    };

    return (
        <div className="w-full">
            <div className='h-[60vh] bg-secondary border rounded-xl flex flex-col p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
                {conversation.map((item, index) => (
                    <div key={index} className={`flex ${item?.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                        {item?.role === 'assistant' ? (
                            <div className="max-w-[80%] lg:max-w-[70%] bg-primary text-white p-3 rounded-lg rounded-tl-none">
                                <ReactMarkdown className="prose prose-invert">
                                    {item?.content}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <div className="max-w-[80%] lg:max-w-[70%] bg-gray-200 p-3 rounded-lg rounded-tr-none">
                                <p className="text-gray-800">{item?.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {enableFeedbackNotes && (
                <Button 
                    onClick={GenerateFeedbackNotes} 
                    disabled={loading} 
                    className='mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white'
                >
                    {loading && <LoaderCircle className='animate-spin mr-2' />}
                    Generate Feedback/Notes
                </Button>
            )}
        </div>
    );
}

export default ChatBox;