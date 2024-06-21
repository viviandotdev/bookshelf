'use client';
import React, { useEffect, useRef } from 'react';
import { Icons } from './icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Book,
  Reading_Status,
  UserBookShelves,
  useGetMyBookShelvesLazyQuery,
  useShelvesLazyQuery,
} from '../graphql/graphql';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import { BookRating } from './book-rating';
import { readingStatuses } from '@/config/books';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { UserBook } from '@prisma/client';
import useShelfStore from '@/stores/use-shelf-store';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
interface BookActionsProps {
  book: Book | undefined;
  shelves: UserBookShelves[] | undefined;
  openDropdown: boolean;
  rating: number;
  status: Reading_Status;
  showRemoveBook?: boolean;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  moveCard?: (status: Reading_Status) => void;
  trigger: React.ReactNode;
  side?: 'top' | 'bottom';
  align?: 'start' | 'end';
  userBookId: string;
}

const BookActions: React.FC<BookActionsProps> = ({
  userBookId,
  book,
  rating,
  status,
  shelves,
  moveCard,
  openDropdown,
  showRemoveBook,
  setStatus,
  setOpenAlert,
  setRating,
  setOpenDropdown,
  trigger,
  side = 'top',
  align = 'start',
}) => {
  const { updateUserBookId, updateStatus, setBook } = useUserBookStore();
  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (data: UserBook) => {
      toast({
        title: `Book status updated to ${data.status} `,
        variant: 'success',
      });
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });
  const onUpdateStatus = async (status: Reading_Status) => {
    setStatus(status);
    console.log(userBookId);
    await updateUserBook(userBookId, { status: status });
  };
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <DropdownMenu open={openDropdown} modal={false}>
        <DropdownMenuTrigger
          asChild
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(!openDropdown);
          }}
        >
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onMouseLeave={(e) => {
            e.stopPropagation();
            setOpenDropdown(false);
          }}
          align={align}
          sideOffset={8}
          side={side}
          className='w-56'
        >
          <>
            {Object.keys(readingStatuses).map((key) => {
              const item = readingStatuses[key as Reading_Status] as {
                name: string;
                icon?: any;
              };
              return (
                <DropdownMenuItem
                  key={key}
                  className={`${status === key && 'bg-beige-400 text-beige'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateStatus(key as Reading_Status);
                    if (moveCard) {
                      moveCard(key as Reading_Status);
                      setOpenDropdown(false);
                    }
                  }}
                >
                  {item.icon && (
                    <item.icon
                      className={cn(
                        'mr-2 h-4 w-4',
                        key === status ? 'opacity-100' : 'opacity-60'
                      )}
                    />
                  )}
                  {item.name}
                </DropdownMenuItem>
              );
            })}
          </>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem>
            <div className='flex gap-2'>
              My Rating:
              <BookRating
                userBookId={userBookId}
                rating={rating}
                setRating={setRating}
              />
            </div>
          </DropdownMenuItem>
          <AddToShelfHandler
            userBookId={userBookId}
            bookTitle={book?.title || ''}
          >
            {(handleAddToShelf) => (
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToShelf();
                }}
              >
                <Icons.shelf className='mr-2 h-5 w-5' />
                Add to shelf
              </DropdownMenuItem>
            )}
          </AddToShelfHandler>
          {status == Reading_Status.Reading && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setBook(book!);
                updateStatus(status);
                updateUserBookId(userBookId);
              }}
            >
              <Icons.plus className='mr-2 h-5 w-5' />
              Log reading
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              if (linkRef.current) {
                linkRef.current.click();
              }
            }}
          >
            <Icons.view className='mr-2 h-5 w-5' />
            Show your activity
            <Link
              ref={linkRef}
              href={`/book/${book?.id}/activity`}
              className='hidden'
            ></Link>
          </DropdownMenuItem>

          {showRemoveBook && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setOpenAlert(true);
              }}
            >
              <Icons.delete className='mr-2 h-5 w-5' />
              Remove...
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default BookActions;
