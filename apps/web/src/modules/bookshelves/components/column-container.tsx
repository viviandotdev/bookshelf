"use client"
import { UserBook } from '@/graphql/graphql';
import React, { useEffect, useState } from 'react'
import ColumnItem from './column-item';
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ColumnWithBooks } from '../types';
import { useUpdateUserBookOrder } from '../api/use-update-userbook-order';
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
    const { updateUserBookOrder } = useUpdateUserBookOrder();
    useEffect(() => {
        setOrderedData(data)
    }, [data])

    const onDragEnd = (result: any) => {

        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        if (type === "card") {
            // Ordered data is a list of lists with cards
            let newOrderedData = [...orderedData];
            // Find the list that the card is currently in
            const sourceList = newOrderedData.find(list => list.title === source.droppableId);
            const destinationList = newOrderedData.find(list => list.title === destination.droppableId);
            if (!sourceList || !destinationList) {
                return;
            }
            if (!sourceList.books || !destinationList.books) {
                sourceList.books = [];
            }

            if (!destinationList.books) {
                destinationList.books = [];
            }
            // Moving cards within the same list
            if (source.droppableId === destination.droppableId) {
                const reorderedCards = reorder(sourceList.books, source.index, destination.index);
                reorderedCards.forEach((book, index) => {
                    book.order = index;
                })
                sourceList.books = reorderedCards;
                setOrderedData(newOrderedData);

                updateUserBookOrder({ items: reorderedCards })
            }
            // Moving cards between lists
            else {
                const [movedCard] = sourceList.books.splice(source.index, 1);

                //  Assign the new status to the moved card
                movedCard.status = destination.droppableId;
                // Add the card to the destination list

                destinationList.books.splice(destination.index, 0, movedCard);
                sourceList.books.forEach((book, index) => {
                    book.order = index;
                })

                destinationList.books.forEach((book, index) => {
                    book.order = index;
                })
                setOrderedData(newOrderedData);
                updateUserBookOrder({ items: destinationList.books })
            }

        }


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
