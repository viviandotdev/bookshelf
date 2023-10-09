import { ContentNav } from "@/components/content-nav";
import { MyBooksCard } from "@/components/my-books-card";
import { Pagination } from "@/components/pagination";
import Sidebar from "@/components/sidebar";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import fakeBookData from "@/lib/testData/fakeBookData";
import { redirect, notFound } from "next/navigation";
import React from "react";
import { myBooksConfig } from "@/config/mybooks";
import { ShelvesDocument, ShelvesQuery } from "@/graphql/graphql";
import { getApolloClient, httpLink, setAuthToken } from "@/lib/apollo";
import { NavItem } from "@/types";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronUpIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import Book from "@/components/book";
interface MyBooksPageProps {
  params: { bookId: string };
}

export default async function MyBooksPage({ params }: MyBooksPageProps) {
  const user = await getCurrentUser();

  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const booksData = fakeBookData;
  const totalPages = 10;
  const librarySelectionsCounts = myBooksConfig.librarySelections.map(
    (selection) => {
      // TODO: compute the count for each selection based on your data logic.
      let min = Math.ceil(1);
      let max = Math.floor(200);
      const count = Math.floor(Math.random() * (max - min + 1)) + min;
      return count;
    }
  );
  const { loading, data } = await client.query<ShelvesQuery>({
    query: ShelvesDocument,
  });

  if (loading) {
    // Return loading indicator while data is being fetched
    return <div>Loading...</div>;
  }

  const shelfSelections: NavItem[] =
    data?.shelves.map((shelf) => ({
      id: shelf.id,
      title: shelf.name,
      icon: "shelf", // Assuming "shelf" is the icon name for shelves
    })) || [];

  // const [currentPage, setCurrentPage] = React.useState(0);
  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <>
      <div className="flex-col justify-center">
        <div className="w-full grid grid-cols-4 gap-12">
          <Sidebar
            librarySelections={myBooksConfig.librarySelections}
            librarySelectionsCounts={librarySelectionsCounts}
            toolSelections={myBooksConfig.toolSelections}
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
                    className={cn(
                      buttonVariants({ variant: "tag", size: "xs" })
                    )}
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
              {booksData.map((book) => (
                <div>
                  <Book book={book} image={book.image} />
                </div>
              ))}
            </div>
            {/* List View */}
            {/* <div>
              {booksData.map((book) => {
                return <MyBooksCard book={book} />;
              })}
            </div> */}
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
