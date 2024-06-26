'use client';
import React, { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { Button, buttonVariants } from '../../ui/button';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import useUserBookStore from '@/stores/use-user-book-store';
import AlertModal from '../alert-modal';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Reading_Status, useRemoveUserBookMutation } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { readingStatuses } from '@/config/books';

interface BookStatusModalProps {}

const BookStatusModal: React.FC<BookStatusModalProps> = ({}) => {
  const {
    isOpen,
    onClose,
    bookCounts,
    isLoading: loadingBookCounts,
  } = useBookStatusModal();
  const [openAlert, setOpenAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { updateStatus, userBookId, status, resetStore } = useUserBookStore();

  const [removeUserBook] = useRemoveUserBookMutation({
    onCompleted: (data) => {
      resetStore(); //empty the userBook store
      toast({
        title: `Book removed from your shelf`,
        variant: 'success',
      });
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });

  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (data) => {
      toast({
        title: `Book status updated `,
        variant: 'success',
      });
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });

  const readingStatusesWithCounts = Object.keys(readingStatuses).map(
    (key, index) => {
      let count = 0;
      console.log(key);
      if (key === Reading_Status.WantToRead) {
        count = bookCounts?.wantsToReadCount || 0;
      } else if (key === Reading_Status.Reading) {
        count = bookCounts?.readingCount || 0;
      } else if (key === Reading_Status.UpNext) {
        count = bookCounts?.upNextCount || 0;
      } else if (key === Reading_Status.Finished) {
        count = bookCounts?.finishedCount || 0;
      } else if (key === Reading_Status.DidNotFinish) {
        // count = statusModal.bookCounts?.didNotFinishCount || 0;
      }

      return {
        key,
        name: readingStatuses[key as Reading_Status].name,
        count,
      };
    }
  );
  console.log(readingStatusesWithCounts);
  const handleStatusClick = async (newStatus: Reading_Status) => {
    await updateUserBook(userBookId, {
      status: newStatus,
    });
    updateStatus(newStatus);
    onClose();
  };

  const onDelete = async () => {
    setIsLoading(true);
    await removeUserBook({
      variables: { where: { id: userBookId } },
    });
    setIsLoading(false);
    setOpenAlert(false);
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-3'>
        {readingStatusesWithCounts.map((bookStatus, index) => (
          <Button
            key={index}
            onClick={() => handleStatusClick(bookStatus.key as Reading_Status)}
            variant={'outline'}
            className='h-full w-full items-start justify-start rounded-xl px-6 py-6'
          >
            <div className='flex w-full justify-between'>
              <div className='flex flex-col gap-2'>
                <div className='text-base font-normal leading-tight text-black'>
                  {bookStatus.name}
                </div>
                <div className='flex'>
                  {loadingBookCounts ? (
                    <div className='h-4 w-12 animate-pulse rounded-md bg-gray-200'></div>
                  ) : (
                    <div className='items-start text-xs font-normal uppercase leading-3 text-gray-400 '>
                      {bookStatus.count}
                      {bookStatus.count == 1 ? ' BOOK' : ' BOOKS'}
                    </div>
                  )}
                </div>
              </div>
              <div>
                {status == bookStatus.key && (
                  <Icons.check className='m-2 h-4 w-4 stroke-[4px]' />
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
      <Button
        className={cn(
          buttonVariants({ size: 'lg' }),
          'rounded-xl border-none bg-white text-base text-red-500 hover:bg-white'
        )}
        onClick={() => {
          onClose();
          setOpenAlert(true);
        }}
        label={'Remove from my library'}
        icon={<Icons.delete className='m-2 h-4 w-4 stroke-[4px]' />}
      />
    </div>
  );

  return (
    <>
      <AlertModal
        title={'Are you sure you want to remove this book from your shelf?'}
        description={
          'Removing this book will clear associated ratings, reviews and reading activity'
        }
        isOpen={openAlert}
        onClose={() => setOpenAlert(false)}
        onConfirm={onDelete}
        loading={isLoading}
      />
      <Modal isOpen={isOpen} onClose={onClose} title={`Select book status `}>
        {bodyContent}
      </Modal>
    </>
  );
};

export default BookStatusModal;
