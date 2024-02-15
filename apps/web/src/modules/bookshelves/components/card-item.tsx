import { Draggable } from '@hello-pangea/dnd';
import React, { useRef } from 'react'
import { BookItem } from '../types';
import BookCover from '@/components/book-cover';
import { useRouter } from "next/navigation";
import Link from 'next/link';
interface CardItemProps {
    data: BookItem;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index }) => {
    const router = useRouter();
    const linkRef = useRef<HTMLAnchorElement>(null);
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
                    <Link ref={linkRef} href={`/book/${data?.id}`} className="hidden"></Link>
                </div>

            )
            }
        </Draggable>
    );
}
export default CardItem
