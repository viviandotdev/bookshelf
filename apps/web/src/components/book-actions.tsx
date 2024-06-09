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
  useUpdateReadingStatusMutation,
} from '../graphql/graphql';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import { BookRating } from './book-rating';
import { bookStatuses } from '@/config/books';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
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
}

const BookActions: React.FC<BookActionsProps> = ({
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
  const addToShelfModal = useAddToShelfModal();
  const { updateBookId, updateStatus, setBook, initShelves } =
    useUserBookStore();
  const setShelves = useAddToShelfModal((state) => state.setShelves);

  const [updateReadingStatus] = useUpdateReadingStatusMutation({
    onCompleted: () => {
      toast({
        title: 'Book status updated',
        variant: 'success',
      });
    },
    onError: (error) => {
      toast({
        title: error.message,
        variant: 'destructive',
      });
    },
  });

  const journalEntryModal = useJournalEntryModal();
  const onUpdate = async (status: Reading_Status) => {
    setStatus(status);
    // update in the database
    await updateReadingStatus({
      variables: { bookId: book!.id, readingStatus: status },
    });
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
          {bookStatuses.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className={`${status === item.id && 'bg-beige-400 text-beige'}`}
              onClick={(e) => {
                e.stopPropagation();
                onUpdate(item.id);
                if (moveCard) {
                  moveCard(item.id);
                  setOpenDropdown(false);
                }
              }}
            >
              {item.icon && (
                <item.icon
                  className={cn(
                    'mr-2 h-4 w-4',
                    item.id === status ? 'opacity-100' : 'opacity-60'
                  )}
                />
              )}

              {item.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem>
            <div className='flex gap-2'>
              My Rating:
              <BookRating
                // bookId={book!.id}
                rating={rating}
                setRating={setRating}
              />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              // Shelves this part is part of
              initShelves(shelves!);
              setShelves(shelves!);
              updateBookId(book!.id);
              addToShelfModal.onOpen();
            }}
          >
            <Icons.shelf className='mr-2 h-5 w-5' />
            Add to shelf
          </DropdownMenuItem>
          {status == Reading_Status.Reading && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setBook(book!);
                updateStatus(status);
                updateBookId(book!.id);
                journalEntryModal.onOpen();
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
