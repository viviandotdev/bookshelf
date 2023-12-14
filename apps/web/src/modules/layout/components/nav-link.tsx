"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
    href: string,
    children: React.ReactNode,

}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const segment = useSelectedLayoutSegment();
    const active = href.startsWith(`/${segment}`)
    return (
        <Link
            className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                active ? 'text-foreground/60' : 'text-foreground',
                // item.disabled && "cursor-not-allowed opacity-80"
            )}
            href={href}>
            {children}
        </Link>
    );
}
export default NavLink
