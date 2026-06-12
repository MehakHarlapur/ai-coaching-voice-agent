"use client"
import { api } from '@/convex/_generated/api';
import { CoachingOptions } from '@/services/Options';
import { useQuery } from 'convex/react';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import ChatBox from '../../discussion-room/[roomid]/_components/ChatBox';
import SummeryBox from '../_components/SummeryBox';

function ViewSummery() {
    const router = useRouter();
    const { roomid } = useParams();
    const DiscussionRoomData = useQuery(api.DiscussionRoom.GetDiscussionRoom, { id: roomid });
    const summaryRef = useRef(null);
    
    const handleDownloadPDF = () => {
        try {
            // Create a print-specific stylesheet
            const style = document.createElement('style');
            style.textContent = `
                @media print {
                    @page { margin: 20mm; }
                    body { 
                        font-family: Arial, sans-serif; 
                        line-height: 1.5;
                        color: #000;
                        background: #fff;
                    }
                    .print-header {
                        text-align: center;
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #eee;
                    }
                    .print-title {
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    .print-date {
                        color: #666;
                        margin-bottom: 15px;
                    }
                    .print-content {
                        white-space: pre-line;
                        line-height: 1.6;
                    }
                    button, .no-print {
                        display: none !important;
                    }
                }
            `;
            
            // Create a print window
            const printWindow = window.open('', '_blank');
            const title = DiscussionRoomData?.topic || 'Conversation Summary';
            const date = new Date().toLocaleDateString();
            
            // Build the print content
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${title}</title>
                    <meta charset="utf-8">
                    ${style.outerHTML}
                </head>
                <body>
                    <div class="print-header">
                        <div class="print-title">${title}</div>
                        <div class="print-date">Generated on: ${date}</div>
                    </div>
                    <div class="print-content">${DiscussionRoomData?.summery || 'No content available'}</div>
                    <script>
                        // Automatically trigger print dialog when the window loads
                        window.onload = function() {
                            setTimeout(function() {
                                window.print();
                                // Close the window after printing or if print is cancelled
                                setTimeout(function() {
                                    window.close();
                                }, 1000);
                            }, 200);
                        };
                    <\/script>
                </body>
                </html>
            `);
            
            printWindow.document.close();
            
        } catch (error) {
            console.error('Error generating PDF:', error);
            // Show error message to user
            alert('Failed to generate PDF. Please try again.');
        }
    };

    const GetAbstractImages = (option) => {
        const coachingOption = CoachingOptions.find((item) => item.name == option)

        return coachingOption?.abstract ?? '/ab1.png';
    }

    return (
        <div className='-mt-10'>
            <div className='flex justify-between items-end'>
                <div className='flex gap-7 items-center'>
                    <Image src={GetAbstractImages(DiscussionRoomData?.coachingOption)} alt='abstract'
                        width={100}
                        height={100}
                        className='w-[70px] h-[70px] rounded-full'
                    />
                    <div>
                        <h2 className='font-bold text-lg'>{DiscussionRoomData?.topic}</h2>
                        <h2 className='text-gray-400'>{DiscussionRoomData?.coachingOption}</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <button 
                        onClick={handleDownloadPDF}
                        className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm whitespace-nowrap'
                        disabled={!DiscussionRoomData?.summery}
                    >
                        Download as PDF
                    </button>
                    <h2 className='text-gray-400 whitespace-nowrap'>{moment(DiscussionRoomData?._creationTime).fromNow()}</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5'>
                <div className='col-span-3'>
                    <div className='flex items-center gap-4 mb-6'>
                        <button 
                            onClick={() => router.push('/dashboard')}
                            className='flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            Back
                        </button>
                        <h2 className='text-lg font-bold'>Summary of Your Conversation</h2>
                    </div>
                    <div ref={summaryRef}>
                        <h1 className='text-2xl font-bold mb-4'>{DiscussionRoomData?.topic || 'Conversation Summary'}</h1>
                        <p className='text-gray-500 mb-6'>Generated on {new Date().toLocaleDateString()}</p>
                        <SummeryBox summery={DiscussionRoomData?.summery} />
                    </div>
                </div>
                <div className='col-span-2'>
                    <h2 className='text-lg font-bold mb-6'>Your Conversation</h2>
                    {DiscussionRoomData?.conversation && <ChatBox conversation={DiscussionRoomData?.conversation}
                        coachingOption={DiscussionRoomData?.coachingOption}
                        enableFeedbackNotes={false}
                    />}
                </div>
            </div>

        </div>
    )
}

export default ViewSummery