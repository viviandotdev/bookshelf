'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MainNav } from './main-nav';
import { Button, buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import LogBookButton from './log-book-button';
import { UserAccountNav } from './user-account-nav';
import { MobileNav } from './mobile-nav';
import React from 'react';
import SearchInput from './search-input';
import { Icons } from '@/components/icons';

interface MainHeaderProps {
    user: any;
    children?: React.ReactNode;
}

export default function MainHeader({ user, children }: MainHeaderProps) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    const subItems = [
        {
            title: 'My Library',
            href: user ? `/${user.username}/books` : '/',
            type: user ? 'user' : '',
        },
        {
            title: 'Journal',
            href: user ? `/${user.username}/journal` : '/',
            type: user ? 'user' : '',
        },
        {
            title: 'Activity',
            href: user ? `/${user.username}/activity` : '/',
            type: user ? 'user' : '',
        },
        {
            title: 'Lists',
            href: user ? `/${user.username}/lists` : '/',
            type: user ? 'user' : '',
        },
    ];

    const items = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'My Library',
            href: user ? `/${user.username}/books` : '/',
            type: 'user',
        },
        {
            title: 'Browse',
            href: '/browse',
        },
        {
            title: 'Community',
            href: '/browse',
        },
    ];

    return (
        <div className=' mx-0 '>
            <div className='relative flex h-16 justify-between px-2'>
                <div className='relative z-10 ml-4 flex lg:px-0'>
                    <Link href='/' className='flex items-center'>
                        <h1
                            className={cn(
                                dm_sefif_display.className,
                                'text-[28px] text-beige sm:inline-block'
                            )}
                        >
                            {siteConfig.name}
                        </h1>
                    </Link>
                </div>
                <div className='relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0'>
                    <div className='w-full sm:max-w-md'>
                        <MainNav items={items} />
                    </div>
                </div>
                <div className='relative z-10 flex items-center nav-lg:hidden'>
                    {/* Mobile menu button */}
                    <div className='cursor-pointer flex items-center px-4'>
                        <Icons.search className='h-5 w-5 text-beige-700' aria-hidden='true' />
                    </div>
                    <Button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className='inline-flex items-center justify-center rounded-md bg-beige-100 p-2 text-beige-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    >
                        <span className='sr-only'>Open menu</span>
                        {showMobileMenu ? (
                            <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                        ) : (
                            <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                        )}
                    </Button>
                </div>
                <div className='hidden nav-lg:relative nav-lg:z-10 nav-lg:ml-4 nav-lg:flex nav-lg:items-center'>
                    <SearchInput />
                    {/* Profile dropdown */}
                    {user ? (
                        <div className='relative ml-4 mr-4 flex flex-shrink-0 gap-4'>
                            <LogBookButton />
                            <UserAccountNav
                                user={{
                                    email: user.email,
                                    username: user.username,
                                    id: user.id,
                                }}
                            />
                        </div>
                    ) : (
                        <Link
                            href='/login'
                            className={cn(
                                buttonVariants({ variant: 'secondary', size: 'sm' }),
                                'px-4'
                            )}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
            {children}
            {showMobileMenu && items && (
                <MobileNav user={user} items={subItems}></MobileNav>
            )}
        </div>
    );
}
