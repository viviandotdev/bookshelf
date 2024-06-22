import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getCurrentUser } from '@/lib/auth';
import { getBook } from '@/modules/book/queries/getBook';
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
    return <BookTemplate userBook={myBook.userBook} book={book} user={user} />;
  }
  //basically google book api wrapper
  const googleBookId = params.slug;
  let googleBook = await findBookByGoogleBookId(googleBookId);
  console.log(googleBookId);
  if (!googleBook) {
    return notFound();
  }

  return <>{<BookTemplate book={googleBook} user={user} />}</>;
}
