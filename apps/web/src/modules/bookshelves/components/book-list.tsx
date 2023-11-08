"use client";
import React, { useEffect } from "react";
import {
    UserBook,

} from "../../../../graphql/graphql";

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
                        <Book userBook={book} showRemoveBook={true} />
                    </div>
                ))}
        </>
    );
};
export default BookList;
