"use client";
import React, { useState } from "react";
import { BookRating } from "./book-card";
import { Icons } from "./icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
    Book,
    UserBookShelves,
} from "../../graphql/graphql";
import useAddToShelfModal from "@/modules/bookshelves/hooks/use-add-to-shelf-modal";
import useUserBook from "@/stores/use-user-book";
import AlertModal from "./modals/alert-modal";
import { useJournalEntryModal } from "@/modules/journal/hooks/use-journal-entry-modal";
import { JouranlEntryModal } from "@/modules/journal/components/journal-entry-modal";
import { useRemoveUserBook, useUpdateUserBook } from "@/hooks/user-books/mutations";
import { useAppDispatch } from "@/stores";
import { decrementLibraryCount, decrementShelfCount } from "@/stores/shelf-slice";
import { BOOK_STATUSES } from "@/lib/constants";
import DynamicIcon from "./icon";
interface BookActionsProps {
    bookStatus: string | undefined;
    book: Book | undefined;
    shelves: UserBookShelves[] | undefined;
    openDropdown: boolean;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookActions: React.FC<BookActionsProps> = ({
    bookStatus,
    book,
    shelves,
    openDropdown,
    setOpenDropdown
}) => {
    const jouranlEntryModal = useJournalEntryModal();
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [rating, setRating] = useState(0); // Initial value
    const addToShelfModal = useAddToShelfModal();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(bookStatus ? bookStatus : "");
    const updateBookId = useUserBook((state) => state.updateBookId);
    const updateStatus = useUserBook((state) => state.updateStatus);
    const setUserBook = useUserBook((state) => state.setUserBook);
    const initShelves = useUserBook((state) => state.initShelves);
    const { updateUserBook } = useUpdateUserBook();
    const { removeUserBook } = useRemoveUserBook();
    const dispatch = useAppDispatch();
    const onUpdate = async (status: string) => {
        const updatedBook = await updateUserBook(book!.id, { status });
        if (updatedBook) {
            setStatus(status);
        }
    };

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
        <>
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
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                status={status!}
                setStatus={setStatus}
            />
            <DropdownMenu open={openDropdown} modal={false}>
                <DropdownMenuTrigger
                    asChild
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(!openDropdown);
                    }}
                >
                    <Icons.more className="stroke-1 fill-current stroke-primary cursor-pointer rotate-90 h-6 w-6 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    onMouseLeave={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(false);
                    }}
                    align={"start"}
                    sideOffset={8}
                    side={"top"}
                    className="w-56"
                >
                    {BOOK_STATUSES.map(item => (
                        <DropdownMenuItem
                            className={`${status === item.name && "bg-accent text-primary"
                                }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onUpdate(item.name);
                            }}
                        >
                            <DynamicIcon iconName={item.icon} />
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <BookRating rating={rating} setRating={setRating} />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            initShelves(shelves!);
                            updateBookId(book!.id);

                            addToShelfModal.onOpen();
                        }}
                    >
                        <Icons.shelf className="h-5 w-5 mr-2" />
                        Add to shelf
                    </DropdownMenuItem>
                    {status == "Currently Reading" && (
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setUserBook(book!);
                                updateStatus(status);
                                setOpenModal(true);
                                jouranlEntryModal.onOpen();
                            }}
                        >
                            <Icons.plus className="h-5 w-5 mr-2" />
                            Update Progress
                        </DropdownMenuItem>
                    )}

                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenAlert(true);
                        }}
                    >
                        <Icons.delete className="h-5 w-5 mr-2" />
                        Remove...
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default BookActions;
