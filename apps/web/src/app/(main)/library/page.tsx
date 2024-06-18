import { getCurrentUser } from '@/lib/auth';
import BookshelvesTemplate from '@/modules/bookshelves/templates';
import Sidebar from '@/modules/shelf/components/shelf-sidebar';
import { getShelves } from '@/modules/shelf/queries/getShelves';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  const { library, shelves } = await getShelves();
  return (
    <>
      <div className='flex flex-1' style={{ height: 'calc(100vh - 96px)' }}>
        <div
          className='py4 flex h-[80vh] overflow-y-auto bg-beige-50'
          style={{ height: 'calc(100vh - 96px)' }}
        >
          <Sidebar librarySelections={library} shelfSelections={shelves} />
        </div>
        <div className='flex w-3/4 flex-1 flex-col overflow-x-auto border-l border-gray-200'>
          <BookshelvesTemplate shelf={searchParams.shelf} />
        </div>
      </div>
    </>
  );
}
