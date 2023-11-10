"use client";
import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button, buttonVariants } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../../../components/icons";
import useUserBook from "@/stores/use-user-book";
import AlertModal from "../../../components/modals/alert-modal";
import useBookStatusModal from "@/modules/book/hooks/use-book-status-modal";
import { useRemoveUserBook, useUpdateUserBook } from "@/hooks/user-books/mutations";

interface BookStatusModalProps { }

export const BookStatusModal: React.FC<BookStatusModalProps> = ({ }) => {
    const statusModal = useBookStatusModal();
    const userBook = useUserBook();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const updateUserId = useUserBook((state) => state.updateUserId);
    const updateStatus = useUserBook((state) => state.updateStatus);
    const updateBookId = useUserBook((state) => state.updateBookId);
    const { updateUserBook } = useUpdateUserBook();
    const { removeUserBook } = useRemoveUserBook();
    const status = [
        "Currently Reading",
        "Want to Read",
        "Reading",
        "Read Next",
        "Did not Finish",
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
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "text-md rounded-xl"
                    )}
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
                    "text-md rounded-xl border-none"
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
