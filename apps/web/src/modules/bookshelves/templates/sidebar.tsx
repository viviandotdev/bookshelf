import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface LinkItem {
    text: string;
    icon: React.ReactElement;
    href: string;
    selected?: boolean;
    className: string;
}

const links: LinkItem[] = [
    {
        text: 'All Books',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        selected: true,
        className: 'flex text-base font-medium items-center gap-3 rounded-lg px-3 py-3 text-gray-400 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    },
    {
        text: 'Want to Read',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex items-center text-base font-medium gap-3 rounded-lg bg-beige-100 px-3 py-3 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50',
    },
    {
        text: 'Currently Reading',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex text-base font-medium items-center gap-3 rounded-lg px-3 py-3 text-gray-400 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    },
    {
        text: 'Unshelved',
        icon: <Icons.shelf className="h-6 w-6" />,
        href: '#',
        className: 'flex text-base font-medium items-center gap-3 rounded-lg px-3 py-3 text-gray-400 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
    },

    // Add more link items as needed
];

interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="hidden lg:flex w-72 overflow-y-auto mt-5 gap-10 ">
            <div className="flex flex-col w-72 ml-8">
                <Button
                    className="flex mr-4 my-6 items-center gap-2 shadow-lg shadow-beige-700/20 justify-start hover:text-white rounded-lg px-3 py- text-white transition-all "
                >
                    <Icons.plus className="h-5 w-5" />
                    Add a Book
                </Button>
                <nav className="flex-1 flex flex-col overflow-auto scrollbar-thin scrollbar-track-beige-400 scrollbar-thumb-beige-700 mt-1.5 gap-2">


                    <div className=" mr-4 mb-3 text-base font-medium text-beige-700">My Library</div>
                    <div className="grid gap-1.5 text-sm">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className={cn('ml-1 mr-4 flex text-base font-medium items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-900', `${link.selected && "bg-beige-100"}`)}>
                                {link.icon}
                                {link.text}
                            </Link>
                        ))}

                    </div>

                    <div className="mt-2 mb-3 text-base font-medium text-beige-700">Shelves</div>
                    <div className="grid gap-1.5 text-sm">
                        <>
                            {links.map((link, index) => (
                                <Link key={index} href={link.href} className={cn('ml-1 mr-4 flex text-base font-medium items-center gap-2 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-900', `${link.selected && "bg-beige-100"}`)}>
                                    {link.icon}
                                    {link.text}
                                </Link>
                            ))}
                            <Button className="flex mr-4  items-center gap-2 text-base justify-start bg-beige-50 text-gray-400 rounded-lg px-3 hover:bg-white transition-all ">
                                <Icons.plus className="h-5 w-5" />
                                Add a shelf
                            </Button>
                        </>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
