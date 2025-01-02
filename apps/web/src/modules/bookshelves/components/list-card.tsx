'use client';
import BookCover from '@/components/book-cover';
import { Button } from '@/components/ui/button';
import { Book, Reading_Status, Shelf, Size } from '@/graphql/graphql';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import { readingStatuses } from '@/config/books';
import Rating from '@/components/rating';
import RatingInfo from '@/modules/book/components/rating-info';
import { format } from 'date-fns';
import LikeButton from '@/modules/book/components/like-button';
import { IconButton } from './icon-button';
interface ListCardProps {
  book: Book;
  openAlert: boolean;
  isLoading: boolean;
  onDelete: () => void;
  status: string;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
  shelves: any; // Adjust the type according to your requirement
  dateAdded: string;
  userBookId: string;
}

export const ListCard: React.FC<ListCardProps> = ({
  book,
  userBookId,
  openAlert,
  isLoading,
  onDelete,
  status,
  setRating,
  setStatus,
  setOpenAlert,
  rating,
  shelves,
  dateAdded,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const slug = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  //   const currentStatus = getBookStatusIcon(status);
  const StatusIcon = readingStatuses[status as Reading_Status].icon;
  const isLiked = shelves?.some(
    ({ shelf }: { shelf: Shelf }) => shelf.name === 'Favorites'
  );
  const isOwned = shelves?.some(
    ({ shelf }: { shelf: Shelf }) => shelf.name === 'Owned'
  );
  return (
    <div
      className='flex cursor-pointer items-start justify-between rounded-lg border-2 border-gray-100 bg-white/90 p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md'
      onClick={() => {
        if (linkRef.current) {
          linkRef.current.click();
        }
      }}
    >
      <div className='flex items-start space-x-4'>
        <div className='flex-shrink-0'>
          <BookCover src={getCoverUrl(book, Size.Small)} size={'sm'} />
        </div>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-2'>
            <h2 className={'text-xl font-semibold leading-none text-beige'}>
              {book.title}
            </h2>
          </div>
          <p className='mt-0.5 text-sm font-normal text-beige'>
            by {formatAuthors(book.authors!)}
          </p>
          <div className='flex items-center gap-1'>
            <div className='flex items-center'>
              {rating ? (
                <>
                  <Rating className='mt-[-2.5px]' value={rating} />
                  <span className='mx-1.5 items-center text-[10px] font-normal text-gray-400'>
                    •
                  </span>
                </>
              ) : null}
              <>
                <RatingInfo size={'sm'} ratings={book?.ratings || []} />
              </>

              <span className='mx-1.5 items-center text-[10px] font-normal text-gray-400'>
                •
              </span>
              <span className='text-xs font-normal text-beige'>
                Added on {format(new Date(dateAdded), 'MMMM d, yyyy')}
              </span>
            </div>
          </div>

          <div className='-mt-0.5 flex items-center font-medium'>
            <div className='inline-flex w-96 items-start justify-start'>
              <div className='mt-1 flex h-9 items-start justify-start gap-2'>
                {isLiked && (
                  <IconButton
                    className={`h-7 w-7  border-beige-100 bg-beige-100 `}
                  >
                    <Icons.heart
                      className={`h-3 w-3 items-center  fill-current text-beige-700 drop-shadow-lg`}
                    />
                  </IconButton>
                )}
                {isOwned && (
                  <IconButton
                    className={`h-7 w-7  border-beige-100 bg-beige-100`}
                  >
                    <Icons.owned
                      className={`h-3 w-3 items-center text-beige-700 drop-shadow-lg`}
                    />
                  </IconButton>
                )}
              </div>
              <div className='pl-2'>
                {shelves.map(({ shelf }: { shelf: Shelf }, index: number) => (
                  <div
                    key={index}
                    className='mt-1 inline-flex h-9 flex-col items-start justify-start pr-2'
                  >
                    <div className='flex h-7 flex-col items-center justify-center self-stretch rounded-lg bg-beige-100 px-3'>
                      <div className='text-xs font-normal leading-loose text-beige'>
                        {shelf.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <BookActions
          book={book!}
          userBookId={userBookId}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          status={status as Reading_Status}
          setStatus={setStatus}
          setRating={setRating}
          rating={rating}
          showRemoveBook={true}
          side={'bottom'}
          align='end'
          trigger={
            <Button variant={'secondary'} className='h-8 px-3 shadow-sm'>
              <div className='flex items-center gap-1.5'>
                <StatusIcon className={cn('h-4 w-4')} />

                {readingStatuses[status as Reading_Status].name}
                <Icons.chevronDown className='h-5 w-5 text-beige-700' />
              </div>
            </Button>
          }
        />
      </div>
      <Link ref={linkRef} href={`/book/${book.slug}`} className='hidden'></Link>
    </div>
  );
};
export default ListCard;
