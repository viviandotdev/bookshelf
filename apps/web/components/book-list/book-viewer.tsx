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
interface BookViewerProps {
  queryFilter: UserBooksQueryVariables;
}

export const BookViewer: React.FC<BookViewerProps> = ({ queryFilter }) => {
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
