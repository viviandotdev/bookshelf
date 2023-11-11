"use client";
import React, { useEffect, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import { BookData } from "@/types/interfaces";
import { Shelf, useCreateBookMutation } from "@/graphql/graphql";
import { useSession } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import { useFirstRender } from "@/hooks/use-first-render";
import useUserBook from "@/stores/use-user-book";
import { Icons } from "../../../components/icons";
import useBookStatusModal from "@/modules/book/hooks/use-book-status-modal";
import { BookRating } from "@/components/rating";
import { initShelves } from "@/stores/shelf-slice";
import useAddToShelfModal from "@/modules/bookshelves/hooks/use-add-to-shelf-modal";
import { useAppDispatch } from "@/stores";
interface ActionItemProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void
}

function ActionItem({ icon, label, onClick }: ActionItemProps) {
    return (
        <div className="flex flex-col cursor-pointer items-center" onClick={onClick}>
            {icon}
            <button className="p-1">{label}</button>
        </div>
    );
}

function ActionGroup() {
    //   const shelfModal = useSheleveModal();
    const onShelveClick = () => {
        // shelfModal.onOpen();
    };
    return (
        <>
            <ActionItem icon={<Icons.log className="h-8 w-8 items-center" />} label="Log" />
            <ActionItem
                onClick={onShelveClick}
                icon={<Icons.library className="h-8 w-8 items-center" />}
                label="Shelve"
            />
            <ActionItem icon={<Icons.heart className="h-8 w-8 items-center" />} label="Like" />
        </>
    );
}

interface ActionsPanelProps {
    book: BookData;
    bookStatus?: string | null;
    bookRating?: number | null;
    shelves: Shelf[];
}
export default function ActionsPanel({ book, bookStatus, bookRating, shelves }: ActionsPanelProps) {
    const [rating, setRating] = useState(bookRating);
    const [status, setStatus] = useState(bookStatus);
    const { data: session } = useSession();
    const statusModal = useBookStatusModal();
    const addToShelfModal = useAddToShelfModal();
    const userBook = useUserBook();
    const updateUserId = useUserBook((state) => state.updateUserId);
    const updateStatus = useUserBook((state) => state.updateStatus);
    const updateBookId = useUserBook((state) => state.updateBookId);
    const [CreateBook] = useCreateBookMutation();
    const firstRender = useFirstRender();
    const dispatch = useAppDispatch();

    useEffect(() => {
        updateStatus(bookStatus as string);
        dispatch(initShelves(shelves));
    }, []);

    useEffect(() => {
        // Check if userBook.status is different from the current status state
        if (!firstRender && userBook.status !== status) {
            setStatus(userBook.status); // Update the status in ActionsPanel
        }
    }, [userBook.status]); // Run the effect whenever userBook.status changes

    async function createBook(book: BookData) {
        const { data, errors } = await CreateBook({
            variables: {
                data: {
                    id: book.id,
                    title: book.title,
                    pageNum: parseInt(book.pageNum),
                    author: book.author,
                    publisher: book.publisher,
                    coverImage: book.image,
                },
            },
        });
        setStatus("Want to Read");
        if (data) {
            toast({
                title: "Sucessfully saved book!",
            });
        } else {
            toast({
                title: "Error saving book!",
            });
        }
    }

    async function openUpdateStatusModal() {
        updateUserId(session?.user.id as string);
        updateBookId(book.id);
        updateStatus(status as string);
        statusModal.onOpen();
    }

    return (
        <>
            <div className="rounded-lg flex flex-col gap-1 items-center text-sm text-muted-foreground font-light">
                <div className="grid rounded-lg bg-secondary items-center grid-cols-3 w-[fill-available] p-2">
                    <ActionGroup />
                </div>

                <div className="flex flex-col justify-center bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
                    <span>Rating</span>
                    <BookRating size={"lg"} bookId={book.id} rating={rating} setRating={setRating} />
                </div>
                {status ? (
                    <button
                        onClick={() => openUpdateStatusModal()}
                        className="bg-secondary inline-flex justify-center items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
                    >
                        <Icons.edit className="mr-2 h-4 w-4 " />
                        {status}
                    </button>
                ) : (
                    <button
                        onClick={() => createBook(book)}
                        className="bg-primary text-white items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
                    >
                        Want to Read
                    </button>
                )}

                <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
                    Review
                </div>
                <div onClick={() => {
                    // Shelves this part is part of
                    updateBookId(book!.id);
                    addToShelfModal.onOpen();

                }} className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
                    Add to shelf
                </div>
            </div>
        </>
    );
}
