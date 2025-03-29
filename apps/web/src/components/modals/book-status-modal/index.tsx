'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button } from '../../ui/button';
import { Icons } from '@/components/icons';
import useUserBookStore from '@/stores/use-user-book-store';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Reading_Status } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { readingStatuses } from '@/config/books';

interface BookStatusModalProps { }

const BookStatusModal: React.FC<BookStatusModalProps> = ({ }) => {
    const {
        isOpen,
        onClose,
    } = useBookStatusModal();
    const { setUserBook, userBookId, status: targetBookStatus } = useUserBookStore();
    const [selectedStatus, setSelectedStatus] = useState<Reading_Status>(targetBookStatus as Reading_Status);

    const { updateUserBook } = useUpdateUserBook({
        onCompleted: (_) => {
            toast({
                title: `Book status updated `,
                variant: 'success',
            });
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    useEffect(() => {
        setSelectedStatus(targetBookStatus as Reading_Status);
    }, [targetBookStatus]);

    const handleStatusClick = (newStatus: Reading_Status) => {
        setSelectedStatus(newStatus);
    };

    const onSubmit = async () => {
        await updateUserBook(userBookId, {
            status: selectedStatus,
        });
        setUserBook({ status: selectedStatus });
        onClose();
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title={`Select book status `}>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        {Object.keys(readingStatuses).map((bookStatus, index) => (
                            <Button
                                key={index}
                                onClick={() => handleStatusClick(bookStatus as Reading_Status)}
                                variant={'outline'}
                                className='h-full w-full items-start justify-start rounded-xl px-6 py-6'
                            >
                                <div className='flex w-full justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-base font-normal leading-tight text-black'>
                                            {readingStatuses[bookStatus as Reading_Status].name}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        {selectedStatus === bookStatus && (
                                            <Icons.check className='h-4 w-4 stroke-[4px]' />
                                        )}
                                    </div>
                                </div>
                            </Button>
                        ))}
                    </div>
                    <div className='flex justify-end gap-2 pt-4'>
                        <Button variant="outline" className="rounded-lg" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button className="rounded-lg" onClick={onSubmit}>
                            Done
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default BookStatusModal;
