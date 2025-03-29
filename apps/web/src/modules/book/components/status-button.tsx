'use client';
import { Reading_Status } from '@/graphql/graphql';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { readingStatuses } from '@/config/books';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import useUserBookStore from '@/stores/use-user-book-store';

interface StatusButtonListProps {
    onClose: () => void;
}

export function StatusButtonList({ onClose }: StatusButtonListProps) {
    const { setUserBook } = useUserBookStore();

    return (
        <div className='flex flex-col gap-2'>
            {Object.keys(readingStatuses).map((bookStatus, index) => (
                <Button
                    key={index}
                    variant='outline'
                    className='w-full justify-start gap-2'
                    onClick={() => {
                        setUserBook({ status: bookStatus as Reading_Status });
                        onClose();
                    }}
                >
                    <Icons.book className='h-4 w-4' />
                    {readingStatuses[bookStatus as Reading_Status].name}
                </Button>
            ))}
        </div>
    );
}
