"use client";
import React, { useRef } from "react";
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
import useAddToShelfModal from "@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal";
import useUserBookStore from "@/stores/use-user-book-store";
import { BookRating } from "./book-rating";
import { bookStatuses } from "@/config/books";
import { Button } from "./ui/button";
import { useJournalEntryModal } from "@/components/modals/journal-entry-modal/use-journal-entry-modal";
import { useUpdateUserBook } from "@/modules/bookshelves/mutations/use-update-user-book";
import Link from "next/link";
interface BookActionsProps {
    book: Book | undefined;
    shelves: UserBookShelves[] | undefined;
    openDropdown: boolean;
    rating: number;
    status: string;
    showRemoveBook?: boolean;
    type: "button" | "icon";
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookActions: React.FC<BookActionsProps> = ({
    book,
    rating,
    status,
    shelves,
    openDropdown,
    showRemoveBook,
    type = "icon",
    setStatus,
    setOpenAlert,
    setRating,
    setOpenDropdown,
}) => {
    const addToShelfModal = useAddToShelfModal();
    const { updateBookId, updateStatus, setBook, initShelves } = useUserBookStore();
    const setShelves = useAddToShelfModal((state) => state.setShelves);
    const { updateUserBook } = useUpdateUserBook();
    const journalEntryModal = useJournalEntryModal()
    const onUpdate = async (status: string) => {
        // optimistic update
        setStatus(status);
        await updateUserBook(book!.id, { status });
    };
    const linkRef = useRef<HTMLAnchorElement>(null);
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
                    {type === "button" ? ( // Check the type prop to render the trigger as button or icon
                        <Button
                            className="gap-2"
                            variant={"tag"}
                            size={"xs"}
                        >
                            {status}
                            <Icons.chevronDown className="h-4 w-4" />
                        </Button>
                    ) : (
                        <Icons.more className="stroke-1 fill-current stroke-beige cursor-pointer rotate-90 h-6 w-6 text-beige" />
                    )}
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
                            className={`${status === item.name && "bg-beige-400 text-beige"
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
                            setShelves(shelves!)
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
                                setBook(book!);
                                updateStatus(status);
                                updateBookId(book!.id);
                                journalEntryModal.onOpen();
                            }}
                        >
                            <Icons.plus className="h-5 w-5 mr-2" />
                            Log reading
                        </DropdownMenuItem>
                    )}

                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            if (linkRef.current) {
                                linkRef.current.click();
                            }
                        }}
                    >
                        <Icons.view className="h-5 w-5 mr-2" />
                        Show your activity
                        <Link ref={linkRef} href={`/test1/book/${book?.id}/activity`} className="hidden"></Link>
                    </DropdownMenuItem>

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
