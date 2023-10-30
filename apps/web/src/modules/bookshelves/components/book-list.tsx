"use client";
import React, { useEffect } from "react";
import {
    UserBooksQueryVariables,
    useUserBooksLazyQuery,
} from "@/graphql/graphql";
import { NetworkStatus } from "@apollo/client";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import * as R from "ramda";
import Book from "../../../components/book";
interface BookListProps {
    queryFilter: UserBooksQueryVariables;
}

const BookList: React.FC<BookListProps> = ({ queryFilter }) => {
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
                console.log("data", data.userBooks);
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
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {books &&
                books?.map((book) => (
                    <div key={book.id}>
                        <Book userBook={book} />
                    </div>
                ))}
        </>
    );
};
export default BookList;
