import { auth, signOut } from '@/auth';
import { getCurrentUser } from '@/lib/auth';
import BookshelvesTemplate from '@/modules/bookshelves/templates';
import Sidebar from '@/modules/shelf/components/shelf-sidebar';
import React from 'react';
import NotLoggedIn from '@/components/not-logged-in';

export default async function LibraryPage({ }: {}) {
    const user = await getCurrentUser();
    if (!user) {
        return <NotLoggedIn />;
    }
    return (
        <>

            <main className='container z-40 mx-auto max-w-4xl flex-1  p-0 px-4 sm:px-6 lg:max-w-6xl xl:max-w-[1440px] xl:px-8'>
                <div className='flex'>
                    <div
                        className='flex h-[80vh] overflow-y-auto'
                        style={{ height: 'calc(100vh - 64px)' }}
                    >
                        <Sidebar />
                    </div>
                    <div className='flex w-3/4 flex-1 flex-col overflow-x-auto'>
                        <BookshelvesTemplate />
                    </div>
                </div>
            </main>

        </>
    );
}
