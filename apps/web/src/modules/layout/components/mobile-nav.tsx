import * as React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { MainNavItem } from '@/types';
import { useLockBody } from '@/hooks/use-lock-body';
import { UserAvatar } from './user-avatar';
import { useSelectedLayoutSegments } from 'next/navigation';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User } from 'next-auth';

interface MobileNavProps {
    items: MainNavItem[];
    user: User | null;
}

export function MobileNav({ user }: MobileNavProps) {
    useLockBody();
    const segments = useSelectedLayoutSegments();
    const logBookModal = useLogBookModal();
    const { data: session } = useSession();

    if (segments[0] === 'profile') {
        segments.shift();
    }
    const menuItems = [
        { label: 'Your Profile', href: `/${session?.user.username}` },
        { label: 'Settings', href: '/settings/account' },
        { label: 'Import Books', href: '/settings/import' },
        { label: 'Log Book', href: '' },
    ];

    return (
        <div className='nav-lg:hidden' aria-label='Global'>
            {user ? (
                <div className='border-t border-gray-200 pb-3 pt-4'>
                    <div className='flex items-center px-4'>
                        <div className='shrink-0'>
                            <UserAvatar
                                username={session?.user.username || user.username}
                                src={session?.user.avatarImage || user.avatarImage}
                                size={'default'}
                                className='h-10 w-10'
                            />
                        </div>
                        <div className='ml-3'>
                            <div className='text-base font-medium text-gray-800'>
                                {session?.user.username || user.username}
                            </div>
                            <div className='text-sm font-medium text-gray-500'>
                                {session?.user.email || user.email}
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 space-y-1 px-2'>
                        {menuItems.map((item) => (
                            <Link
                                href={item.href}
                                onClick={() => {
                                    if (item.href === '') {
                                        logBookModal.onOpen();
                                    }
                                }}
                                key={item.label}
                                className={`flex w-full justify-start rounded-md px-4 py-2 text-base font-medium ${item.href.endsWith(`/${segments.join('/')}`)
                                    ? 'bg-gray-50 text-gray-900'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='flex flex-col space-y-4 p-4'>
                    <Link
                        href='/login'
                        className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}
                    >
                        Log In
                    </Link>
                    <Link
                        href='/signup'
                        className={cn(buttonVariants({ variant: 'default' }), 'w-full')}
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </div>
    );
}
