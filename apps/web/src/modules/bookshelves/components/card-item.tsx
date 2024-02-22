import { Draggable } from '@hello-pangea/dnd';
import React, { useRef } from 'react'
import { BookItem } from '../types';
import BookCover from '@/components/book-cover';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
interface CardItemProps {
    data: BookItem;
    index: number;
    status: string;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index, status }) => {
    const router = useRouter();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const buttonText = status === "Read" ? "Write a Review" : "View Activity";
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
                    className="border-2 border-transparent hover:border-beige-500/50 py-2 px-3 text-sm bg-white rounded-md shadow-sm"
                >
                    <div className="flex gap-4">
                        <BookCover src={data.coverImage} className={"shadow-md"} size={"sm"} />
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-0.5">
                                <div className="text-base font-medium text-beige-700 line-clamp-2">
                                    {data.title}
                                </div>
                                <div className="text-gray-400">
                                    {data.author}
                                </div>

                            </div>
                            <div className="text-xs text-gray-400">Completed On Jul 23, 2022</div>
                        </div>


                    </div>

                    {status !== "Currently Reading" ?
                        <Button variant={"secondary"} size={"sm"} className="w-full h-9 mt-4 mb-1 border border-beige-500/50">
                            {buttonText}
                        </Button>
                        :
                        <div className=" mt-4 mb-1 w-full flex justify-center gap-2 items-center">
                            <Progress className="w-full items-center h-2.5" value={60} />
                            <div className="items-center text-xs text-beige-700 font-semibold">60%</div>
                        </div>
                    }

                    <Link ref={linkRef} href={`/book/${data?.id}`} className="hidden"></Link>
                </div>
            )
            }
        </Draggable>
    );
}
export default CardItem
