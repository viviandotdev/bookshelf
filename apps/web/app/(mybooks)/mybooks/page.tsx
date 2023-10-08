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
        <div className="w-full grid grid-cols-4 gap-4">
          <Sidebar
            librarySelections={myBooksConfig.librarySelections}
            librarySelectionsCounts={librarySelectionsCounts}
            toolSelections={myBooksConfig.toolSelections}
            shelfSelections={shelfSelections}
          />
          <div className="col-span-4 xl:col-span-3 pt-1.5">
            <ContentNav resultText="23 Books" showSearch showSort />
            {/* <hr className="mt-1.5 border-t-1 border-primary" /> */}
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
