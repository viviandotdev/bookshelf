'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import ShelfMenu from './shelf-menu';
import StatusMenu from './status-menu';
import { ViewOptions } from './view-options';
import { ShelfTitle } from './shelf-title';
import { STATUS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import ToggleButton from './toggle-button';
import { Icons } from '@/components/icons';
import useShelfStore from '@/stores/use-shelf-store';
import SearchBar from './search-bar';
import ColumnContainer from './column-container';
import NoResults from '@/components/no-results';
import useBuildQuery from '../hooks/use-build-query';
import useLoadBooks from '../queries/use-load-books';
import { ColumnWithBooks } from '../types';
import { generateQueryFilter } from '../utils';
interface KanbanTemplateProps {
  children?: React.ReactNode;
  view: string;
  setView: (newView: string) => void;
}

export const KanbanTemplate: React.FC<KanbanTemplateProps> = ({
  view,
  setView,
}) => {
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

  const [data, setData] = useState<ColumnWithBooks[]>([]);
  const statuses: string[] = Object.values(STATUS);
  const { loadBooks, networkStatus } = useLoadBooks();
  const query = useBuildQuery();
  const [isLoading, setIsLoading] = useState(false);

  const updateView = (newView: string) => {
    setView(newView);
    localStorage.setItem('defaultView', newView);
  };

  const loadMore = async (index: number) => {
    const queryFilter = generateQueryFilter(
      query,
      data[index].title,
      data[index].books.length
    );
    setIsLoading(true);
    if (data[index] && data[index].hasMore) {
      const { data: fetchedData } = await data[index].fetchMore({
        variables: {
          ...queryFilter,
        },
      });

      if (fetchedData.getUserBooks.userBooks) {
        setData((prevData) => {
          const newData = [...prevData];
          const length = newData[index].books.length;
          // Check if newData[index] is undefined
          newData[index] = {
            ...newData[index],
            books: [
              ...newData[index].books,
              ...fetchedData.getUserBooks.userBooks?.map(
                (book: any, index: number) => ({
                  ...book,
                  order: length + index, // Calculate order based on current length of books array
                })
              ),
            ],
            hasMore: fetchedData.getUserBooks.hasMore,
            totalBooks: fetchedData.getUserBooks.totalBooks,
          };
          return newData;
        });
      }
    }
    setIsLoading(false);
  };

  const loadBooksByStatus = async (status: string) => {
    const queryFilter = generateQueryFilter(query, status);

    const { data: bookData, fetchMore } = await loadBooks({
      variables: {
        ...queryFilter,
      },
    });

    return {
      title: status,
      books:
        bookData?.getUserBooks.userBooks?.map((book, index) => ({
          ...book,
          order: index,
        })) || [],
      fetchMore,
      hasMore: bookData?.getUserBooks.hasMore || false,
      totalBooks: bookData?.getUserBooks.totalBooks || 0,
    };
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const promises = statuses.map((status) => loadBooksByStatus(status));
        const [wantToReadItem, upNext, readingItem, readItem] =
          await Promise.all(promises);
        setData([wantToReadItem, upNext, readingItem, readItem]);
      } catch (error) {
        // Handle errors here
        console.error('Error while loading book data:', error);
      }
    };
    loadData();
  }, [loadBooks, query]);

  const handleScroll = async (e: any) => {
    const isAtBottom =
      Math.abs(
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
      ) < 1;
    if (isAtBottom) {
      await statuses.forEach((_, index) => {
        // callLoadMoreFromParent(index);
        loadMore(index);
      });
    }
  };

  const updateSelected = useShelfStore((state) => state.updateSelected);

  return (
    <>
      <div
        onScroll={handleScroll}
        className='w-full overflow-y-auto bg-beige-50 pt-3.5'
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <nav className='mx-16 flex flex-col justify-between gap-2 rounded-lg pb-2 '>
          <div className='flex justify-between py-4'>
            <div className='flex gap-1'>
              <ShelfTitle />
            </div>
            <ViewOptions view={'board'} setView={updateView} />
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
            </div>
          </div>
        </nav>
        <div className='mx-16 mt-4 overflow-x-auto'>
          <Suspense fallback={<div>Loading...</div>}>
            <div className='mt-4'>
              <div className='mb-6'>
                <ColumnContainer data={data} setData={setData} />
              </div>
              <div>
                {!data.some((column) => column.hasMore) && <NoResults />}
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
};
export default KanbanTemplate;
