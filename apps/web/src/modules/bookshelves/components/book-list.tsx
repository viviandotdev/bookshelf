"use client";
import React, { useEffect } from "react";
import {
    UserBook,
    UserBooksQueryVariables,
    useUserBooksLazyQuery,
} from "../../../../graphql/graphql";
import { NetworkStatus } from "@apollo/client";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import * as R from "ramda";
import Book from "../../../components/book";
interface BookListProps {
    books: UserBook[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {


    return (
        <>
            {books &&
                books?.map((book, idx) => (
                    <div key={idx}>
                        <Book userBook={book} />
                    </div>
                ))}
        </>
    );
};
export default BookList;
