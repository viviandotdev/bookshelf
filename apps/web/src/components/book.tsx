"use client";
import React, { useEffect, useState, useRef, useReducer } from "react";
import { Icons } from "./icons";
import BookCover from "./book-cover";
import BookActions from "./book-actions";
import AlertModal from "./modals/alert-modal";
import Link from "next/link";
import { UserBook } from "@/graphql/graphql";
import { useJournalEntryModal } from "@/components/modals/journal-entry-modal/use-journal-entry-modal";
import useUserBookStore from "@/stores/use-user-book-store";
import { useRemoveUserBook } from "@/api/use-remove-user-book";
import useShelfStore from "@/stores/use-shelf-store";

interface BookProps {
    details?: {
        progress: number;
        date_started: string;
    };
    userBook: UserBook;
    responsive?: boolean;
    showRemoveBook?: boolean;
}

export const Book: React.FC<BookProps> = ({
    userBook,
    details,
    responsive,
    showRemoveBook,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const { book, shelves } = userBook;
    const [isLoading, setIsLoading] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);
    const { removeUserBook } = useRemoveUserBook();
    const { decrementLibraryCount, decrementShelfCount } = useShelfStore();
    const { book: myBook } = useUserBookStore();
    const [status, setStatus] = useState(userBook.status ? userBook.status : "");
    const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0); // Initial value
    const [percent, setPercent] = useState(0);
    const { journalEntry } = useJournalEntryModal();
    useEffect(() => {
        setStatus(userBook.status ? userBook.status : "");
        setRating(userBook.rating ? userBook.rating : 0);
        if (userBook.journalEntry && userBook.journalEntry.length > 0) {
            setPercent(userBook.journalEntry[0].currentPercent || 0,)
        }
    }, [userBook]);

    useEffect(() => {
        // update percent detail
        if (myBook && myBook.id === userBook.book?.id) {
            setPercent(journalEntry.percent)
        }

    }, [journalEntry]);

    const onDelete = async () => {
        setIsLoading(true);
        const deletedBook = await removeUserBook(book!.id);
        if (deletedBook && deletedBook.shelves && deletedBook.shelves.length > 0) {
            // delete from all shelves
            deletedBook.shelves.map((item) => {
                (decrementShelfCount(item.shelf.name))
            })
        } else {
            (decrementLibraryCount("Unshelved"))
        }
        (decrementLibraryCount("All Books"))
        setIsLoading(false);
        setOpenAlert(false);
    };
    return (
        <div
            className={`${responsive && "hidden md:block"
                } cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform ${isHovered ? "scale-95 " : ""
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setOpenMenu(false);
                setIsHovered(false);
            }}

        >
            <div className={`flex-row cursor-pointer `}>
                <div>
                    <BookCover
                        src={book && book.coverImage ? book.coverImage : null}
                        size={"dynamic"}
                    />
                    <div className="top-0 absolute"></div>
                </div>
                {details && (
                    <BookDetails
                        progress={percent}
                        dateStarted={details.date_started}
                    />
                )}
            </div>
            {bookActions()}
        </div>
    );

    function bookActions() {
        return <>
            <AlertModal
                title={"Are you sure you want to remove this book from your shelf?"}
                description={
                    "Removing this book will clear associated ratings, reviews and reading activity"
                }
                isOpen={openAlert}
                onClose={() => setOpenAlert(false)}
                onConfirm={onDelete}
                loading={isLoading}
            />
            <div
                className={`${details ? "mb-10" : "mb-2"}   ${isHovered || openMenu ? "block" : "hidden"} flex inset-2 items-end justify-center opacity-90 absolute`}
                onClick={() => {
                    if (linkRef.current) {
                        linkRef.current.click();
                    }
                }}
            >
                <div className="flex-col justify-end" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div
                        onMouseLeave={() => {
                            setOpenMenu(false);
                            setOpenDropdown(false);
                        }}
                        className="flex gap-3 bg-secondary text-primary font-bold py-2 px-4 rounded mx-2"
                    >
                        <Icons.book className="cursor-pointer h-6 w-6 text-primary" onClick={(e) => {
                            e.stopPropagation();
                        }} />
                        <Icons.heart className="cursor-pointer h-6 w-6 text-primary" onClick={(e) => {
                            e.stopPropagation();
                        }} />
                        <BookActions
                            openDropdown={openDropdown}
                            setOpenDropdown={setOpenDropdown}
                            setOpenAlert={setOpenAlert}
                            status={status}
                            setStatus={setStatus}
                            book={book!}
                            setRating={setRating}
                            rating={rating}
                            shelves={shelves!}
                            showRemoveBook={showRemoveBook}
                        />
                    </div>
                </div>
            </div>
            <Link ref={linkRef} href={`/book/${book?.id}`} className="hidden"></Link>
        </>
    }
};

interface BookDetailsProps {
    progress: number;
    dateStarted: string;
}

export const BookDetails: React.FC<BookDetailsProps> = ({
    progress,
    dateStarted,
}) => {
    return (
        <div className="pt-1.5 pb-1.5 pl-3 pr-3 bg-secondary rounded-sm text-xs text-muted-foreground">
            <div className="flex justify-between">
                <div className="flex items-center text-primary">
                    <div className="align-middle">
                        <Icons.pieChart className="h-3 w-3 opacity-50" />
                    </div>
                    <span className="ml-1.5 text-muted-foreground">{progress}%</span>
                </div>
                <div className="text-muted-foreground hidden lg:block">
                    {dateStarted}
                </div>
            </div>
        </div>
    );
};

export default Book;
