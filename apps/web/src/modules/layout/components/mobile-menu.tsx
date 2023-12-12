"use client"
import { Icons } from '@/components/icons';
import React from 'react'
import { MobileNav } from './mobile-nav';

interface MobileMenuProps {
    items: any;
    children?: React.ReactNode;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ items, children }) => {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    return (
        <><button
            className="flex items-center space-x-2 md:hidden text-foreground font-bold"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
            {showMobileMenu ? <Icons.close /> : <Icons.menu />}
            <span>Menu</span>
        </button>
            {
                showMobileMenu && items && (
                    <MobileNav items={items}>{children}</MobileNav>
                )
            }
        </>
    );
}
export default MobileMenu
