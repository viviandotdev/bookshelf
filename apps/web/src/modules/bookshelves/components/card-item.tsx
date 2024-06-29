import { Draggable } from '@hello-pangea/dnd';
import React, { startTransition, useEffect, useRef, useState } from 'react';
import BookCover from '@/components/book-cover';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Reading_Status, Size, UserBook } from '@/graphql/graphql';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import useUserBookStore from '@/stores/use-user-book-store';
import { ColumnWithBooks } from '../types';
interface CardItemProps {
  data: UserBook;
  index: number;
  status: string;
  totalBooks: number;
  orderedData: ColumnWithBooks[];
  setOrderedData: React.Dispatch<React.SetStateAction<ColumnWithBooks[]>>;
}

export const CardItem: React.FC<CardItemProps> = ({
  data,
  index,
  orderedData,
  setOrderedData,
  status: cardStatus,
}) => {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const buttonText = cardStatus === 'Read' ? 'Write a Review' : 'View Activity';
  const { setUserBook } = useUserBookStore();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [status, setStatus] = useState(data.status ? data.status : '');
  const [rating, setRating] = useState(data.rating ? data.rating : 0); // Initial value
  const [openAlert, setOpenAlert] = useState(false); // Initial value
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setStatus(data.status ? data.status : '');
    setRating(data.rating ? data.rating : 0);
  }, [data]);

  if (!data) return null;

  const { book, shelves } = data;

  const moveCard = (status: string) => {
    if (status === cardStatus) return;

    let newOrderedData = [...orderedData];
    const destination = status;
    // Find the list that the card is currently in
    const sourceList = newOrderedData.find((list) => list.title === cardStatus);
    const destinationList = newOrderedData.find(
      (list) => list.title === destination
    );
    if (!sourceList || !destinationList) {
      return;
    }
    if (!sourceList.books || !destinationList.books) {
      sourceList.books = [];
    }

    if (!destinationList.books) {
      destinationList.books = [];
    }

    const [movedCard] = sourceList.books.splice(index, 1);
    movedCard.status = status;
    destinationList.books.splice(0, 0, movedCard);
    sourceList.books.forEach((book, index) => {
      book.order = index;
    });

    destinationList.books.forEach((book, index) => {
      book.order = index;
    });
    setOrderedData(newOrderedData);
  };
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
            <BookCover
              src={getCoverUrl(book, Size.Small)}
              className={'shadow-md'}
              size={'sm'}
            />
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-0.5'>
                <div className='line-clamp-2 text-base font-medium text-beige-700'>
                  {book?.title}
                </div>
                <div className='text-gray-400'>
                  {book.authors && book?.authors[0]}
                </div>
              </div>
            </div>
          </div>

          {/* <div className=' mb-1 mt-4 flex w-full items-center justify-center gap-2'>
              <Progress className='h-2.5 w-full items-center' value={percent} />
              <div className='flex items-center gap-0.5'>
                <div className='items-center text-xs font-semibold text-beige-700'>
                  {percent}
                </div>
                <span>%</span>
              </div>
            </div> */}

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
                    setUserBook({
                      status: status as Reading_Status,
                      book: {
                        title: book.title,
                      },
                    });
                  }}
                  variant={'card'}
                  size={'xs'}
                  className={cn('rounded-l-md px-2')}
                >
                  <Icons.plus className={`h-4 w-4`} />
                </Button>
              )}
              <BookActions
                userBookId={data.id}
                book={book!}
                setOpenAlert={setOpenAlert}
                // openAlert={openAlert}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                status={status as Reading_Status}
                moveCard={moveCard}
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
            href={`/book/${data?.book?.slug}`}
            className='hidden'
          ></Link>
        </div>
      )}
    </Draggable>
  );
};
export default CardItem;
