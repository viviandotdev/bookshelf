"use client";
import React, { useState } from "react";
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
} from "../graphql/graphql";
import useAddToShelfModal from "@/modules/bookshelves/hooks/use-add-to-shelf-modal";
import useUserBook from "@/stores/use-user-book";
import { useJournalEntryModal } from "@/modules/journal/hooks/use-journal-entry-modal";
import { useUpdateUserBook } from "@/hooks/user-books/mutations";
import { BookRating } from "./rating";
import { useApolloClient } from "@apollo/client";
import { update } from "ramda";
import { bookStatuses } from "@/config/books";
import { useSearchParams } from "next/navigation";
interface BookActionsProps {
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    book: Book | undefined;
    shelves: UserBookShelves[] | undefined;
    openDropdown: boolean;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    rating: number;
    status: string;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    showRemoveBook?: boolean;
}

const BookActions: React.FC<BookActionsProps> = ({
    setStatus,
    book,
    shelves,
    status,
    openDropdown,
    setOpenAlert,
    setOpenModal,
    setRating,
    rating,
    setOpenDropdown,
    showRemoveBook,
}) => {
    const jouranlEntryModal = useJournalEntryModal();
    const addToShelfModal = useAddToShelfModal();
    const client = useApolloClient();
    const updateBookId = useUserBook((state) => state.updateBookId);
    const updateStatus = useUserBook((state) => state.updateStatus);
    const setUserBook = useUserBook((state) => state.setUserBook);
    const initShelves = useUserBook((state) => state.initShelves);
    const { updateUserBook } = useUpdateUserBook();
    const onUpdate = async (status: string) => {
        const updatedBook = await updateUserBook(book!.id, { status });
        if (updatedBook) {
            setStatus(status);
        }
    };
    return (
        <>
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
                    {bookStatuses.map(item => (
                        <DropdownMenuItem
                            key={item.name}
                            className={`${status === item.name && "bg-accent text-primary"
                                }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onUpdate(item.name);
                                // Selected is not the same as the current status params

                            }}
                        >
                            <item.icon className="h-5 w-5 mr-2" />
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <div className="flex gap-2">
                            My Rating:
                            <BookRating bookId={book.id} rating={rating} setRating={setRating} />
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => {
                            // Shelves this part is part of
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

                    {showRemoveBook &&
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenAlert(true);
                            }}
                        >
                            <Icons.delete className="h-5 w-5 mr-2" />
                            Remove...
                        </DropdownMenuItem>
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default BookActions;
