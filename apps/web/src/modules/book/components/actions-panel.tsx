"use client";
import React, { useEffect, useState } from "react";
import { BookData } from "@/types/interfaces";
import { Shelf, useUserBookLazyQuery } from "@/graphql/graphql";
import { useSession } from "next-auth/react";
import { useFirstRender } from "@/hooks/use-first-render";
import useUserBook from "@/stores/use-user-book";
import { Icons } from "../../../components/icons";
import useBookStatusModal from "@/modules/book/hooks/use-book-status-modal";
import { BookRating } from "@/components/rating";
import { initShelves } from "@/stores/shelf-slice";
import useAddToShelfModal from "@/modules/bookshelves/hooks/use-add-to-shelf-modal";
import { useAppDispatch } from "@/stores";
import { Button } from "@/components/ui/button";
import useCreateUserBook from "../hooks/use-create-user-book";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
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
    shelves: Shelf[];
}
export default function ActionsPanel({ book, shelves }: ActionsPanelProps) {
    const [rating, setRating] = useState(0); // Initial value
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession();
    const statusModal = useBookStatusModal();
    const addToShelfModal = useAddToShelfModal();
    const { updateBookId, updateStatus, updateUserId, status: userBookStatus } = useUserBook();
    const { createUserBook } = useCreateUserBook();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [loadBook] =
        useUserBookLazyQuery({
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-first",
            notifyOnNetworkStatusChange: true,
            onError: (error) => {
                toast({
                    title: error.message,
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                setStatus(data.userBook?.status as string);
                setRating(data.userBook?.rating as number);
            },
            errorPolicy: "all",
        })

    useEffect(() => {
        dispatch(initShelves(shelves));
    }, []);


    useEffect(() => {
        const loadData = async () => {
            await loadBook({ variables: { where: { id: book.id } } });
        };
        loadData();
    }, [loadBook, router]);

    async function createBook(book: BookData) {
        setLoading(true)
        await createUserBook(book);
        setLoading(false)
        setStatus("Want to Read")
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
                    <Button
                        onClick={() => openUpdateStatusModal()}
                        disabled={loading}
                        className="hover:bg-secondary text-sm text-muted-foreground font-light bg-secondary inline-flex justify-center items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer"
                    >
                        <Icons.edit className="mr-2 h-4 w-4 " />
                        {status}
                    </Button>
                ) : (
                    <Button
                        disabled={loading}
                        onClick={() => createBook(book)}
                        className="bg-primary text-white items-center text-center font-light w-[fill-available] rounded-lg p-2 cursor-pointer"
                    >
                        Want to Read
                    </Button>
                )}

                <div className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
                    Review
                </div>
                <div onClick={() => {
                    // userbook selected shelves vs the shelves that is being created are different
                    updateBookId(book!.id);
                    addToShelfModal.onOpen();

                }} className="bg-secondary items-center text-center w-[fill-available] rounded-lg p-2 cursor-pointer">
                    Add to shelf
                </div>
            </div>
        </>
    );
}
