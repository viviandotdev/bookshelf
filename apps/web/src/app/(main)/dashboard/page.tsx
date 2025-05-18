import { auth, signOut } from '@/auth';
import { Reading_Status, SortOrder } from '@/graphql/graphql';
import { getCurrentUser } from '@/lib/auth';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import HomeTemplate from '@/modules/home/templates';
import { bookCountsByUserId } from '@/modules/profile/actions/bookCountsByUserId';
import { redirect } from 'next/navigation';
import React from 'react';

interface DashboardPageProps { }

export const maxDuration = 60; // Applies to the actions

const DashboardPage: React.FC<DashboardPageProps> = async ({ }) => {
    const user = await getCurrentUser();

    const wantToRead = await getUserBooks(
        {
            status: {
                equals: Reading_Status.WantToRead,
            },
        },
        5,
        {
            dateAdded: SortOrder.Desc,
        }
    );
    const upNext = await getUserBooks({
        status: {
            equals: Reading_Status.UpNext,
        },
    });

    const bookCounts = await bookCountsByUserId(user.id);

    return (
        <main className='container z-40 mx-auto max-w-4xl flex-1  p-0 px-4 sm:px-6 lg:max-w-6xl xl:max-w-[1440px] xl:px-8'>
            <HomeTemplate
                username={user.username}
                wantToRead={wantToRead}
                upNext={upNext}
                bookCounts={bookCounts}
            />
        </main>
    );
};
export default DashboardPage;
