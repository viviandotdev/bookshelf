import { Button, buttonVariants } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import backgroundImage from '/public/landing/background-image-call-to-action.jpg';
import Image from 'next/image';

interface FooterSectionProps { }

const FooterSection: React.FC<FooterSectionProps> = () => {
    const footerLinks = [
        { text: 'About', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Terms', href: '#' },
        { text: 'Contact', href: '#' },
    ];

    return (
        <>
            <section
                id="get-started-today"
                className="relative overflow-hidden py-32 bg-beige-100"
            >
                <Image
                    className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                    src={backgroundImage}
                    alt=""
                    width={2347}
                    height={1244}
                    unoptimized
                />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="font-display text-5xl tracking-tight text-beige-800 ">
                            Get started today
                        </h2>
                        <p className="mt-4 text-xl tracking-tight text-beige-800">
                            Become a member today to organize your personal library, track your reading progress, and rate your favorite books
                        </p>

                        <div className='flex justify-center mt-10'>
                            <Link
                                href='/register'
                                className={cn(
                                    buttonVariants({ variant: 'default' }),
                                    'text-md flex cursor-pointer items-center justify-center rounded-3xl border border-gray-200 shadow-xs h-12 translate-y-[-1rem] animate-fade-in px-6 opacity-0 [--animation-delay:600ms]'
                                )}
                            >
                                Create a free account
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
            <div className='flex justify-center bg-white px-8 py-8'>
                <div className='flex w-full max-w-[1000px] flex-col items-center justify-between md:flex-row'>
                    <div className='flex flex-wrap items-center justify-center gap-6 md:justify-start'>
                        {footerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-base text-neutral-900 hover:underline'
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div className='mt-6 text-xs text-zinc-700'>
                        Copyright © 2024 Bookshelf. Book data from
                        <Link className='ml-1 underline underline-offset-2' href={''}>
                            Google Books API.
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col items-center justify-center bg-beige-100 p-4 py-[8rem]'>
                <div className='flex w-full flex-col items-center'>
                    <h2
                        className={cn(
                            dm_sefif_display.className,
                            'mb-4 text-center text-black text-5xl font-normal leading-tight'
                        )}
                    >
                        Ready to join?
                    </h2>
                    <p className='mb-6 max-w-2xl text-center text-base font-normal leading-loose text-zinc-700'>
                        Become a member to organize, track, and rate your favorite reads.
                    </p>

                    <Link
                        href={'/register'}
                        className='rounded-lg bg-beige-700 px-12 py-4 text-base font-medium text-white shadow-sm'
                    >
                        Create a free account
                    </Link>
                </div>
            </div>
            <div className='flex justify-center bg-white px-8 py-8'>
                <div className='flex w-full max-w-[1000px] flex-col items-center justify-between md:flex-row'>
                    <div className='flex flex-wrap items-center justify-center gap-6 md:justify-start'>
                        {footerLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className='text-base text-neutral-900 hover:underline'
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div className='mt-6 text-xs text-zinc-700'>
                        Copyright © 2024 Bookshelf. Book data from
                        <Link className='ml-1 underline underline-offset-2' href={''}>
                            Google Books API.
                        </Link>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default FooterSection;
