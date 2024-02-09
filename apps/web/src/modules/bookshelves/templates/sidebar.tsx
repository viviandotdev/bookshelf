import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface LinkItem {
    text: string;
    icon: React.ReactElement;
    href: string;
    className: string;
}

const links: LinkItem[] = [
    {
        text: 'Home',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex text-base font-medium items-center gap-3 rounded-lg px-3 py-3 text-gray-400 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    },
    {
        text: 'Products',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex items-center text-base font-medium gap-3 rounded-lg bg-gray-100 px-3 py-3 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50',
    },
    {
        text: 'Products',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex items-center text-base gap-3 font-medium rounded-lg bg-gray-100 px-3 py-3 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50',
    },
    // Add more link items as needed
];

interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="hidden lg:flex w-[280px] overflow-y-auto mt-5">
            <div className="flex flex-col w-[280px]">
                <Button
                    className="flex items-center gap-2 rounded-lg py-3 text-white transition-all hover:text-gray-900"

                >
                    <Icons.plus className="h-5 w-5" />
                    Add a Book
                </Button>
                <nav className="flex-1 overflow-auto mt-1.5">


                    <div className="px-2 mb-2 text-base font-medium text-beige-700">My Library</div>
                    <div className="grid gap-1.5 text-sm">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className={link.className}>
                                {link.icon}
                                {link.text}
                            </Link>
                        ))}

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
