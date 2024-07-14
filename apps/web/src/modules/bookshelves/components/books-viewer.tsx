'use client';
import React, { Suspense, useRef } from 'react';
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
import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import ToggleButton from './toggle-button';
import { Icons } from '@/components/icons';
import useShelfStore from '@/stores/use-shelf-store';
import SearchBar from './search-bar';
import KanbanTemplate from './kanban-template';
interface BooksViewerProps {
  children?: React.ReactNode;
}

export const BooksViewer: React.FC<BooksViewerProps> = ({}) => {
  const [view, setView] = React.useState<string>(() => {
    // Get the default view from local storage, or use 'gallery' as the default
    return localStorage.getItem('defaultView') || 'gallery';
  });

  //   const [view, setView] = React.useState<string>('gallery');
  const statuses: string[] = Object.values(STATUS);
  let contentView;
  const router = useRouter();
  const pathname = usePathname();
  const boardViewRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const createQueryString = useCreateQueryString();
  // Call the loadMore function from the parent component
  const searchParams = useSearchParams();
  const buttonIsEnabled =
    searchParams?.get('status') ||
    searchParams?.get('shelf') ||
    searchParams?.get('owned') ||
    searchParams?.get('favorites');

  const updateView = (newView: string) => {
    setView(newView);
    localStorage.setItem('defaultView', newView);
  };

  const updateSelected = useShelfStore((state) => state.updateSelected);

  if (view === 'gallery') {
    contentView = <GalleryView />;
  } else if (view === 'list') {
    contentView = <ListView />;
  } else if (view === 'board') {
    return <KanbanTemplate view={view} setView={setView} />;
  }

  return (
    <>
      <div
        className='w-full overflow-y-auto bg-beige-50 pt-3.5'
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <nav className='mx-16 flex flex-col justify-between gap-2 rounded-lg pb-2 '>
          <div className='flex justify-between py-4'>
            <div className='flex gap-1'>
              <ShelfTitle />
            </div>
            <ViewOptions view={view} setView={updateView} />
          </div>
          <div className='relative flex w-full items-center justify-between gap-2 text-sm'>
            <div className='flex gap-4'>
              <ShelfMenu />
              <StatusMenu />

              <ToggleButton type={'owned'} />
              <ToggleButton type={'favorites'} />
              <Button
                onClick={() => {
                  updateSelected('All Books');
                  startTransition(() => {
                    router.push(
                      `${pathname}?${createQueryString({
                        shelf: null,
                        status: null,
                        owned: null,
                        favorites: null,
                      })}`
                    );
                  });
                }}
                disabled={!buttonIsEnabled}
                variant={'pill'}
                size={'sm'}
                className='bg-beige-50 px-0 font-normal text-red-500 hover:bg-beige-50 disabled:text-gray-500'
              >
                <Icons.close className='mr-1 h-4 w-4' />
                Clear Filters
              </Button>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <div className='w-[312px]'>
                <SearchBar />
              </div>
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
