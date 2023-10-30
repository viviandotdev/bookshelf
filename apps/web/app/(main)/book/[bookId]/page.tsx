import React from "react";
import { getBook } from "@/modules/book/api/getBook";
import { getUserBook } from "@/modules/book/api/getUserBook";
import { redirect, notFound } from "next/navigation";
import BookTemplate from "@/modules/book/templates/BookTemplate";

interface BookPageProps {
  params: { bookId: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBook(params.bookId);
  if (!book) {
    notFound();
  }
  const userBook = await getUserBook(params.bookId);
  return (
    <>
      <BookTemplate book={book} userBook={userBook} />
    </>
  );
}
