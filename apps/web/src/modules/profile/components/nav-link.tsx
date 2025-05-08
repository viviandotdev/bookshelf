'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    type?: 'underlined' | 'default';
}

export const NavLink: React.FC<NavLinkProps> = ({
    href,
    children,
    type = 'default',
}) => {
    const pathname = usePathname();
    const active = pathname.startsWith(href);
    let activeStyle = active ? 'bg-beige-100' : 'text-beige-700';

    return (
        <Link
            className={cn(
                'cursor-pointer rounded-xl px-4 py-2  text-center text-base font-light text-beige-700',
                activeStyle
            )}
            href={href}
        >
            {children}
        </Link>
    );
};
export default NavLink;
