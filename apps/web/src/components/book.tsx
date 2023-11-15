"use client";
import React, { use, useEffect, useState } from "react";
import { Icons } from "./icons";
import BookCover from "./book-cover";
import BookActions from "./book-actions";
import { Shelf, UserBook, useGetMostRecentJournalEntryLazyQuery, useGetMostRecentJournalEntryQuery } from "../graphql/graphql";
import { useRouter } from "next/navigation";
import { JouranlEntryModal } from "@/modules/journal/components/journal-entry-modal";
import AlertModal from "./modals/alert-modal";
import { useRemoveUserBook } from "@/hooks/user-books/mutations";
import { decrementShelfCount, decrementLibraryCount, initLibrary, initShelves } from "@/stores/shelf-slice";
import { useAppDispatch } from "@/stores";
import Link from "next/link";

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
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const { book, shelves } = userBook;
    const [isLoading, setIsLoading] = useState(false);
    const { removeUserBook } = useRemoveUserBook();
    const [status, setStatus] = useState(userBook.status ? userBook.status : "");
    const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0); // Initial value
    const [currentProgress, setCurrentProgress] = useState({
        originalPage: 0,
        originalPercent: 0,
        page: 0,
        percent: 0,
    });
    const dispatch = useAppDispatch();
    useEffect(() => {
        setStatus(userBook.status ? userBook.status : "");
        setRating(userBook.rating ? userBook.rating : 0);
        if (userBook.journalEntry && userBook.journalEntry.length > 0) {
            setCurrentProgress({
                originalPage: userBook.journalEntry[0].currentPage || 0,
                originalPercent: userBook.journalEntry[0].currentPercent || 0,
                page: userBook.journalEntry[0].currentPage || 0,
                percent: userBook.journalEntry[0].currentPercent || 0,
            });
        }
    }, [userBook]);

    const onDelete = async () => {
        setIsLoading(true);
        const deletedBook = await removeUserBook(book!.id);
        if (deletedBook && deletedBook.shelves && deletedBook.shelves.length > 0) {
            deletedBook.shelves.map((item) => {
                dispatch(decrementShelfCount({ name: item.shelf.name }))
            })
        } else {
            dispatch(decrementLibraryCount({ name: "Unshelved" }))
        }
        dispatch(decrementLibraryCount({ name: "All" }))
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
                        progress={currentProgress.percent}
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
            <JouranlEntryModal
                currentProgress={currentProgress}
                setCurrentProgress={setCurrentProgress}
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                status={status!}
                setStatus={setStatus}
            />
            <Link
                className={`${details ? "mb-10" : "mb-2"}   ${isHovered || openMenu ? "block" : "hidden"} flex inset-2 items-end justify-center opacity-90 absolute`}
                href={`/book/${book?.id}`}
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
                            setOpenModal={setOpenModal}
                            setOpenAlert={setOpenAlert}
                            status={status}
                            setStatus={setStatus} book={book!}
                            setRating={setRating}
                            rating={rating}
                            shelves={shelves!}
                            // loadEntry={loadEntry}
                            showRemoveBook={showRemoveBook}
                        />
                    </div>
                </div>
            </Link>
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
