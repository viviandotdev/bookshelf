import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getCurrentUser } from '@/lib/auth';
import { getReviews } from '@/modules/book/queries/getReviews';
import { getBook } from '@/modules/book/queries/getBook';
import { getGoogleBook } from '@/modules/book/queries/getGoogleBook';
import axios from 'axios';
import {
  findBookByGoogleQuery,
  findBookByGoogleBookId,
  findGoogleBookByISBN,
} from '@/lib/google.api';
import { SOURCE } from '@prisma/client';
import { getCovers, getGoodreadsCover } from '@/lib/cover.api';

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const myBook = await getBook(params.slug);
  const isbn13 = myBook?.identifiers?.find(
    (id) => id.source === SOURCE.ISBN_13
  )?.sourceId;
  const isbn10 = myBook?.identifiers?.find(
    (id) => id.source === SOURCE.ISBN_10
  )?.sourceId;

  let book;
  let covers;

  if (myBook) {
    const isbn = isbn13 || isbn10;
    let bookPromise = isbn ? await findGoogleBookByISBN(isbn) : null;

    if (!isbn) {
      const query = `${myBook.title} ${myBook.authors?.join(' ')}`;
      bookPromise = await findBookByGoogleQuery(query);
    }

    const goodreadsId = myBook.identifiers?.find(
      (id) => id.source === SOURCE.GOODREADS
    )?.sourceId;
    const coversPromise = await getGoodreadsCover(goodreadsId!);
    [book, covers] = await Promise.all([bookPromise, coversPromise]);
  } else {
    const googleBookId = params.slug.split('-')[-1];
    const bookPromise = await findBookByGoogleBookId(googleBookId);
    const coversPromise = await getCovers({
      isbn: isbn13 || isbn10 || '',
      title: (myBook && myBook.title) || '',
      authors: (myBook && myBook.authors) || [],
    });

    [book, covers] = await Promise.all([bookPromise, coversPromise]);
  }


  if (!book) {
    return notFound();
  }

  console.log(book);
  console.log(covers);

  const user = await getCurrentUser();
  return (
    <>
      <BookTemplate book={book} user={user} cover={covers?.large} />
    </>
  );
}
