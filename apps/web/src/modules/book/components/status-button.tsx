'use client';
import { Icons } from '@/components/icons';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import { Reading_Status, UserBook } from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useEffect, useMemo, useRef } from 'react';

interface StatusButtonProps {
  userBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({ userBook }) => {
  const statusModal = useBookStatusModal();
  const { updateUserBookId, updateStatus, status } = useUserBookStore();

  useMemo(() => {
    if (userBook) {
      updateStatus(userBook.status);
    }
  }, [userBook, updateStatus]);

  const handleExistingUserBookClick = () => {
    if (userBook) {
      updateUserBookId(userBook.id);
      statusModal.onOpen();
    }
  };

  const handleNewUserBookClick = () => {
    console.log('Adding new book to "Want to Read"');
  };

  return (
    <>
      {userBook ? (
        <Button
          onClick={handleExistingUserBookClick}
          variant='secondary'
          className='gap-2 rounded-lg font-normal'
        >
          <Icons.save className='h-5 w-5' />
          <div>{readingStatuses[status as Reading_Status]?.name}</div>
        </Button>
      ) : (
        <Button
          onClick={handleNewUserBookClick}
          variant='outline'
          className='roundeåd-lg gap-2 font-normal'
        >
          <Icons.save className='h-5 w-5' />
          <div>Want to Read</div>
        </Button>
      )}
    </>
  );
};

export default StatusButton;
