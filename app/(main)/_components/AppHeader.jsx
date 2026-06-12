import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AppHeader() {
    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-10'>
            <Link href={'/dashboard'} className='flex-shrink-0'>
                <Image src={'/robot.png'} alt='logo'
                    width={50}
                    height={50}
                />
            </Link>

            <nav className='flex gap-8 items-center'>
                <Link href="/about" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    About Us
                </Link>
                <Link href="/blog" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Blog
                </Link>
                <Link href="/testimonials" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Testimonials
                </Link>
                <Link href="/contact" className='text-gray-600 hover:text-gray-900 transition-colors'>
                    Contact Us
                </Link>
                <div className='ml-4'>
                    <UserButton />
                </div>
            </nav>
        </div>
    )
}

export default AppHeader