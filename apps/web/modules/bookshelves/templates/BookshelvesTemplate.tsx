"use client";
import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { ContentNav } from "../components/ContentNav";
import useBookFilters from "../hooks/useBookFilters";
import BookViewer from "../components/BookList";
import { Pagination } from "../components/Pagination";
import { Shelf } from "@/graphql/graphql";
import Shelves from "../components/Shelves";
interface BookshelvesTemplateProps {
  librarySelections: Shelf[];
  shelfSelections: Shelf[];
}

export const BookshelvesTemplate: React.FC<BookshelvesTemplateProps> = ({
  librarySelections,
  shelfSelections,
}) => {
  const totalPages = 10;
  const queryFilter = useBookFilters();

  return (
    <>
      <Shelves
        librarySelections={librarySelections}
        shelfSelections={shelfSelections}
      />
      <div className="col-span-4 xl:col-span-3 pt-1.5">
        <nav className="flex flex-col w-full rounded-lg  justify-between mt-8 pb-2">
          <h1
            className={cn(
              dm_sefif_display.className,
              "text-primary text-4xl mb-8"
            )}
          >
            Bookshelves
          </h1>
          <ContentNav resultText="23 Books" showSearch showSort />

          <hr className="my-2 border-t-1 border-primary" />
          <div className="flex gap-2 text-sm items-center justify-between relative w-full">
            <div className="flex text-sm items-start relative">
              <button
                className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
              >
                Read
                <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
              </button>
              <div className="block h-full bg-slate-300 w-0.5 absolute left-16"></div>
            </div>
            <div className="flex text-sm gap-2 items-center"></div>
          </div>
        </nav>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
          <BookViewer {...{ queryFilter }} />
        </div>
        <Pagination
          totalPages={totalPages}
          // currentPage={currentPage}
          // setCurrentPage={setCurrentPage}
        />
        {/* List View */}
        {/* <div>
              {booksData.map((book) => {
                return <MyBooksCard book={book} />;
              })}
            </div> */}
      </div>
    </>
  );
};
export default BookshelvesTemplate;
