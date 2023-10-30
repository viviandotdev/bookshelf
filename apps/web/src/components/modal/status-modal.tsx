"use client";
import React, { ReactNode, use, useState } from "react";
import Modal from "./modal";
import useStatusModal from "@/hooks/use-status-modal";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import {
    useRemoveUserBookMutation,
    useUpdateUserBookMutation,
} from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import useUserBook from "@/hooks/use-user-book";
import AlertModal from "./alert-modal";

interface StatusModalProps { }

export const StatusModal: React.FC<StatusModalProps> = ({ }) => {
    const statusModal = useStatusModal();
    const userBook = useUserBook();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [removeUserBook] = useRemoveUserBookMutation();
    const updateUserId = useUserBook((state) => state.updateUserId);
    const updateStatus = useUserBook((state) => state.updateStatus);
    const updateBookId = useUserBook((state) => state.updateBookId);
    const [UpdateUserBook] = useUpdateUserBookMutation();
    const status = [
        "Currently Reading",
        "Want to Read",
        "Reading",
        "Read Next",
        "Did not Finish",
    ];
    const handleStatusClick = async (newStatus: string) => {
        updateStatus(newStatus);
        const { data, errors } = await UpdateUserBook({
            variables: {
                data: {
                    status: newStatus,
                },
                where: {
                    id: userBook.bookId,
                },
            },
        });
        if (data) {
            toast({
                title: `Sucessfully updated book status to ${data.updateUserBook.status}`,
            });
        } else {
            toast({
                title: "Error updating book!",
            });
        }
        statusModal.onClose();
    };

    const onDelete = async () => {
        setIsLoading(true);
        const { data, errors } = await removeUserBook({
            variables: {
                where: {
                    id: userBook.bookId,
                },
            },
        });

        if (errors) {
            toast({
                title: "Something went wrong",
                variant: "destructive",
            });
        }

        if (data) {
            updateUserId("");
            updateStatus("");
            updateBookId("");
            toast({
                title: "Sucessfylly deleted book",
            });
            setIsLoading(false);
        }
        setOpen(false);
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
                disabled={isLoading}
                isOpen={statusModal.isOpen}
                onClose={statusModal.onClose}
                title={`Choose a shelf for this book`}
                body={bodyContent}
            />
        </>
    );
};
export default StatusModal;
