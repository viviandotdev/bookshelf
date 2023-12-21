"use client"
import { UserBook } from '@/graphql/graphql';
import React, { useEffect, useState } from 'react'
import ColumnItem from './column-item';
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

export type ColumnWithBooks = {
    title: string,
    books: UserBook[]
};

// export type CardWithList = Card & { list: List };


interface ColumnContainerProps {
    data: ColumnWithBooks[];
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)

    result.splice(endIndex, 0, removed)
    return result
}


export const ColumnContainer: React.FC<ColumnContainerProps> = ({ data }) => {
    const [orderedData, setOrderedData] = useState(data);
    useEffect(() => {
        console.log("data", orderedData)
        console.log("data", data)
        setOrderedData(data)
    }, [data])

    const onDragEnd = (result: any) => {

        const { destination, source, draggableId, type } = result;
        console.log("result", result)

    }
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId='lists' type="list" direction="horizontal">
                    {
                        (provided) => (
                            <ol {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex gap-x-3 h-full">
                                {orderedData.map((list, index) => {
                                    return (
                                        <ColumnItem
                                            key={index}
                                            index={index}
                                            data={list}
                                        />
                                    )
                                })}
                                {provided.placeholder}
                            </ol>
                        )
                    }
                </Droppable>
            </DragDropContext>


        </div>
    );
}
export default ColumnContainer
