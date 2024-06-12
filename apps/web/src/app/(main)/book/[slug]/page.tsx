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
import { mergeBookData } from '@/lib/utils';

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser();
  const myBook = await getBook(params.slug);
  const isbn = myBook?.identifiers?.find(
    (id) => id.source === SOURCE.ISBN_13 || id.source === SOURCE.ISBN_10
  )?.sourceId;

  if (myBook) {
    let googleBook = isbn ? await findGoogleBookByISBN(isbn) : null;

    if (!googleBook) {
      const query = `${myBook.title} ${myBook.authors?.join(' ')}`;
      googleBook = await findBookByGoogleQuery(query);
    }

    const book = mergeBookData(myBook, googleBook);


    return <BookTemplate book={book} user={user} />;
  }
  //basically google book api wrapper
  const googleBookId = params.slug.split('-')[-1];
  let googleBook = await findBookByGoogleBookId(googleBookId);

  if (!googleBook) {
    return notFound();
  }

  return <>{/* <BookTemplate book={book} user={user} /> */}</>;
}
