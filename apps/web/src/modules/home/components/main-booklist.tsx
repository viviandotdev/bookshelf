'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import { cn } from '@/lib/utils';
import { useEffect, useState, useTransition } from 'react';
import { bestsellers } from '@/modules/home/api/bestsellers';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import Link from 'next/link';
import NoResults from '@/components/no-results';
import CustomizeDropdown from './customize-dropdown';

export const MainBookList = ({
  books,
  currView,
}: {
  books: any;
  currView: string;
}) => {
  // fiction, nonfiction, want-to-read
  const [view, setView] = useState<string>(currView);
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState(books);
  const getTitle = (view: string) => {
    switch (view) {
      case 'want-to-read':
        return 'Want to Read';
      case 'fiction':
        return 'New York Times Bestseller Fiction';
      case 'non-fiction':
        return 'New York Times Bestseller Non-Fiction';
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
              equals: 'Want to Read',
            },
          }).then((data) => {
            setContent(data);
          });
        });
        break;
      case 'fiction':
        startTransition(() => {
          bestsellers('hardcover-fiction').then((data) => {
            setContent(data);
          });
        });
        break;
      case 'non-fiction':
        startTransition(() => {
          bestsellers('hardcover-nonfiction').then((data) => {
            setContent(data);
          });
        });
        break;
      default:
        break;
    }
  }, [view]);

  return (
    <div className='rounded-md border-2 border-gray-100 bg-white p-6 shadow-sm'>
      <div className='mb-4 flex justify-between'>
        <h2 className={cn('text-xl font-semibold text-beige-700')}>
          {getTitle(view)}
        </h2>
        <CustomizeDropdown currentView={view} setView={setView} />
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
