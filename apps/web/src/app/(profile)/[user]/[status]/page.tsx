import { Book, Reading_Status } from '@/graphql/graphql';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import { BookData } from '@/modules/bookshelves/types';
import Hit from '@/modules/search/components/search-hit';
import React from 'react';

interface StatusPageProps {
    params: Promise<{ status: Reading_Status; user: string }>;
}

const StatusPage: React.FC<StatusPageProps> = async ({ params }) => {
    const { status, user } = await params;
    const books = await getUserBooks({
        status: {
            equals: status,
        },
    });
    return (
        <div className='flex justify-center'>
            <section className='w-[1220px]'>
                <main className='mt-8 flex min-h-screen flex-col items-center'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold'>{status}</h1>
                    </div>
                    <ul className='mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                        {books.slice(0, 6).map((hit, index) => (
                            <Hit key={index} hit={hit.book as Book} />
                        ))}
                    </ul>
                </main>
            </section>
        </div>
    );
};
export default StatusPage;
