"use client";
import React, { useState } from "react";
import { Icons } from "./icons";
import BookCover from "./book-cover";
import BookActions from "./book-actions";
import { UserBook } from "@/src/graphql/graphql";

interface BookProps {
  details?: {
    progress: number;
    date_started: string;
  };
  userBook: UserBook;
  responsive?: boolean;
}

export const Book: React.FC<BookProps> = ({
  userBook,
  details,
  responsive,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { book, shelves, status } = userBook;
  return (
    <div
      className={`${
        responsive && "hidden md:block"
      } cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform ${
        isHovered ? "scale-95 " : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setOpenMenu(false);
        setIsHovered(false);
      }}
    >
      <div className={`flex-row cursor-pointer `}>
        <div>
          {
            <BookCover
              src={book && book.coverImage ? book.coverImage : null}
              size={"dynamic"}
            />
          }
          <div className="top-0 absolute"></div>
        </div>
        {details && (
          <BookDetails
            progress={details.progress}
            dateStarted={details.date_started}
          />
        )}
      </div>

      <div
        className={`${details ? "mb-10" : "mb-2"}   ${
          isHovered || openMenu ? "block" : "hidden"
        } flex inset-2 items-end justify-center opacity-90 absolute`}
      >
        <div className="flex-col justify-end">
          <div
            onMouseLeave={() => {
              setOpenMenu(false);
            }}
            className="flex gap-3 bg-secondary text-primary font-bold py-2 px-4 rounded mx-2"
          >
            <Icons.book className="cursor-pointer h-6 w-6 text-primary" />
            <Icons.heart className="cursor-pointer h-6 w-6 text-primary" />
            <BookActions bookStatus={status} book={book!} shelves={shelves!} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface BookDetailsProps {
  progress: number;
  dateStarted: string;
}

export const BookDetails: React.FC<BookDetailsProps> = ({
  progress,
  dateStarted,
}) => {
  return (
    <div className="pt-1.5 pb-1.5 pl-3 pr-3 bg-secondary rounded-sm text-xs text-muted-foreground">
      <div className="flex justify-between">
        <div className="flex items-center text-primary">
          <div className="align-middle">
            <Icons.pieChart className="h-3 w-3 opacity-50" />
          </div>
          <span className="ml-1.5 text-muted-foreground">{progress}%</span>
        </div>
        <div className="text-muted-foreground hidden lg:block">
          {dateStarted}
        </div>
      </div>
    </div>
  );
};

export default Book;
