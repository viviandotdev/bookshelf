import { Draggable } from '@hello-pangea/dnd';
import React, { useEffect, useRef, useState } from 'react'
import BookCover from '@/components/book-cover';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { UserBook } from '@/graphql/graphql';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import rating from '@/components/rating';
import { cn } from '@/lib/utils';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import useUserBookStore from '@/stores/use-user-book-store';
interface CardItemProps {
    data: UserBook;
    index: number;
    status: string;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index, status: cardStatus }) => {
    // console.log(data);
    const router = useRouter();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const buttonText = cardStatus === "Read" ? "Write a Review" : "View Activity";
    const logBookModal = useLogBookModal();
    const journalEntryModal = useJournalEntryModal()
    const { updateBookId, updateStatus, setBook, initShelves } = useUserBookStore();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [status, setStatus] = useState(data.status ? data.status : "");
    const [rating, setRating] = useState(data.rating ? data.rating : 0); // Initial value
    const [openAlert, setOpenAlert] = useState(false); // Initial value
    if (!data) return null;
    const { book, shelves } = data

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
                    className="group/item relative border-2 border-transparent hover:border-beige-500/50 py-2 px-3 text-sm bg-white rounded-md shadow-sm"
                >
                    <div className="flex gap-4">
                        <BookCover src={book?.coverImage} className={"shadow-md"} size={"sm"} />
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col gap-0.5">
                                <div className="text-base font-medium text-beige-700 line-clamp-2">
                                    {book?.title}
                                </div>
                                <div className="text-gray-400">
                                    {book?.author}
                                </div>

                            </div>
                            <div className="text-xs text-gray-400">Completed On Jul 23, 2022</div>
                        </div>


                    </div>

                    {cardStatus !== "Currently Reading" ?
                        <Button
                            onClick={
                                (e) => {
                                    e.stopPropagation();
                                }
                            }
                            variant={"secondary"} size={"sm"} className="w-full h-9 mt-4 mb-1 border border-beige-500/50">
                            {buttonText}
                        </Button>
                        :
                        <div className=" mt-4 mb-1 w-full flex justify-center gap-2 items-center">
                            <Progress className="w-full items-center h-2.5" value={60} />
                            <div className="items-center text-xs text-beige-700 font-semibold">60%</div>
                        </div>
                    }
                    <div className={cn("hidden group-hover/item:block hover:bg-gray-200 rounded-sm px-1", openDropdown && "block")}>
                        <div className="flex absolute top-2 right-2 shadow-md rounded-md" >
                            {
                                cardStatus == "Currently Reading" &&
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setBook(book!);
                                        updateStatus(status);
                                        updateBookId(book!.id);
                                        journalEntryModal.onOpen();
                                    }}
                                    variant={"card"}
                                    size={"xs"}
                                    className={cn("px-2 rounded-l-md")}>
                                    <Icons.plus className={`h-4 w-4`} />
                                </Button>
                            }
                            <BookActions
                                book={book!}
                                setOpenAlert={setOpenAlert}
                                // openAlert={openAlert}
                                openDropdown={openDropdown}
                                setOpenDropdown={setOpenDropdown}
                                status={status}
                                setStatus={setStatus}
                                setRating={setRating}
                                rating={rating}
                                shelves={shelves!}
                                side={"bottom"}
                                trigger={
                                    <Button
                                        variant={"card"}
                                        size={"xs"}
                                        className={cn("px-2 rounded-md")}
                                    >
                                        <a className="">
                                            <Icons.more className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-gray-500 stroke-1" />
                                        </a>
                                    </Button>
                                }
                            />
                        </div>

                    </div>

                    <Link ref={linkRef} href={`/book/${data?.book?.id}`} className="hidden"></Link>
                </div>
            )
            }
        </Draggable>
    );
}
export default CardItem
