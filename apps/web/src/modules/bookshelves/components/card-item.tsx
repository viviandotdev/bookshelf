import { Draggable } from '@hello-pangea/dnd';
import React from 'react'
import { BookItem } from '../types';

interface CardItemProps {
    data: BookItem;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index }) => {

    return (
        <Draggable key={data.id} draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    role="button"
                    className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
                >
                    {data.title}
                </div>
            )
            }
        </Draggable>
    );
}
export default CardItem
