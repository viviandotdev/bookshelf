"use client";
import { ContentNav } from "@/src/components/content-nav";
import React, { use, useEffect, useState } from "react";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/src/components/ui/button";
import { Icons } from "@/src/components/icons";
import BookViewer from "@/src/components/book-list/book-viewer";
import { Pagination } from "@/src/components/pagination";
import useShelves from "@/hooks/use-shelves";

import { UserBooksQueryVariables } from "@/graphql/graphql";
interface MyBooksPageProps {}

export default function MyBooksPage({}: MyBooksPageProps) {
  const { selected } = useShelves();
  const [queryFilter, setQueryFilter] = useState<UserBooksQueryVariables>({});
  const totalPages = 10;

  useEffect(() => {
    console.log("selected", selected);
    if (selected === "Unshelved") {
      setQueryFilter(noShelvesFilter);
    } else if (selected === "All") {
      setQueryFilter({});
    } else {
      setQueryFilter(shelfQueryFilter);
    }
  }, [selected]);

  const noShelvesFilter: UserBooksQueryVariables = {
    where: {
      shelves: {
        none: {}, // Checks if the shelves array is empty
      },
    },
  };
  const shelfQueryFilter: UserBooksQueryVariables = {
    where: {
      shelves: {
        some: {
          shelf: {
            is: {
              name: {
                equals: selected,
              },
            },
          },
        },
      },
    },
  };

  // const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <>
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
}
