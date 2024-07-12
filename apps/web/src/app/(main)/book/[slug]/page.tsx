import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getCurrentUser } from '@/lib/auth';
import {
  findBookByGoogleQuery,
  findBookByGoogleBookId,
  findGoogleBookByISBN,
} from '@/lib/google.api';
import { SOURCE } from '@prisma/client';
import { mergeBookData } from '@/lib/utils';
import { addIdentifierToBook } from '@/modules/book/queries/addIdentifierToBook';
import { Source, UserBook } from '@/graphql/graphql';
import { getBookBySlug } from '@/modules/book/queries/getBookBySlug';
import { getBookByIdentifier } from '@/modules/book/queries/getBookByIdentifier';

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser();
  //get my book
  let myBook = await getBookBySlug(params.slug); //by slug

  if (!myBook) {
    myBook = await getBookByIdentifier({
      //by google id
      source: Source.Google,
      sourceId: params.slug,
    });
  }

  //get searched book
  const isbn = myBook?.identifiers?.find(
    (id) => id.source === SOURCE.ISBN_13 || id.source === SOURCE.ISBN_10
  )?.sourceId;

  let searchedBook;
  if (isbn) {
    searchedBook = await findGoogleBookByISBN(isbn);
  }

  if (!searchedBook && myBook) {
    const query = `${myBook.title} ${myBook.authors?.join(' ')}`;
    searchedBook = await findBookByGoogleQuery(query);
  }

  // return book and searched book
  if (myBook && searchedBook) {
    const book = mergeBookData(myBook as any, searchedBook);
    await addIdentifierToBook(myBook.id, {
      source: Source.Google,
      sourceId: searchedBook.slug!,
    });
    return (
      <BookTemplate
        userBook={myBook.userBook as UserBook}
        book={book}
        user={user}
      />
    );
  }

  const googleBookId = params.slug;
  searchedBook = await findBookByGoogleBookId(googleBookId);

  if (!searchedBook) {
    return notFound();
  }

  return <>{<BookTemplate book={searchedBook} user={user} />}</>;
}
