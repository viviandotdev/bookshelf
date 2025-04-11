import { getCurrentUser } from '@/lib/auth';
import BookshelvesTemplate from '@/modules/bookshelves/templates';
import Sidebar from '@/modules/shelf/components/shelf-sidebar';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function LibraryPage({ }: {}) {
    const user = await getCurrentUser();
    if (!user) {
        notFound();
    }
    return (
        <>
            <div className='flex'>
                <div
                    className='flex h-[80vh] overflow-y-auto'
                    style={{ height: 'calc(100vh - 64px)' }}
                >
                    <Sidebar />
                </div>
                <div className='flex w-3/4 flex-1 flex-col overflow-x-auto border-l border-gray-200'>
                    <BookshelvesTemplate />
                </div>
            </div>
        </>
    );
}
