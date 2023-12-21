import { UserBook } from '@/graphql/graphql';
import { Draggable } from '@hello-pangea/dnd';
import React from 'react'

interface CardItemProps {
    data: UserBook;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index }) => {

    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    role="button"
                    className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
                >
                    {data.book!.title}
                </div>
            )
            }
        </Draggable>
    );
}
export default CardItem
