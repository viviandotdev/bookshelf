import { Draggable } from '@hello-pangea/dnd';
import React, { useRef } from 'react'
import { BookItem } from '../types';
import BookCover from '@/components/book-cover';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
interface CardItemProps {
    data: BookItem;
    columnTitle: string;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index, columnTitle }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    let buttonAction: string | null = null;

    // Determine button action based on column title
    switch (columnTitle) {
        case 'Want to Read':
            buttonAction = "View Details"; // No button
            break;
        case 'Currently Reading':
            buttonAction = "Update Progress";
            break;
        case 'Read':
            buttonAction = "Write a Review";
            break;
        default:
            buttonAction = "View Details"; // No button; // Default case
            break;
    }

    return (
        <Draggable key={data.id} draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    role="button"
                    onClick={() => {
                        if (linkRef.current) {
                            linkRef.current.click();
                        }
                    }}
                    className="border-1 border-transparent hover:border-beige-200 py-2 px-3 text-sm bg-white rounded-md shadow-sm"
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
                    {buttonAction &&
                        <Button variant={"secondary"} size={"sm"} className="text-xs w-full mt-2 border border-beige-400">{buttonAction}</Button>
                    }
                    <Link ref={linkRef} href={`/book/${data?.id}`} className="hidden"></Link>
                </div>

            )
            }
        </Draggable>
    );
}
export default CardItem
