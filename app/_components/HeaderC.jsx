"use client";
import { Button } from '@/components/ui/button';
import { useUser } from '@stackframe/stack';
import { UserButton } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HeaderC() {
    const user = useUser();
    
    return (
        <div className='w-full px-4 py-3 sm:p-4 shadow-sm'>
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4'>
                <Link href="/" className='flex-shrink-0'>
                    <Image 
                        src={'/robot.png'} 
                        alt='logo' 
                        width={50} 
                        height={50}
                        className='w-32 sm:w-auto h-auto' 
                    />
                </Link>
                
                <nav className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center'>
                    <Link href="/about" className='text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap'>
                        About Us
                    </Link>
                    <Link href="/blog" className='text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap'>
                        Blog
                    </Link>
                    <Link href="/testimonials" className='text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap'>
                        Testimonials
                    </Link>
                    <Link href="/contact" className='text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap'>
                        Contact Us
                    </Link>
                    <div className='ml-4'>
                        {user ? (
                            <UserButton />
                        ) : (
                            <Link href={'/dashboard'}>
                                <Button className={'cursor-pointer'}>Get Started</Button>
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeaderC;