"use client";
import React, { useEffect } from "react";
import BookList from "./book-list";
import {
  UserBooksQueryVariables,
  useUserBooksLazyQuery,
} from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import * as R from "ramda";
import useSidebar from "@/hooks/use-shelf-store";
interface BookViewerProps {}

const isStatus = (status: string) => {
  return ["Read", "Currently Reading", "Want to Read"].includes(status);
};

export const BookViewer: React.FC<BookViewerProps> = ({}) => {
  const sidebar = useSidebar();

  const queryFilter: UserBooksQueryVariables = {
    where: {
      status: {
        equals: isStatus(sidebar.selected) ? sidebar.selected : undefined,
      },
      shelves: {
        some: {
          shelfId: {
            equals: "YOUR_SHELF_ID_HERE", // Replace with the specific Shelf ID you want to filter by
          },
        },
      },
    },
  };

  const [loadBooks, { data: booksData, fetchMore, networkStatus }] =
    useUserBooksLazyQuery({
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      notifyOnNetworkStatusChange: true,
      onError: (error) => {
        toast({
          title: error.message,
          variant: "destructive",
        });
      },
      onCompleted: (data) => {
        if (data && data.userBooks && data.userBooks.length === 0)
          toast({
            title: "No books are here... yet",
            variant: "destructive",
          });
      },
      errorPolicy: "all",
    });

  useEffect(() => {
    const loadData = async () => {
      const pagedQueryFilter = R.mergeRight(queryFilter, {
        offset: 0,
        limit: BOOKS_PAGE_SIZE,
      });
      console.log("pagedQueryFilter", pagedQueryFilter);
      await loadBooks({ variables: { ...pagedQueryFilter } });
    };

    loadData();
  }, [loadBooks]);
  return (
    <div>
      <BookList loading={false} />
    </div>
  );
};
export default BookViewer;
