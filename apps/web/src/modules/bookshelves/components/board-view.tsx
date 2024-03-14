'use client';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ColumnContainer from './column-container';
import useLoadBooks from '@/modules/bookshelves/queries/use-load-books';
import { STATUS } from '@/lib/constants';
import { ColumnWithBooks } from '../types';
import useBuildQuery from '../hooks/use-build-query';
import { generateQueryFilter } from '../utils';
import NoResults from '@/components/no-results';



export const BoardView = forwardRef((props, ref) => {
    // Expose the loadMore function to the parent component using ref
    useImperativeHandle(ref, () => ({
        loadMore
    }));

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
            variables: {
                ...queryFilter
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


    return (
        <div className='mt-4'>
            <div className='mb-6'>
                <ColumnContainer data={data} setData={setData} />
            </div>
            <div>{!data.some((column) => column.hasMore) && <NoResults />}</div>
        </div>

    );
});
export default BoardView;
