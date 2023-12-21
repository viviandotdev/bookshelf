"use client"
import React, { useEffect, useState } from 'react'
import ColumnContainer from './column-container';
import { SortOrder, UserBook } from '@/graphql/graphql';
import useLoadBooks from '@/api/use-load-books';
import { BOOKS_PAGE_SIZE, STATUS } from '@/lib/constants';
import { ColumnWithBooks } from '../types';

interface BoardProps { }


export const Board: React.FC<BoardProps> = ({ }) => {
    // get the books data we need
    const [data, setData] = useState<ColumnWithBooks[]>([]);
    const statuses: string[] = Object.values(STATUS);
    const { loadBooks, networkStatus } = useLoadBooks();

    const loadMore = async (status: number) => {
        const fetchedData = await data[status].fetchMore({
            variables: {
                // Update variables for pagination
                offset: data[status].books.length,
                limit: BOOKS_PAGE_SIZE, // Number of items to fetch in each subsequent load
                where: {
                    status: {
                        equals: data[status].title
                    }
                }
            },
        });

        if (fetchedData.data.userBooks) {
            setData(prevData => {
                const newData = [...prevData];
                newData[status] = {
                    ...newData[status],
                    books: [...newData[status].books, ...fetchedData.data.userBooks?.map((book: any) => ({
                        id: book.book?.id,
                        title: book.book?.title,
                        order: book.order,
                        status: book.status,

                    }))],
                };
                console.log('newData', newData);
                return newData;
            });
        }
    };

    const loadBooksByStatus = async (status: string) => {
        const { data: bookData, fetchMore } = await loadBooks({
            variables: {
                offset: 0,
                limit: BOOKS_PAGE_SIZE,
                where: {
                    status: {
                        equals: status,
                    },
                },
                orderBy: {
                    order: SortOrder.Asc,
                },
            },
        });

        return {
            title: status,
            books: bookData?.userBooks?.map((book: any) => ({
                id: book.book?.id,
                title: book.book?.title,
                order: book.order,
                status: book.status,
            })) || [],
            fetchMore,
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const promises = statuses.map(status => loadBooksByStatus(status));
                const [wantToReadItem, upNext, readingItem, readItem, abandonedItem] = await Promise.all(promises);
                setData([wantToReadItem, upNext, readingItem, readItem, abandonedItem]);
            } catch (error) {
                // Handle errors here
                console.error('Error while loading book data:', error);
            }
        };
        loadData();
    }, [loadBooks]);


    return (
        <div className="">
            <ColumnContainer data={data} />
            <button onClick={() => {
                statuses.map((_, index) => loadMore(index));
            }}>Fetch More</button>
        </div>
    );
}
export default Board
