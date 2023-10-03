import { ContentNav } from "@/components/content-nav";
import { MyBooksCard } from "@/components/my-books-card";
import { Pagination } from "@/components/pagination";
import Sidebar from "@/components/sidebar";
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
  const shelfSelections = ["All", "Read", "Want to Read", "Currently Reading"];
  const toolSelections = ["Export Books", "Import Books"];
  // const [currentPage, setCurrentPage] = React.useState(0);
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <>
      <div className="flex-col justify-center">
        <div className="w-full grid grid-cols-4 gap-4">
          <Sidebar
            shelfSelections={shelfSelections}
            toolSelections={toolSelections}
          />
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
