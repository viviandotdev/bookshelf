"use client";

import React from "react";
import { BookCard, BookInfo, BookShelves } from "@/components/book-card";
import BookCover from "../../../components/book-cover";
import { Icons } from "../../../components/icons";
import { BookData } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../../../components/ui/button";

interface BookshelvesCardProps {
    book: BookData;
}

export const BookshelvesCard: React.FC<BookshelvesCardProps> = ({
    book,
}: BookshelvesCardProps) => {
    return (
        <BookCard
            book={book}
            content={
                <BookCard.BookContent
                    image={<BookCover src={book.image} size={"sm"} />}
                    info={<BookInfo />}
                    shelves={<BookShelves />}
                />
            }
            actions={
                <BookCard.BookActions
                    buttons={[
                        <Button
                            // onClick={(e) => {
                            //     e.stopPropagation();
                            //     console.log("currently reading clicked")
                            // }}
                            variant={"tag"}
                            size={"xs"}
                            label="Currently Reading"
                            icon={<Icons.chevronDown className="h-4 w-4" />}
                        />,
                        <div>
                            <Icons.delete className="h-4 w-4" />
                        </div>

                    ]}
                />
            }
        />
    );
};
