"use client";
import React, { useEffect } from "react";
import BookList from "./book-list";
import {
  UserBooksQueryVariables,
  useUserBooksLazyQuery,
} from "@/src/graphql/graphql";
import { NetworkStatus } from "@apollo/client";
import { toast } from "@/src/hooks/use-toast";
import { BOOKS_PAGE_SIZE } from "@/src/lib/constants";
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
        if (data && data.userBooks && data.userBooks.length === 0) {
          toast({
            title: "No books are here... yet",
            variant: "destructive",
          });
        }
      },
      errorPolicy: "all",
    });

  const books = booksData && booksData?.userBooks;
  const loading = networkStatus === NetworkStatus.loading;
  const first = books && books.length && books[0].id;
  const last = books && books.length && books[books.length - 1].id;
  const loadMoreLoading = networkStatus === NetworkStatus.fetchMore;
  useEffect(() => {
    const loadData = async () => {
      const pagedQueryFilter = R.mergeRight(queryFilter, {
        offset: 0,
        limit: BOOKS_PAGE_SIZE,
      });
      await loadBooks({ variables: { ...pagedQueryFilter } });
    };

    loadData();
  }, [queryFilter, loadBooks]);

  return (
    <>
      <BookList {...{ books, loading }} />
    </>
  );
};
export default BookViewer;
