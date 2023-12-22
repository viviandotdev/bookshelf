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
        console.log('loadMore', data[status]);
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
                console.log("bottom", data)
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
        <div className="">
            <ColumnContainer data={data} />
        </div>
    );
}
export default Board
