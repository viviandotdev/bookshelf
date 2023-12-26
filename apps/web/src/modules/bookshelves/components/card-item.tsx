import { Draggable } from '@hello-pangea/dnd';
import React from 'react'
import { BookItem } from '../types';
import BookCover from '@/components/book-cover';

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
                    onClick={() => console.log("clicked!")}
                    className="border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
                >
                    <div className="flex gap-2">
                        <BookCover src={data.coverImage} size={"xs"} />
                        <div>
                            <div className="font-bold">
                                {data.title}
                            </div>
                            <div>
                                {data.author}
                            </div>
                        </div>

                    </div>
                </div>
            )
            }
        </Draggable>
    );
}
export default CardItem
