import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import { useLockBody } from '@/hooks/use-lock-body';
import { Button } from '@/components/ui/button';
import { UserAvatar } from './user-avatar';

interface MobileNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

export function MobileNav({ items, children }: MobileNavProps) {
    useLockBody();

    return (
        <div className="lg:hidden" aria-label="Global">
            {/* <div className="space-y-1 px-2 pb-3 pt-2">
                {items.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href!}
                        className={cn(
                            'flex w-full items-center rounded-md px-4 py-2 text-base font-medium hover:underline',
                            item.disabled && 'cursor-not-allowed opacity-60'
                        )}

                    >
                        {item.title}
                    </Link>
                ))}
            </div> */}
            <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                        <UserAvatar
                            username={"vivian"}
                            size={'default'}
                            className='h-10 w-10'
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">{"vvian"}</div>
                        <div className="text-sm font-medium text-gray-500">{"vivian.email"}</div>
                    </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                        <Button
                            variant={"secondary"}
                            key={item.name}
                            className="w-full flex justify-start rounded-md bg-white px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
