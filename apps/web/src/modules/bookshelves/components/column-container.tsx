"use client"
import React, { useEffect, useState } from 'react'
import ColumnItem from './column-item';
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ColumnWithBooks } from '../types';
import { useUpdateUserBookOrder } from '../mutations/use-update-userbook-order';
import { reorder } from '../utils';
// export type CardWithList = Card & { list: List };


interface ColumnContainerProps {
    data: ColumnWithBooks[];
    setData: React.Dispatch<React.SetStateAction<ColumnWithBooks[]>>;
}


export const ColumnContainer: React.FC<ColumnContainerProps> = ({ data, setData }) => {
    const [orderedData, setOrderedData] = useState(data);
    const { updateUserBookOrder } = useUpdateUserBookOrder();
    useEffect(() => {
        setOrderedData(data)
        console.log(data)
    }, [data])

    const onDragEnd = (result: any) => {

        const { destination, source, type } = result;
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
                const items = reorderedCards.map((userBook, index) => {
                    return {
                        id: userBook.book?.id,
                        title: userBook.book?.title,
                        order: index,
                        status: userBook.status
                    }
                });
                updateUserBookOrder({ items })
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
                const items = destinationList.books.map((userBook, index) => {
                    return {
                        id: userBook.book?.id,
                        title: userBook.book?.title,
                        order: index,
                        status: userBook.status
                    }
                });
                updateUserBookOrder({ items })
            }

        }


    }
    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}  >
                <Droppable droppableId='lists' type="list" direction="horizontal">
                    {
                        (provided) => (
                            <ol {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="flex justify-between">
                                {orderedData.map((list, index) => {
                                    return (
                                        <ColumnItem
                                            key={index}
                                            isScrollable={true}
                                            setData={setData}
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
