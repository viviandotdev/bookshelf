import React from "react";
import Book from "../book";
import { UserBook } from "@/src/graphql/graphql";

interface BookListProps {
  books?: UserBook[];
  loading: boolean;
}

export const BookList: React.FC<BookListProps> = ({ books, loading }) => {
  if (loading || !books) return <div>Loading...</div>;
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
