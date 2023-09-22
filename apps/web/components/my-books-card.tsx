"use client";

import React from "react";
import { BookCard, BookInfo, BookShelves } from "@/components/book-card";
import BookCover from "./book-cover";
import { Icons } from "./icons";
import SecondaryButton from "./secondary-button";
import { BookData } from "@/types/interfaces";

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
            <SecondaryButton
              label="Currently Reading"
              icon={<Icons.chevronDown className="h-4 w-4" />}
            />,
            <SecondaryButton label="Edit" />,

            <SecondaryButton icon={<Icons.delete className="h-4 w-4" />} />,
          ]}
        />
      }
    />
  );
};
