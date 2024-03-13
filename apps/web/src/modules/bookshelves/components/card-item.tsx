import { Draggable } from '@hello-pangea/dnd';
import React, { startTransition, useEffect, useRef, useState } from 'react';
import BookCover from '@/components/book-cover';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { UserBook } from '@/graphql/graphql';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import rating from '@/components/rating';
import { cn, formatAuthors } from '@/lib/utils';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import useCreateReviewModal from '@/components/modals/create-review-modal/use-create-review.modal';
import { getReview } from '@/modules/review/queries/getReview';
interface CardItemProps {
  data: UserBook;
  index: number;
  status: string;
  totalBooks: number;
}

export const CardItem: React.FC<CardItemProps> = ({
  data,
  index,
  status: cardStatus,
}) => {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const buttonText = cardStatus === 'Read' ? 'Write a Review' : 'View Activity';
  const journalEntryModal = useJournalEntryModal();
  const { updateBookId, updateStatus, updateRating, setBook } =
    useUserBookStore();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [status, setStatus] = useState(data.status ? data.status : '');
  const [rating, setRating] = useState(data.rating ? data.rating : 0); // Initial value
  const [openAlert, setOpenAlert] = useState(false); // Initial value
  const [percent, setPercent] = useState(0);
  const { book: myBook } = useUserBookStore();
  const { journalEntry } = useJournalEntryModal();
  const createReviewModal = useCreateReviewModal();
  useEffect(() => {
    setStatus(data.status ? data.status : '');
    setRating(data.rating ? data.rating : 0);
    if (data.journalEntry && data.journalEntry.length > 0) {
      setPercent(data.journalEntry[0].currentPercent || 0);
    }
  }, [data]);

  useEffect(() => {
    // update percent detail
    if (myBook && myBook.id === data.book?.id) {
      setPercent(journalEntry.percent);
    }
  }, [journalEntry]);

  if (!data) return null;
  const { book, shelves } = data;

  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role='button'
          onClick={(e) => {
            e.stopPropagation();

            if (linkRef.current) {
              console.log('linked cliked');
              linkRef.current.click();
            }
          }}
          className='group/item relative rounded-md border-2 border-transparent bg-white px-3 py-2 text-sm shadow-sm hover:border-beige-500/50'
        >
          <div className='flex gap-4'>
            {index}
            <BookCover
              src={book?.coverImage}
              className={'shadow-md'}
              size={'sm'}
            />
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-0.5'>
                <div className='line-clamp-2 text-base font-medium text-beige-700'>
                  {book?.title}
                </div>
                <div className='text-gray-400'> {formatAuthors(book!)}</div>
              </div>
              <div className='text-xs text-gray-400'>
                Completed On Jul 23, 2022
              </div>
            </div>
          </div>

          {cardStatus !== 'Currently Reading' ? (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                if (cardStatus === 'Read') {
                  //    get review
                  // fetch a review

                  startTransition(() => {
                    getReview('', book!.id).then((data: any) => {
                      updateBookId(book!.id);
                      setBook(book!);
                      // updateRating(data.userBook.rating || 0)

                      if (data) {
                        createReviewModal.setReview({
                          spoilers: data.spoilers || false,
                          content: data.content || '',
                        });
                        createReviewModal.onEdit(data.id || '');
                      } else {
                        createReviewModal.onOpen();
                      }
                    });
                  });
                } else {
                  startTransition(() => {
                    router.push(`/book/${book?.id}/activity`);
                  });
                }
              }}
              variant={'secondary'}
              size={'sm'}
              className='mb-1 mt-4 h-9 w-full border border-beige-500/50'
            >
              {buttonText}
            </Button>
          ) : (
            <div className=' mb-1 mt-4 flex w-full items-center justify-center gap-2'>
              <Progress className='h-2.5 w-full items-center' value={percent} />
              <div className='flex items-center gap-0.5'>
                <div className='items-center text-xs font-semibold text-beige-700'>
                  {percent}
                </div>
                <span>%</span>
              </div>
            </div>
          )}
          <div
            className={cn(
              'hidden rounded-sm px-1 group-hover/item:block hover:bg-gray-200',
              openDropdown && 'block'
            )}
          >
            <div className='absolute right-2 top-2 flex rounded-md shadow-md'>
              {cardStatus == 'Currently Reading' && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setBook(book!);
                    updateStatus(status);
                    updateBookId(book!.id);
                    journalEntryModal.onOpen();
                  }}
                  variant={'card'}
                  size={'xs'}
                  className={cn('rounded-l-md px-2')}
                >
                  <Icons.plus className={`h-4 w-4`} />
                </Button>
              )}
              <BookActions
                book={book!}
                setOpenAlert={setOpenAlert}
                // openAlert={openAlert}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                status={status}
                setStatus={setStatus}
                setRating={setRating}
                rating={rating}
                shelves={shelves!}
                side={'bottom'}
                trigger={
                  <Button
                    variant={'card'}
                    size={'xs'}
                    className={cn('rounded-md px-2')}
                  >
                    <a className=''>
                      <Icons.more className='h-4 w-4 rotate-90 cursor-pointer fill-current stroke-gray-500 stroke-1' />
                    </a>
                  </Button>
                }
              />
            </div>
          </div>

          <Link
            ref={linkRef}
            href={`/book/${data?.book?.id}`}
            className='hidden'
          ></Link>
        </div>
      )}
    </Draggable>
  );
};
export default CardItem;
