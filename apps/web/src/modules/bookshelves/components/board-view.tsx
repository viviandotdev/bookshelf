'use client';
import React, { Suspense, useEffect, useState } from 'react';
import ColumnContainer from './column-container';
import useLoadBooks from '@/modules/bookshelves/queries/use-load-books';
import { STATUS } from '@/lib/constants';
import { ColumnWithBooks } from '../types';
import useBuildQuery from '../hooks/use-build-query';
import { generateQueryFilter } from '../utils';
import ShelfMenu from './shelf-menu';
import ShelfTitle from './shelf-title';
import { SortingOptions } from './sorting-options';
import StatusMenu from './status-menu';
import NoResults from '@/components/no-results';
interface BoardViewProps { }

export const BoardView: React.FC<BoardViewProps> = ({ }) => {
    const [data, setData] = useState<ColumnWithBooks[]>([]);
    const statuses: string[] = Object.values(STATUS);
    const { loadBooks, networkStatus } = useLoadBooks();
    const query = useBuildQuery();
    const [isLoading, setIsLoading] = useState(false);

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
                    // console.log(newData[index].books.length)
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
            variables: { ...queryFilter },
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
                loadMore(index);
            });
        }
    };

    return (
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
                    {/* <ViewOptions view={"board"} setView={setView} /> */}
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
                <div className='mb-6'>
                    <ColumnContainer data={data} setData={setData} />
                </div>
                <div>
                    {!data.some((column) => column.hasMore) &&
                        <NoResults />
                    }
                </div>
            </div>
        </div>
    );
};
export default BoardView;
