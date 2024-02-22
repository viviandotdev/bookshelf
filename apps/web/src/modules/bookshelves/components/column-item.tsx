"use client"
import React, { useState } from 'react'
import ColumnHeader from './column-header';
import { cn } from '@/lib/utils';
import CardItem from './card-item';
import { Droppable } from '@hello-pangea/dnd';
import { BookItem, ColumnWithBooks } from '../types';
import { STATUS } from '@/lib/constants';
import useBuildQuery from '../hooks/use-build-query';
import { generateQueryFilter } from '../utils';

interface ColumnItemProps {
    data: ColumnWithBooks;
    index: number;
    setData: React.Dispatch<React.SetStateAction<ColumnWithBooks[]>>;
    isScrollable?: boolean;
}

export const ColumnItem: React.FC<ColumnItemProps> = ({ data, index, setData }) => {
    const query = useBuildQuery();
    const [isLoading, setIsLoading] = useState(false);

    const handleScroll = async (e: any, status: string) => {
        const statuses: string[] = Object.values(STATUS);
        const bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop) === Math.floor(e.target.clientHeight);
        if (bottom) {
            const index = statuses.indexOf(status)
            // Load more books
            const queryFilter = generateQueryFilter(query, data.title, data.books.length)
            setIsLoading(true);
            const fetchedData = await data.fetchMore({
                variables: {
                    ...queryFilter,
                },
            });

            setIsLoading(false);

            if (fetchedData.data.userBooks) {
                setData(prevData => {
                    const newData = [...prevData];
                    newData[index] = {
                        ...newData[index],
                        books: [...newData[index].books, ...fetchedData.data.userBooks?.map((book: any) => ({
                            id: book.book?.id,
                            title: book.book?.title,
                            order: book.order,
                            status: book.status,
                            coverImage: book.book?.coverImage,
                            author: book.book.author,

                        }))],
                    };
                    return newData;
                });
            }
        }
    }

    return (
        <li
            className="shrink-0 h-full w-[312px] select-none"
        >
            <div
                className="w-full rounded-md bg-beige-100 shadow-md pb-2">
                <ColumnHeader title={data.title} />
                <Droppable droppableId={data.title} type="card">
                    {
                        (provided) => (
                            <ol
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <div onScroll={(e) => {
                                    handleScroll(e, data.title)
                                }} className={cn(
                                    "overflow-y-auto max-h-[700px] mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                                    data.books.length > 0 ? "mt-2" : "mt-0",)}>
                                    {
                                        data.books.map((book: BookItem, index: number) => (
                                            <CardItem
                                                status={data.title}
                                                index={index}
                                                key={index}
                                                data={book}
                                            />
                                        ))
                                    }
                                    {provided.placeholder}
                                    <div>
                                        {isLoading && <div className="text-center text-sm text-gray-500">Loading...</div>}
                                    </div>
                                </div>

                            </ol>
                        )
                    }
                </Droppable>
            </div>
        </li >
    )
}

export default ColumnItem
