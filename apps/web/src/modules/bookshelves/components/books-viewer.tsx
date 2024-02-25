'use client';
import React, { Suspense, useRef } from 'react';
import BoardView from './board-view';
import ListView from './list-view';
import ShelfMenu from './shelf-menu';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { GalleryView } from './gallery-view';
import { ShelfTitle } from './shelf-title';

interface BooksViewerProps {
  children?: React.ReactNode;
}

export const BooksViewer: React.FC<BooksViewerProps> = ({}) => {
  const [view, setView] = React.useState<string>('board');

  let contentView;

  if (view == 'board') {
    return <BoardView />;
  }
  if (view === 'gallery') {
    contentView = <GalleryView />;
  } else if (view === 'list') {
    contentView = <ListView />;
  } else if (view === 'board') {
    contentView = <BoardView />;
  }

  return (
    <>
      <div
        className='w-full overflow-y-auto bg-beige-50 pt-3.5'
        style={{ height: 'calc(100vh - 96px)' }}
      >
        <nav className='mx-16 flex flex-col justify-between gap-2 rounded-lg pb-2 '>
          <div className='flex justify-between py-4'>
            <div className='flex gap-1'>
              <ShelfTitle />
            </div>
            <ViewOptions view={view} setView={setView} />
          </div>
          <div className='relative flex w-full items-center justify-between gap-2 text-sm'>
            <div className='flex gap-4'>
              <ShelfMenu />
              <StatusMenu />
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <SortingOptions />
            </div>
          </div>
        </nav>

        <div className='mx-16 mt-4'>
          <Suspense fallback={<div>Loading...</div>}>{contentView}</Suspense>
        </div>
      </div>
    </>
  );
};
export default BooksViewer;
