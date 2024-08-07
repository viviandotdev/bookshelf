import { signOut } from '@/auth';
import { Reading_Status, SortOrder } from '@/graphql/graphql';
import { getCurrentUser } from '@/lib/auth';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import HomeTemplate from '@/modules/home/templates';
import { bookCountsByUserId } from '@/modules/profile/actions/bookCountsByUserId';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { redirect } from 'next/navigation';
import React from 'react';

interface DashboardPageProps {}

export const maxDuration = 60; // Applies to the actions

const DashboardPage: React.FC<DashboardPageProps> = async ({}) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/');
  }

  const { shelves } = await getShelves();

  const wantToRead = await getUserBooks(
    {
      status: {
        equals: Reading_Status.WantToRead,
      },
    },
    5,
    {
      updatedAt: SortOrder.Desc,
    }
  );
  const currentlyReading = await getUserBooks({
    status: {
      equals: Reading_Status.Reading,
    },
  });
  const upNext = await getUserBooks({
    status: {
      equals: Reading_Status.UpNext,
    },
  });

  const bookCounts = await bookCountsByUserId(user.id);

  return (
    <main className='container z-40 mx-auto max-w-4xl flex-1  p-0 px-4 sm:px-6 lg:max-w-6xl xl:max-w-[1440px] xl:px-8'>
      <HomeTemplate
        shelves={shelves}
        username={user.username}
        wantToRead={wantToRead}
        currentlyReading={currentlyReading}
        upNext={upNext}
        bookCounts={bookCounts}
      />
    </main>
  );
};
export default DashboardPage;
