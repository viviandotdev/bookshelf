"use client";
import React from "react";
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
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
                {books &&
                    books?.map((book, idx) => (
                        <div key={idx}>
                            <Book userBook={book} showRemoveBook={true} />
                        </div>
                    ))}
            </div>
        </>
    );
};
export default BookList;
