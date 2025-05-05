'use client';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import React from 'react';
import BookCover from '../../book-cover';
import { CardDescription } from '../../ui/card';
import { Size, UserBook } from '@/graphql/graphql';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import useProgressModal from '../progress-modal/use-progress-modal';

interface LogBookCardProps {
    userBook: UserBook;
}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook }) => {
    const logBookModal = useLogBookModal();
    const progressModal = useProgressModal();
    const { setUserBook } = useUserBookStore();
    return (
        <div
            className='flex w-full cursor-pointer items-start gap-4 rounded-lg border-2 border-gray-100 bg-white/90 p-3 shadow-sm transition-all duration-300 ease-in-out hover:border-beige-500/50 hover:shadow-md hover:translate-y-[-2px] hover:scale-[1.01]'
            onClick={(e) => {
                e.stopPropagation();
                logBookModal.onClose();
                progressModal.onOpen();
                setUserBook({
                    userBookId: userBook.id,
                    bookTitle: userBook.book.title,
                });
            }}
        >
            <div className="flex-shrink-0">
                <BookCover size={'xs'} src={getCoverUrl(userBook.book, Size.Small)} />
            </div>
            <div className='flex flex-col justify-center overflow-hidden'>
                <div className={cn('line-clamp-1 text-base font-semibold leading-tight text-beige-700')}>
                    {userBook.book?.title}
                </div>
                <CardDescription className='mt-1 line-clamp-1 text-sm text-gray-400'>
                    by {formatAuthors(userBook.book.authors!)}
                </CardDescription>
            </div>
        </div>
    );
};
export default LogBookCard;
