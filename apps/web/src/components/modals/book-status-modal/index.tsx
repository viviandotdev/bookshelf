"use client";
import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button, buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import useUserBookStore from "@/stores/use-user-book-store";
import AlertModal from "../alert-modal";
import { useRemoveUserBook } from "@/modules/bookshelves/mutations/use-remove-user-book";
import { useUpdateUserBook } from "@/modules/bookshelves/mutations/use-update-user-book";
import useBookStatusModal from "@/components/modals/book-status-modal/use-book-status-modal";

interface BookStatusModalProps { }

const BookStatusModal: React.FC<BookStatusModalProps> = ({ }) => {
    const statusModal = useBookStatusModal();
    const userBook = useUserBookStore();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const updateUserId = useUserBookStore((state) => state.updateUserId);
    const updateStatus = useUserBookStore((state) => state.updateStatus);
    const updateBookId = useUserBookStore((state) => state.updateBookId);
    const { updateUserBook } = useUpdateUserBook();
    const { removeUserBook } = useRemoveUserBook();
    const status = [
        "Currently Reading",
        "Want to Read",
        "Read",
        "Abandoned",
    ];
    const handleStatusClick = async (newStatus: string) => {

        const updatedBook = await updateUserBook(userBook.bookId, { status: newStatus });
        if (updatedBook) {
            updateStatus(newStatus);
        }
        statusModal.onClose();
    };

    const onDelete = async () => {
        setIsLoading(true);
        const isRemoved = await removeUserBook(userBook.bookId);
        if (isRemoved) {
            updateUserId("");
            updateStatus("");
            updateBookId("");
            setIsLoading(false);
            setOpen(false);
        }
    };

    const bodyContent = (
        <div className="flex flex-col gap-2">
            {status.map((s: string, index: number) => (
                <Button
                    key={index}
                    variant={"outline"}
                    size={"lg"}
                    className="text-md rounded-xl hover:text-white hover:bg-primary"
                    label={s}
                    onClick={() => handleStatusClick(s)}
                    icon={
                        userBook.status == s && (
                            <Icons.check className="h-4 w-4 m-2 stroke-[4px]" />
                        )
                    }
                />
            ))}
            <Button
                className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "text-md rounded-xl border-none hover:bg-white"
                )}
                onClick={() => {
                    statusModal.onClose();
                    setOpen(true);
                }}
                label={"Remove from my shelf"}
                icon={<Icons.delete className="h-4 w-4 m-2 stroke-[4px]" />}
            />
        </div>
    );

    return (
        <>
            <AlertModal
                title={"Are you sure you want to remove this book from your shelf?"}
                description={
                    "Removing this book will clear associated ratings, reviews and reading activity"
                }
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={isLoading}
            />
            <Modal
                isOpen={statusModal.isOpen}
                onClose={statusModal.onClose}
                title={`Choose a shelf for this book`}
            >
                {bodyContent}
            </Modal>
        </>
    );
};

export default BookStatusModal
