'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import { Suspense, useEffect, useState, useTransition } from 'react';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import Link from 'next/link';
import NoResults from '@/components/no-results';
import CustomizeDropdown from './customize-dropdown';
import DashboardHeader from './dashboard-header';
import { Reading_Status } from '@/graphql/graphql';

export const MainBookList = ({
  books,
  currView,
  username,
}: {
  books: any;
  username: string;
  currView: string;
}) => {
  // fiction, nonfiction, want-to-read
  const [view, setView] = useState<string>('want-to-read');
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(books);
  const getTitle = (view: string) => {
    switch (view) {
      case 'want-to-read':
        return Reading_Status.WantToRead;
      default:
        return ''; // Default title or some other appropriate title
    }
  };

  useEffect(() => {
    switch (view) {
      case 'want-to-read':
        startTransition(() => {
          getUserBooks({
            status: {
              equals: Reading_Status.WantToRead,
            },
          }).then((data) => {
            setContent(data);
          });
        });
        break;
      default:
        break;
    }
  }, [view]);

  return (
    <div className='shadow-xs rounded-md border border-gray-200 bg-white p-6'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          title={getTitle(view)}
          count={content.length}
          href={`/${username}/books?status=Want+to+Read`}
        />

        {/* <CustomizeDropdown currentView={view} setView={setView} /> */}
      </div>
      <div className={'grid grid-cols-5 gap-4'}>
        {content.length > 0 &&
          content
            .slice(0, 5)
            .map((book: any) => <BookItem key={book.id} book={book} />)}
      </div>
      <ContentMessage isPending={isPending} view={view} content={content} />
    </div>
  );
};

const BookItem = ({ book }: { book: any }) =>
  book.userId ? (
    <div className={'flex-row'}>
      <Book userBook={book} showRemoveBook={false} view='gallery' />
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

const ContentMessage: React.FC<ContentMessageProps> = ({
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
