'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useEffect, useState, useTransition } from 'react';
import { bestsellers } from '@/modules/home/api/bestsellers';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import Link from 'next/link';
import NoResults from '@/components/no-results';

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
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center gap-2'>
            <Icons.customize className='h-4 w-4 items-center' />
            <span>Customize</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={'start'} sideOffset={8} side={'bottom'}>
            <DropdownMenuLabel>List Preferences</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={view == 'want-to-read' ? 'bg-beige-100' : ''}
              onClick={() => {
                setView('want-to-read');
              }}
            >
              Want to Read
            </DropdownMenuItem>
            <DropdownMenuItem
              className={view == 'fiction' ? 'bg-beige-100' : ''}
              onClick={() => {
                setView('fiction');
              }}
            >
              New York Times Bestseller Fiction
            </DropdownMenuItem>
            <DropdownMenuItem
              className={view == 'non-fiction' ? 'bg-beige-100' : ''}
              onClick={() => {
                setView('non-fiction');
              }}
            >
              New York Times Bestseller Non-Fiction
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={'grid grid-cols-5 gap-4'}>
        {content.length > 0 ? (
          content.slice(0, 5).map((book: any, idx: number) => (
            <>
              {book.userId ? (
                <>
                  <div key={idx} className={'flex-row'}>
                    <Book
                      userBook={book}
                      showRemoveBook={false}
                      view='gallery'
                    />
                  </div>
                </>
              ) : (
                <div key={idx} className={'flex-row'}>
                  <Link
                    href={`/book/${book.googleId}`}
                    className={'text-beige hover:text-stone-500'}
                  >
                    <BookCover src={book.bookImage} />
                  </Link>
                </div>
              )}
            </>
          ))
        ) : (
          <div></div>
        )}
      </div>
      {content.length == 0 && (
        <div>
          {isPending ? (
            <div>{/* <NoResults message={'Loading.'} /> */}</div>
          ) : (
            <div>
              <NoResults message={"You don't have any Want to Read books."} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
