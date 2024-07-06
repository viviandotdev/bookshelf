import React from 'react';
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
import { notFound } from 'next/navigation';
import { BookData } from '@/modules/bookshelves/types';

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const user = await getCurrentUser();
  const [source, ...rest] = params.slug.split('-');
  const sourceId = rest.join('-');

  const identifier: IdentifierCreateInput = {
    source: source as Source,
    sourceId,
  };
  //   query userBook based on the id from the slug
  const myBook = await getBookByIdentifier(identifier);
  //get searched book from api
  let searchedBook;
  if (source === Source.Isbn_10 || source === Source.Isbn_13) {
    searchedBook = await findGoogleBookByISBN(sourceId);
  }

  if (source == Source.Google) {
    searchedBook = await findBookByGoogleBookId(sourceId);
  }
  if (!searchedBook && myBook) {
    const query = `${myBook.title} ${myBook.authors?.join(' ')}`;
    searchedBook = await findBookByGoogleQuery(query);
  }
  if (myBook) {
    let book: BookData = myBook as BookData;
    if (searchedBook) {
      book = mergeBookData(myBook, searchedBook);

      const [googleSource, ...rest] = params.slug.split('-');
      const googleSourceId = rest.join('-');
      await addIdentifierToBook(myBook.id, {
        source: googleSource as Source,
        sourceId: googleSourceId,
      });
    }

    return <BookTemplate userBook={myBook.userBook} book={book} user={user} />;
  }

  if (!searchedBook) {
    return notFound();
  }

  return <BookTemplate book={searchedBook} user={user} />;
}
