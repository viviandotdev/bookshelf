'use client';
import React, { Suspense, useRef, useState } from 'react';
import BoardView from './board-view';
import ListView from './list-view';
import ShelfMenu from './shelf-menu';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { GalleryView } from './gallery-view';
import { ShelfTitle } from './shelf-title';
import { STATUS } from '@/lib/constants';
import { sortingSelects } from '@/config/books';
import { Button } from '@/components/ui/button';
import ToggleButton from './toggle-button';
interface BooksViewerProps {
  children?: React.ReactNode;
}

export const BooksViewer: React.FC<BooksViewerProps> = ({}) => {
  const [view, setView] = React.useState<string>('gallery');
  const statuses: string[] = Object.values(STATUS);
  let contentView;

  const boardViewRef = useRef(null);

  // Call the loadMore function from the parent component
  const callLoadMoreFromParent = async (index: number) => {
    if (boardViewRef.current) {
      await boardViewRef.current.loadMore(index);
    }
  };

  const handleScroll = async (e: any) => {
    const isAtBottom =
      Math.abs(
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
      ) < 1;
    if (isAtBottom) {
      await statuses.forEach((_, index) => {
        callLoadMoreFromParent(index);
      });
    }
  };

  if (view === 'gallery') {
    contentView = <GalleryView />;
  } else if (view === 'list') {
    contentView = <ListView />;
  } else if (view === 'board') {
    contentView = <BoardView ref={boardViewRef} />;
  }

  // State to track the button's current status
  const [status, setStatus] = useState('inactive'); // 'inactive', 'owned', 'not_owned'

  // Function to handle button click and cycle through the statuses
  const toggleStatus = () => {
    setStatus((currentStatus) => {
      switch (currentStatus) {
        case 'inactive':
          return 'owned';
        case 'owned':
          return 'not_owned';
        case 'not_owned':
          return 'inactive';
        default:
          return 'inactive';
      }
    });
  };

  return (
    <>
      <div
        onScroll={handleScroll}
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
              <ToggleButton type={'owned'} />
              <ToggleButton type={'favorites'} />
            </div>
            <div className='flex items-center gap-2 text-sm'>
              {view !== 'board' && (
                <SortingOptions selections={sortingSelects} />
              )}
            </div>
          </div>
        </nav>
        <div className='mx-16 mt-4 overflow-x-auto'>
          <Suspense fallback={<div>Loading...</div>}>{contentView}</Suspense>
        </div>
      </div>
    </>
  );
};
export default BooksViewer;
