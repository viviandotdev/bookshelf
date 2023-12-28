"use client"
import React, { use, useEffect } from 'react'
import BoardView from './board-view';
import ListView from './list-view';
import ShelfMenu from './shelf-menu';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { GalleryView } from './gallery-view';


interface BooksViewerProps {
    children?: React.ReactNode
}

export const BooksViewer: React.FC<BooksViewerProps> = ({ children }) => {
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
            <nav className="flex flex-col w-full rounded-lg justify-between mt-8 pb-2">
                {children}
                <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                    <div className="flex gap-2">
                        <ShelfMenu />
                        <StatusMenu />
                    </div>
                    <div className="flex text-sm gap-2 items-center">
                        <SortingOptions />
                        <ViewOptions view={view} setView={setView} />
                    </div>
                </div>
                <hr className="my-2 border-t-1 border-primary" />
            </nav>
            <div>
                {contentView}
            </div>

        </>
    );
}
export default BooksViewer
