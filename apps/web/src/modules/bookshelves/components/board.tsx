"use client"
import React, { useEffect, useState } from 'react'
import ColumnContainer from './column-container';
import { SortOrder, UserBook } from '@/graphql/graphql';
import useLoadBooks from '@/api/use-load-books';
import { BOOKS_PAGE_SIZE, STATUS } from '@/lib/constants';
import { ColumnWithBooks } from '../types';
import * as R from 'ramda';
import useUserBookQuery from '../hooks/use-user-book-query';
interface BoardProps { }


export const Board: React.FC<BoardProps> = ({ }) => {
    const [data, setData] = useState<ColumnWithBooks[]>([]);
    const statuses: string[] = Object.values(STATUS);
    const { loadBooks, networkStatus } = useLoadBooks();
    const query = useUserBookQuery();
    const loadMore = async (status: number) => {
        const whereFilter = R.mergeDeepRight(query.where, {
            status: {
                equals: data[status].title
            },
        });
        const queryFilter = R.mergeRight(query, {
            offset: data[status].books.length, limit: BOOKS_PAGE_SIZE,
            where: {
                ...whereFilter
            },
            orderBy: {
                order: SortOrder.Asc,
            },
        });
        const fetchedData = await data[status].fetchMore({
            variables: {
                ...queryFilter,
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
                return newData;
            });
        }
    };

    const loadBooksByStatus = async (status: string) => {
        const whereFilter = R.mergeDeepRight(query.where, {
            status: {
                equals: status,
            },
        });
        const queryFilter = R.mergeRight(query, {
            offset: 0, limit: BOOKS_PAGE_SIZE, where: {
                ...whereFilter
            }, orderBy: {
                order: SortOrder.Asc,
            },
        });
        const { data: bookData, fetchMore } = await loadBooks(
            { variables: { ...queryFilter } }
        );

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
    }, [loadBooks, query]);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the total height of the document, including the invisible part due to scrolling
            const totalHeight = document.documentElement.scrollHeight;

            // Calculate the current scroll position and the height of the visible part of the document
            const { scrollTop, clientHeight } = document.documentElement;

            // Check if the user has reached the bottom of the page (considering a small offset)
            const isAtBottom = scrollTop + clientHeight >= totalHeight - 20;

            if (isAtBottom) {
                // Perform your action when the user scrolls to the bottom of the page
                statuses.map((_, index) => loadMore(index));
                // Perform additional actions or fetch more data
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup: remove the scroll event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data]); // Empty dependency array ensures this effect runs only once on component mount


    return (
        <div className="overflow-x-auto">
            <ColumnContainer data={data} />
        </div>
    );
}
export default Board
