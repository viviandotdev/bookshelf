"use client"
import React, { useState } from 'react'
import ColumnHeader from './column-header';
import { cn } from '@/lib/utils';
import CardItem from './card-item';
import { UserBook } from '@/graphql/graphql';
import { Droppable } from '@hello-pangea/dnd';
import { BookItem, ColumnWithBooks } from '../types';

interface ColumnItemProps {
    data: ColumnWithBooks;
    index: number;
}

export const ColumnItem: React.FC<ColumnItemProps> = ({ data, index }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li
            className="shrink-0 h-full w-[272px] select-none"
        >
            <div
                className="w-full rounded-md bg-secondary shadow-md pb-2">
                <ColumnHeader title={data.title} />
                <Droppable droppableId={data.title} type="card">
                    {
                        (provided) => (
                            <ol
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={cn(
                                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                                    data.books.length > 0 ? "mt-2" : "mt-0",
                                )}
                            >
                                {data.books.map((book: BookItem, index: number) => (
                                    <CardItem
                                        index={index}
                                        key={index}
                                        data={book}
                                    />
                                ))}
                                {provided.placeholder}
                            </ol>
                        )
                    }
                </Droppable>
            </div>
        </li>
    )
}

export default ColumnItem
