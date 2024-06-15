import { formatAuthors } from '@/lib/utils';
import React from 'react';
import { Book } from '@/graphql/graphql';
import { BookData } from '@/modules/bookshelves/types';

interface BookInfoProps {
  processedBook: BookData;
}

const DetailItem = ({ label, value }) => (
  <div className='flex items-end justify-start gap-4 pb-px text-base font-normal leading-snug'>
    <div className='flex w-32 items-center justify-start pr-5'>
      <div className='text-zinc-500'>{label}</div>
    </div>
    <div>{value}</div>
  </div>
);

const BookDetails = ({ book }: { book: BookData }) => (
  <section className='grid grid-cols-1 items-start justify-between gap-2 rounded-t-lg border border-b-0 border-gray-300 p-6 md:grid-cols-2'>
    <div className='flex flex-col items-start justify-start gap-2'>
      <DetailItem label='Page count:' value={book.pageCount || '-'} />
      <DetailItem label='ISBN' value={book.isbn || '-'} />
      <DetailItem label='Language:' value={book.language} />
    </div>
    <div className='flex flex-col items-start justify-start gap-2'>
      <DetailItem label='Published:' value={book.yearPublished || '-'} />
      <DetailItem label='Publisher:' value={book.publisher || '-'} />
      <DetailItem label='Author:' value={book.authors[0]} />
    </div>
  </section>
);

export default function BookInfo({ processedBook }: BookInfoProps) {
  return (
    <div className='flex flex-col gap-4'>
      <section className='flex flex-col'>
        <BookDetails book={processedBook} />
        <section className='border-t-1 items-start justify-between rounded-b-lg border border-gray-300 p-6'>
          <div className='overflow-hidden text-lg'>
            <div
              className='leading-8'
              dangerouslySetInnerHTML={{
                __html: processedBook.description!,
              }}
            ></div>
          </div>
        </section>
      </section>
    </div>
  );
}
