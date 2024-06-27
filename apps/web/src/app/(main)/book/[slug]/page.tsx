import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getCurrentUser } from '@/lib/auth';
import { getBookByIdentifier } from '@/modules/book/queries/getBook';
import {
  findBookByGoogleQuery,
  findBookByGoogleBookId,
  findGoogleBookByISBN,
} from '@/lib/google.api';
import { mergeBookData } from '@/lib/utils';
import { IdentifierCreateInput, Source } from '@/graphql/graphql';
import { addIdentifierToBook } from '@/modules/book/queries/addIdentifierToBook';

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser();
  const [source, sourceId] = params.slug.split('-');

  const identifier: IdentifierCreateInput = {
    source: source as Source,
    sourceId,
  };
  //   query userBook based on the id from the slug
  const myBook = await getBookByIdentifier(identifier);
  let searchedBook;
  if (source === Source.Isbn_10 || source === Source.Isbn_13) {
    searchedBook = await findGoogleBookByISBN(sourceId);
  }

  if (source == Source.Google) {
    searchedBook = await findBookByGoogleBookId(sourceId);
  }

  if (source == Source.Goodreads && myBook) {
    const query = `${myBook.title} ${myBook.authors?.join(' ')}`;
    searchedBook = await findBookByGoogleQuery(query);

    if (myBook && searchedBook) {
      const [googleSource, googleSourceId] = searchedBook.slug!.split('-');
      await addIdentifierToBook(myBook.id, {
        source: googleSource as Source,
        sourceId: googleSourceId,
      });
    }
  }

  if (myBook) {
    const book = mergeBookData(myBook, searchedBook);
    return <BookTemplate userBook={myBook.userBook} book={book} user={user} />;
  }

  return <BookTemplate book={searchedBook} user={user} />;
}
