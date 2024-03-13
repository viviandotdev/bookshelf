'use client';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Shelf } from '@/graphql/graphql';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import ShelfContainer from '@/modules/shelf/components/shelf-container';
interface SidebarProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

export const Sidebar: React.FC<SidebarProps> = ({
    shelfSelections,
    librarySelections,
}) => {
    const { shelves, library, initLibrary, initShelves, updateSelected } =
        useShelfStore();

    const params = useSearchParams();
    const shelf = params?.get('shelf');

    useEffect(() => {
        if (shelf) {
            updateSelected(shelf);
        } else {
            updateSelected('All Books');
        }
        initShelves(shelfSelections);
        initLibrary(librarySelections);
    }, []);

    return (
        <div className='mt-5 hidden w-72 gap-10 overflow-y-auto lg:flex'>
            <div className='ml-4 flex w-72 flex-col pb-6'>
                <Button className='py- mb-2 mr-6 mt-6 flex items-center   justify-start gap-2 rounded-lg px-3 text-white transition-all hover:text-white '>
                    <Icons.plus className='h-5 w-5' />
                    Add a Book
                </Button>

                <nav className='flex flex-1 flex-col gap-2 overflow-auto scrollbar-thin scrollbar-track-beige-50 scrollbar-thumb-beige-700'>
                    <ShelfContainer
                        shelves={library}
                        collapsible={true}
                        title='My Library '
                    />
                    <ShelfContainer
                        shelves={shelves}
                        isShelves={true}
                        collapsible={true}
                        title='Shelves '
                    />
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
