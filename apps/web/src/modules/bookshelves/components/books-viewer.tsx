"use client"
import React, { Suspense } from 'react'
import BoardView from './board-view';
import ListView from './list-view';
import ShelfMenu from './shelf-menu';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { GalleryView } from './gallery-view';
import { ShelfTitle } from './shelf-title';


interface BooksViewerProps {
    children?: React.ReactNode

}

export const BooksViewer: React.FC<BooksViewerProps> = ({ }) => {

    const [view, setView] = React.useState<string>("gallery");
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
                        <ShelfTitle />
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
                <Suspense fallback={<div>Loading...</div>}>
                    {contentView}
                </Suspense>
            </div>

        </>
    );
}
export default BooksViewer
