'use client';
import { Progress_Type, Size, UserBook } from '@/graphql/graphql';
import React from 'react';
import useUserBookStore from '@/stores/use-user-book-store';
import BookCover from '@/components/book-cover';
import { getCoverUrl, cn, formatAuthors } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import useProgressModal from '@/components/modals/progress-modal/use-progress-modal';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CurrentlyReadingItemProps {
    userBook: UserBook;
}

const convertPercentProgressToPages = (
    percentProgress: number,
    capacity: number
) => {
    return Math.round((percentProgress / 100) * capacity);
};

const covertPageProgressToPercent = (
    pageProgress: number,
    capacity: number
) => {
    return Math.round((pageProgress / capacity) * 100);
};

export const CurrentlyReadingItem: React.FC<CurrentlyReadingItemProps> = ({
    userBook,
}) => {
    const { onOpen, readDates } = useProgressModal();
    const { setUserBook } = useUserBookStore();
    const readDate = readDates.find((rd) => rd.userBookId === userBook.id);
    const type = readDate?.readingProgress?.type;
    const capacity = readDate?.readingProgress?.capacity;

    const percentProgress =
        type == Progress_Type.Percentage
            ? readDate?.readingProgress?.progress
            : covertPageProgressToPercent(
                readDate?.readingProgress?.progress || 0,
                capacity || 0
            );

    const pageProgress =
        type == Progress_Type.Pages
            ? readDate?.readingProgress?.progress
            : convertPercentProgressToPages(
                readDate?.readingProgress?.progress || 0,
                capacity || 0
            );

    const { book } = userBook;
    const router = useRouter();
    return (
        <div className='flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white shadow-sm'>
            <div className='flex items-center gap-4 border-gray-100 px-4 py-3'>
                <div className='flex flex-col items-center'>
                    <div className='flex items-center gap-4'>
                        <BookCover src={getCoverUrl(book, Size.Small)} size={'xxs'} />
                        <div className='space-y-1'>
                            <h2
                                onClick={() => router.push(`/book/${book.slug}`)}
                                className={cn(
                                    'hover:underline cursor-pointer hover:underline-offset-2 text-md line-clamp-2 font-semibold leading-[18px] text-beige-700'
                                )}
                            >
                                {book.title}
                            </h2>
                            <div className='flex items-center gap-2'>
                                <p className='line-clamp-1 text-sm text-beige-700'>
                                    by {formatAuthors(book.authors!)}
                                </p>
                                <div className='flex items-center'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center font-medium'>
                        <span className='text-sm text-gray-700'></span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-4 px-4 py-2'>
                <div>
                    <div className='flex min-w-[19em] flex-col gap-[-2px] px-2 text-sm'>
                        <div className='flex w-full items-center justify-between text-xs font-medium text-beige-700'>
                            <div className='mb-1'>
                                {pageProgress} / {readDate?.readingProgress?.capacity} pages
                                read
                            </div>

                            <div className='mb-1 flex items-center'>
                                {percentProgress || 0}%
                            </div>
                        </div>
                        <div className='flex min-w-36 items-center justify-center gap-2 text-center text-beige'>
                            <Progress className='items-center' value={percentProgress || 0} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            if (readDate?.readingProgress) {
                                onOpen();
                                setUserBook({
                                    userBookId: userBook.id,
                                    bookTitle: book.title,
                                });
                            }
                        }}
                        className={`h-8 w-8 rounded-sm bg-white`}
                    >
                        <span className='sr-only'>Edit Progress</span>
                        <Pencil className={`h-4 w-4 items-center`} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
export default CurrentlyReadingItem;
