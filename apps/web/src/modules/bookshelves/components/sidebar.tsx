"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Shelf } from "@/graphql/graphql";
import useShelfStore from "@/stores/use-shelf-store";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useCreateShelfModal from "@/modules/shelf/hooks/use-create-shelf-modal";
import ShelfContainer from "@/modules/shelf/components/shelf-container";

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

interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

export const Sidebar: React.FC<SidebarProps> = ({ shelfSelections, librarySelections }) => {
    const { shelves, library, initLibrary, initShelves, updateSelected } = useShelfStore();
    const shelfModal = useCreateShelfModal();
    const params = useSearchParams();
    const shelf = params?.get("shelf");

    useEffect(() => {
        if (shelf) {
            (updateSelected(shelf));
        } else {
            (updateSelected("All Books"));
        }
        (initShelves(shelfSelections));
        (initLibrary(librarySelections));
    }, []);


    return (
        <div className="hidden lg:flex w-72 overflow-y-auto mt-5 gap-10 ">
            <div className="flex flex-col w-72 ml-8 pb-6">
                <Button
                    className="flex mr-4 my-6 items-center gap-2 shadow-lg shadow-beige-700/20 justify-start hover:text-white rounded-lg px-3 py- text-white transition-all "
                >
                    <Icons.plus className="h-5 w-5" />
                    Add a Book
                </Button>
                <nav className="flex-1 flex flex-col overflow-auto scrollbar-thin scrollbar-track-beige-50 scrollbar-thumb-beige-700 mt-1.5 gap-2">
                    <ShelfContainer shelves={library} collapsible={false} title="My Library " />
                    <ShelfContainer shelves={shelves} isShelves={true} collapsible={false} title="Shelves " />


                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
