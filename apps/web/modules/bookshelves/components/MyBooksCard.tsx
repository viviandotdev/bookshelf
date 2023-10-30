"use client";

import React from "react";
import { BookCard, BookInfo, BookShelves } from "@/components/BookCard";
import BookCover from "../../../components/BookCover";
import { Icons } from "../../../components/Icons";
import { BookData } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../../../components/ui/button";

interface MyBooksCardProps {
  book: BookData;
}

export const MyBooksCard: React.FC<MyBooksCardProps> = ({
  book,
}: MyBooksCardProps) => {
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
              className={cn(buttonVariants({ variant: "action", size: "xs" }))}
              label="Currently Reading"
              icon={<Icons.chevronDown className="h-4 w-4" />}
            />,
            <Button
              className={cn(buttonVariants({ variant: "action", size: "xs" }))}
              icon={<Icons.delete className="h-4 w-4" />}
            />,
          ]}
        />
      }
    />
  );
};
