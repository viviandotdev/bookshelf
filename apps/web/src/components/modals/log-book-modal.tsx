"use client";
import React from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "../ui/button";
import useLogBookModal from "@/hooks/use-log-book-modal";
import { useUserBooksQuery } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import BookCover from "../book-cover";
import { CardDescription, CardTitle } from "../ui/card";
import LogBookCard from "./log-book-card";
interface LogBookModalProps {
}

export const LogBookModal: React.FC<LogBookModalProps> = ({
}) => {
    const logBookModal = useLogBookModal();

    const { data } =
        useUserBooksQuery({
            variables: {
                offset: 0,
                limit: BOOKS_PAGE_SIZE,
                where: {
                    status: {
                        equals: "Currently Reading"
                    }
                }

            },
            onError: (error) => {
                toast({
                    title: error.message,
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                console.log("data", data.userBooks);
                if (data && data.userBooks && data.userBooks.length === 0) {
                    toast({
                        title: "No books are here... yet",
                        variant: "destructive",
                    });
                }
            },
            errorPolicy: "all",
        });
    const userBooks = data && data.userBooks
    // fetch currently reading books

    return (
        <Modal
            isOpen={logBookModal.isOpen}
            onClose={logBookModal.onClose}
            title={"Log a Book"}
            description={"Currently Reading Books"}
        >
            {/* Display books in a list */}
            <div className="mt-2">
                {userBooks && userBooks.length > 0 ? (
                    userBooks.map((userBook, i) => (
                        <div
                            key={i}
                            className={`py-2 flex gap-2 cursor-pointer ${i !== userBooks.length - 1 ? "border-b" : ""
                                }`}
                        >
                            {/* Display book details */}
                            <LogBookCard userBook={userBook} />
                        </div>
                    ))
                ) : (
                    <p>No books are currently being read.</p>
                )}
            </div>
        </Modal >
    );
};
export default LogBookModal;
