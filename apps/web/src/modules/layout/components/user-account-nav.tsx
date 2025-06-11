'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/modules/layout/components/user-avatar';
import { useLogoutMutation } from '@/graphql/graphql';
import { useApolloClient } from '@apollo/client';
import { User } from '@/types/interfaces';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
    user: User;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
    const [logout] = useLogoutMutation();
    const router = useRouter()
    const apolloClient = useApolloClient();
    const { data: session } = useSession()

    const menuItems = [
        { label: 'Your Profile', href: `/${user.username}` },
        { label: 'Settings', href: '/settings/account' },
        { label: 'Import Books', href: '/settings/import' },
    ];

    const logoutUser = useCallback(() => {
        logout({
            variables: {
                id: user.id,
            },
        }).then(async () => {
            await apolloClient.resetStore();
        }).finally(async () => {
            signOut({ redirect: false })
                .then(() => {
                    router.push(`${window.location.origin}/login`)
                })
        })
    }, [router, session])

    useEffect(() => {
        if (session?.error === "RefreshTokenError") { // remember that error?
            // force the user to log out if the session has RefreshAccessTokenError
            logoutUser()
        }
    }, [session, logout])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    username={user.username}
                    src={user.avatarImage}
                    size={'default'}
                    className='h-8 w-8'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <Link
                    className='flex items-center justify-start gap-2 p-2'
                    href={`/${user.username}`}
                >
                    <div className='flex flex-col space-y-1 leading-none'>
                        {user.username && <p className='font-medium'>{user.username}</p>}
                        {user.email && (
                            <p className='w-[200px] truncate text-sm text-gray-500'>
                                {user.email}
                            </p>
                        )}
                    </div>
                </Link>
                <DropdownMenuSeparator />
                {menuItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                        <Link className='cursor-pointer' href={item.href}>
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className='cursor-pointer'
                    onSelect={async (event) => {
                        event.preventDefault();
                        logoutUser()
                    }}
                >
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
