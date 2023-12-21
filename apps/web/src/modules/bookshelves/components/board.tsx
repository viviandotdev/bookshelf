"use client"
import React, { useEffect, useState } from 'react'
import ColumnContainer from './column-container';
import { UserBook } from '@/graphql/graphql';
import useLoadBooks from '@/api/use-load-books';
import logBookModal from '@/components/modals/log-book-modal';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { NetworkStatus } from '@apollo/client';

interface BoardProps {

}

enum Status {
    WantToRead = 0,
    CurrentlyReading = 1,
    Read = 2,
}

export type ColumnWithBooks = {
    title: string,
    books: UserBook[],
    fetchMore: any
};

export const Board: React.FC<BoardProps> = ({ }) => {
    // get the books data we need
    const { loadBooks, networkStatus } = useLoadBooks();
    const [data, setData] = useState<ColumnWithBooks[]>([]);

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
                    books: [...newData[status].books, ...fetchedData.data.userBooks],
                };
                return newData;
            });
        }
    };


    useEffect(() => {
        const loadData = async () => {
            const { data: readData, fetchMore: fetchMoreRead } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Read"
                        }
                    }
                }
            });
            const { data: readingData, fetchMore: fetchMoreReading } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Currently Reading"
                        }
                    }
                },
            });
            const { data: wantToRead, fetchMore: fetchMoreWantToRead } = await loadBooks({
                variables: {
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                    where: {
                        status: {
                            equals: "Want to Read"
                        }
                    }
                }
            });

            setData([
                {
                    title: "Want to Read",
                    books: wantToRead?.userBooks || [],
                    fetchMore: fetchMoreWantToRead
                }
                ,
                {
                    title: "Currently Reading",
                    books: readingData?.userBooks || [],
                    fetchMore: fetchMoreReading
                },
                {
                    title: "Read",
                    books: readData?.userBooks || [],
                    fetchMore: fetchMoreRead
                },
            ])


        };

        loadData();
    }, [loadBooks]);



    return (
        <div className="">
            <ColumnContainer data={data} />
            <button onClick={() => {
                loadMore(Status.WantToRead);
                loadMore(Status.CurrentlyReading);
                loadMore(Status.Read);
            }}>Fetch More</button>
        </div>
    );
}
export default Board
// query each column
// this is so we can paginate each one separately

// a card gets an order if it is
// added to a column
