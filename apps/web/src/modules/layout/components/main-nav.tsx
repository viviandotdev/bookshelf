import * as React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import { dm_sefif_display } from '@/lib/fonts';
import MobileMenu from './mobile-menu';
import { NavLink } from './nav-link';

interface MainNavProps {
    children?: React.ReactNode;
    items: MainNavItem[];
}

export function MainNav({ children, items }: MainNavProps) {
    return (
        <>
            <nav className='flex-1 justify-center space-x-4 flex'>
                {items?.length ? (
                    <nav className='gap-6 flex'>
                        {items?.map((item, index) => (
                            <NavLink key={index} href={item.href} routeType={item.type}>
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                ) : null}
            </nav>
        </>
    );
}
