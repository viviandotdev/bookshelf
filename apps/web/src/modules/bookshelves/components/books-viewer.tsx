"use client"
import React, { use, useEffect } from 'react'
import BoardView from './board-view';
import ListView from './list-view';
import ShelfMenu from './shelf-menu';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { GalleryView } from './gallery-view';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';


interface BooksViewerProps {
    children?: React.ReactNode

}

export const BooksViewer: React.FC<BooksViewerProps> = ({ children }) => {
    const { selected, shelves, library } = useShelfStore();
    // Merge shelves and library arrays
    const allShelves = [...shelves, ...library];

    // Find the item in the merged array based on the selected name
    const selectedShelf = allShelves.find((item) => item.name === selected?.name);
    const [view, setView] = React.useState<string>("board");
    let contentView;

    if (view === 'gallery') {
        contentView = <GalleryView />;
    } else if (view === 'list') {
        contentView = <ListView />;
    } else if (view === 'board') {
        contentView = <BoardView />;
    }

    return (
        <>
            <nav className="flex flex-col rounded-lg justify-between pb-2 gap-2 mx-16 ">
                <div className="flex justify-between py-4">
                    <div className="flex gap-1">
                        <h1
                            className={cn(
                                dm_sefif_display.className,
                                "text-beige text-5xl"
                            )}
                        >
                            {selectedShelf?.name}
                        </h1>
                        <p className="text-sm text-gray-400 self-end mx-8 pt-2 pb-1">{selectedShelf?._count.userBooks} books</p>
                    </div>
                    <ViewOptions view={view} setView={setView} />
                </div>
                <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                    <div className="flex gap-4">
                        <ShelfMenu />
                        <StatusMenu />
                    </div>
                    <div className="flex text-sm gap-2 items-center">
                        <SortingOptions />
                    </div>
                </div>
            </nav>

            <div className="mt-4 mx-16">
                {contentView}
            </div>

        </>
    );
}
export default BooksViewer
