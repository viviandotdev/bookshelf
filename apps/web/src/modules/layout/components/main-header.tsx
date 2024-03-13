"use client"
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MainNav } from './main-nav'
import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { dm_sefif_display } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import LogBookButton from './log-book-button'
import { UserAccountNav } from './user-account-nav'
import { MobileNav } from './mobile-nav'
import React from 'react'

interface MainHeaderProps {
    user: any;
    children?: React.ReactNode;
}

export default function MainHeader({ user, children }: MainHeaderProps) {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

    const subItems = [
        {
            title: 'My Library',
            href: user ? `/${user.username}/books` : '/',
            type: user ? "user" : "",
        },
        {
            title: 'Journal',
            href: user ? `/${user.username}/journal` : '/',
            type: user ? "user" : "",
        },
        {
            title: 'Activity',
            href: user ? `/${user.username}/activity` : '/',
            type: user ? "user" : "",
        },
        {
            title: 'Lists',
            href: user ? `/${user.username}/lists` : '/',
            type: user ? "user" : "",
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
            type: "user",
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
        <div className=" mx-0 ">
            <div className="relative flex h-16 px-2 justify-between">
                <div className="relative z-10 flex ml-4 lg:px-0">
                    <Link href='/' className='items-center flex'>
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
                <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                    <div className="w-full sm:max-w-md">
                        <MainNav items={items} />

                    </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Button onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="bg-beige-100 inline-flex items-center justify-center rounded-md p-2 text-beige-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        {showMobileMenu ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                    {/* <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="search"
                                    name="search"
                                    className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div> */}
                    {/* Profile dropdown */}
                    {user ? (
                        <div className='flex gap-4 relative ml-4 mr-4 flex-shrink-0'>
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
    )
}
