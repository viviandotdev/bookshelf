"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    type?: 'underlined' | 'default'; // Make type optional using `?`
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, type = 'default' }) => {

    const pathname = usePathname()
    const active = pathname.startsWith(href)
    let activeStyle = active ? 'bg-beige-100' : 'text-beige-700'

    return (
        <Link
            className={cn(
                "cursor-pointer text-center rounded-xl py-2  text-base text-beige-700 font-light px-4",
                activeStyle,
            )}
            href={href}>
            {children}
        </Link>
    );
}
export default NavLink
