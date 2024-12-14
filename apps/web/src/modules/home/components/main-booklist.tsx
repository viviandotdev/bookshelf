'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import Link from 'next/link';
import NoResults from '@/components/no-results';
import DashboardHeader from './dashboard-header';
import { Book as BookType, Reading_Status } from '@/graphql/graphql';
import Image from 'next/image';
export const MainBookList = ({
  books,
  count,
}: {
  books: any;
  count: number;
}) => {
  console.log(books);
  // fiction, nonfiction, want-to-read
  return (
    <div className='border border-gray-200 bg-white p-6'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          title={'Want to Read'}
          count={count}
          href={`/library?status=${Reading_Status.WantToRead}`}
        />

        {/* <CustomizeDropdown currentView={view} setView={setView} /> */}
      </div>
      <div className={'grid grid-cols-5 gap-4'}>
        {books.length > 0 &&
          books.map((book: any) => (
            <>
              <BookItem key={book.id} book={book} />
              <MyBook key={book.id} book={book} />
            </>
          ))}
      </div>
      {/* <ContentMessage isPending={isPending} view={view} content={content} /> */}
    </div>
  );
};

const MyBook = ({ book }: { book: any }) => {
  const currBook = { book };
  console.log(currBook.book);
  const width = 144;
  <div className={`relative rounded-3xl bg-white p-6 text-gray-700`}>
    <div className=''>
      <div className='mb-4 text-center'>
        <p className='text-lg font-semibold'>{currBook.book.title}</p>
        <p className='text-[#878787]'>{currBook.book.author}</p>
      </div>
      <div className='mx-auto flex min-h-[223px] flex-col items-center justify-center rounded-md'>
        {currBook.book.covers && (
          <Image
            alt={book.title + ' by ' + currBook.book.author}
            className='h-auto max-w-none rounded-md object-contain shadow-lg'
            // width={width}
            // height={width * 1.5}
            sizes='100vw'
            style={{ height: 'auto' }}
            src={currBook.book.covers.length > 0 && currBook.book.covers[0].url}
          />
        )}
      </div>
    </div>
    <Link
      //   ref={linkRef}
      href={book.href}
      target={'_blank'}
      className='hidden'
    ></Link>
    {/* <ArrowLink href={book.href} content={'View in Goodreads'} /> */}
  </div>;
};
const BookItem = ({ book }: { book: any }) =>
  book.userId ? (
    <div className={'flex-row'}>
      <div className=''>
        <Book userBook={book} showRemoveBook={false} view='gallery' />
      </div>
    </div>
  ) : (
    <div className={'flex-row'}>
      <Link
        href={`/book/${book.googleId}`}
        className={'text-beige hover:text-stone-500'}
      >
        <BookCover src={book.bookImage} />
      </Link>
    </div>
  );

// Define the props for the new component
type ContentMessageProps = {
  isPending: boolean;
  view: string;
  content: any[]; // You should replace 'any' with the actual type of your content items
};

const LoadingMessage: React.FC<ContentMessageProps> = ({
  isPending,
  view,
  content,
}) => {
  let message = 'Loading...'; // Default message

  // If content is not loading and the view is 'want-to-read', change the message.
  if (!isPending && view === 'want-to-read') {
    message = "You don't have any Want to Read books.";
  }

  if (content.length === 0) {
    return <NoResults message={message} />;
  }

  return null;
};
