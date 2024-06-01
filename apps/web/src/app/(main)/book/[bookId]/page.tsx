import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getCurrentUser } from '@/lib/auth';
import { getReviews } from '@/modules/book/queries/getReviews';
import { getBook } from '@/modules/book/queries/getBook';
import { getGoogleBook } from '@/modules/book/queries/getGoogleBook';

interface BookPageProps {
  params: { bookId: string };
}

function containsNonNumeric(str: string) {
  return /\D/.test(str);
}

export default async function BookPage({ params }: BookPageProps) {
  let book;
  if (containsNonNumeric(params.bookId)) {
    // handle this if logic in the backend? oonly return book once NOW
    console.log("make api call")
    book = await getGoogleBook(params.bookId);
  } else {
    book = await getBook(params.bookId);
  }

  if (!book) {
    notFound();
  }

  const shelvesData = getShelves();
  const reviewsData  = getReviews(book.id);

  const [{shelves}, {reviews}] = await Promise.all([shelvesData, reviewsData])



  const user = await getCurrentUser();
  return (
    <>
      <BookTemplate
        book={book}
        shelves={shelves}
        reviews={reviews}
        user={user}
      />
    </>
  );
}
