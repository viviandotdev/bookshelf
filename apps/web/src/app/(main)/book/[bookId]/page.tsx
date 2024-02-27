import React from 'react';
import { notFound } from 'next/navigation';
import BookTemplate from '@/modules/book/templates';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { getCurrentUser } from '@/lib/auth';
import { getReviews } from '@/modules/book/queries/getReviews';
import { getBook } from '@/modules/book/queries/getBook';

interface BookPageProps {
    params: { bookId: string };
}

export default async function BookPage({ params }: BookPageProps) {
    const book = await getBook(params.bookId);
    if (!book) {
        notFound();
    }
    const { shelves } = await getShelves();
    const { reviews } = await getReviews(params.bookId);
    // console.log(reviews)
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
