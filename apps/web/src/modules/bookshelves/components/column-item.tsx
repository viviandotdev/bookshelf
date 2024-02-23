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
import { UserBook } from '@/graphql/graphql';

interface ColumnItemProps {
    data: ColumnWithBooks;
    setData: React.Dispatch<React.SetStateAction<ColumnWithBooks[]>>;
    isScrollable?: boolean;
}

export const ColumnItem: React.FC<ColumnItemProps> = ({ data, setData }) => {
    const query = useBuildQuery();
    const [isLoading, setIsLoading] = useState(false);


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
                                <div
                                    className={cn(
                                        "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                                        data.books.length > 0 ? "mt-2" : "mt-0",)}>
                                    {
                                        data.books.map((book: UserBook, index: number) => (
                                            <CardItem
                                                key={index}
                                                status={data.title}
                                                index={index}
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
