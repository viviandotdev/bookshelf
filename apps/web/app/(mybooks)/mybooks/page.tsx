import { ContentNav } from "@/components/content-nav";
import { MyBooksCard } from "@/components/my-books-card";
import { Pagination } from "@/components/pagination";
import { Button, buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import fakeBookData from "@/lib/testData/fakeBookData";
import { redirect, notFound } from "next/navigation";
import React from "react";

interface MyBooksPageProps {
  params: { bookId: string };
}

export default async function MyBooksPage({ params }: MyBooksPageProps) {
  const user = await getCurrentUser();
  const booksData = fakeBookData;
  const totalPages = 10;
  // const [currentPage, setCurrentPage] = React.useState(0);
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const shelfSelections = ["All", "Read", "Want to Read", "Currently Reading"];
  const toolSelections = ["Export Books", "Import Books"];
  function selection(title: string) {
    return (
      <div className="text-xs bg-secondary w-[fill-available] rounded-lg p-2 cursor-pointer">
        {title}
      </div>
    );
  }

  return (
    <>
      <div className="flex-col justify-center">
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="hidden xl:block">
            <div className="w-full justify-between mt-8 rounded-lg flex flex-col text-sm gap-1 text-muted-foreground font-light">
              <div className="leading-7 items-start text-primary font-semibold ">
                Bookshelves
              </div>
              <hr className="mt-1 border-t-1 border-primary" />
              {shelfSelections.map((heading) => {
                return selection(heading);
              })}
              <Button className="mt-2" size={"sm"}>
                Add Shelf
              </Button>
            </div>
            <div className="w-full justify-between mt-8 rounded-lg flex flex-col gap-1 text-sm text-muted-foreground font-light">
              <div className="items-start text-primary font-semibold">
                Tools
              </div>
              <hr className="mt-1 border-t-1 border-primary" />
              {toolSelections.map((heading) => {
                return selection(heading);
              })}
            </div>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <ContentNav resultText="23 Books" showSearch showSort />
            <hr className="mt-1 border-t-1 border-primary" />
            <div>
              {booksData.map((book) => {
                return <MyBooksCard book={book} />;
              })}
            </div>
          </div>
        </div>
        <Pagination
          totalPages={totalPages}
          // currentPage={currentPage}
          // setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
