'use client';
import { Icons } from '@/components/icons';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import {
    Reading_Status,
    UserBook,
} from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useEffect } from 'react';
import { BookData } from '@/modules/bookshelves/types';

interface StatusButtonProps {
    book: BookData;
    targetBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({
    targetBook,
    book,
}) => {
    const statusModal = useBookStatusModal();
    const { status, setUserBook, } = useUserBookStore();

    useEffect(() => {
        if (targetBook) {
            setUserBook({ status: targetBook!.status });
        }
    }, [targetBook, setUserBook]);

    const handleClick = async () => {
        statusModal.onOpen();
        statusModal.setIsLoading(true);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                variant='secondary'
                className='w-[160px] gap-2 rounded-lg font-normal shadow-xs transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
            >
                <Icons.save className='h-5 w-5' />
                <div>{readingStatuses[status as Reading_Status]?.name}</div>
            </Button>
        </>
    );
};

export default StatusButton;
