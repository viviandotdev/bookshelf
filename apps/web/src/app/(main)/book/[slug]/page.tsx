import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getCurrentUser } from '@/lib/auth';
import {
    findBookByGoogleQuery,
    findGoogleBookByISBN,
} from '@/lib/google.api';
import { mergeBookData } from '@/lib/utils';
import { Source, UserBook } from '@/graphql/graphql';
import { getBookBySlug } from '@/modules/book/queries/getBookBySlug';

export const maxDuration = 60; // Applies to the actions
interface BookPageProps {
    params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
    const user = await getCurrentUser();
    //get target book from user libaray
    const { slug } = await params
    let targetBook = await getBookBySlug(slug);

    if (!targetBook) {
        return notFound();
    }

    //get searched book from google api
    let searchedBook;
    const isbn = targetBook?.identifiers?.find(
        (id) => id.source === Source.Isbn_13 || id.source === Source.Isbn_10
    )?.sourceId;


    if (isbn) {
        searchedBook = await findGoogleBookByISBN(isbn);
    } else {
        const query = `${targetBook.title} ${targetBook.authors?.join(' ')}`;
        searchedBook = await findBookByGoogleQuery(query);
    }

    const book = mergeBookData(targetBook as any, searchedBook as any);

    return (
        <BookTemplate
            userBook={targetBook.userBook as UserBook}
            book={book}
            user={user}
        />
    );


}
