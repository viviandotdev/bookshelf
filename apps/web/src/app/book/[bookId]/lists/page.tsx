import { getBook } from '@/modules/book/queries/getGoogleBook';
import ShelvesTemplate from '@/modules/shelves/templates';
import { notFound } from 'next/navigation';
import React from 'react'

interface ListsPageProps {
    params: { bookId: string };
}

export default async function ListsPage({ params }: ListsPageProps) {
    const book = await getBook(params.bookId);
    if (!book) {
        notFound();
    }
    return (
        <div>
            <ShelvesTemplate title={book.title} bookId={book.id} />
        </div>
    );
}


// making good progress on the patent details page and i think can get out an MR for that by the end of the this week
