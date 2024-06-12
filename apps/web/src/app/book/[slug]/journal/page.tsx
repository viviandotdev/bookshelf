import { getBook } from '@/modules/book/queries/getBook';
import JournalTemplate from '@/modules/journal/templates';
import { notFound } from 'next/navigation';
import React from 'react';

interface JournalPageProps {
    params: { bookId: string };
}

export default async function JournalPage({ params }: JournalPageProps) {
    const book = await getBook(params.bookId);
    if (!book) {
        notFound();
    }
    return (
        <main className='container z-40 mx-auto flex-1 '>
            <JournalTemplate bookId={params.bookId} title={book.title} />
        </main>
    );
}
