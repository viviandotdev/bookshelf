import { BookData } from "@/types/interfaces";
import React from "react";
import Book from "../book";

interface BookListProps {
  books?: BookData[];
  loading: boolean;
}

export const BookList: React.FC<BookListProps> = ({ books, loading }) => {
  if (loading || !books) return <div>Loading...</div>;
  return (
    <div>
      {books?.map((book, index) => (
        <div key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};
export default BookList;
