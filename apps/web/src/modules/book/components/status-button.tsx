'use client';
import { Icons } from '@/components/icons';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import {
  Reading_Status,
  UserBook,
  useBookCountsByUserIdLazyQuery,
} from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useEffect, useMemo, useRef } from 'react';
import { useSession } from 'next-auth/react';
import ContentLoader from 'react-content-loader';
interface StatusButtonProps {
  userBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({ userBook }) => {
  const statusModal = useBookStatusModal();
  const { data } = useSession();
  const { updateUserBookId, updateStatus, status } = useUserBookStore();

  const [bookCountsByUserId] = useBookCountsByUserIdLazyQuery({
    onCompleted: (data) => {
      statusModal.setBookCounts(data.bookCountsByUserId);
    },
  });
  useMemo(() => {
    if (userBook) {
      updateStatus(userBook.status);
    }
  }, [userBook, updateStatus]);

  const handleExistingUserBookClick = async () => {
    if (userBook) {
      updateUserBookId(userBook.id);
      await bookCountsByUserId({
        variables: { userId: data?.user.id },
      });
      statusModal.onOpen();
    }
  };

  const handleNewUserBookClick = () => {
    console.log('Adding new book to "Want to Read"');
  };

  return (
    <>
      {userBook ? (
        <>
          {status ? (
            <Button
              onClick={handleExistingUserBookClick}
              variant='secondary'
              className='w-[160px] gap-2 rounded-lg font-normal'
            >
              <Icons.save className='h-5 w-5' />
              <div>{readingStatuses[status as Reading_Status]?.name}</div>
            </Button>
          ) : (
            <>
              <ContentLoader
                uniqueKey='shelf-title-loader'
                speed={2}
                width={160}
                height={40}
                backgroundColor='#f7f2ee'
              >
                <rect rx='5' ry='5' width='160px' height='40' />
              </ContentLoader>
            </>
          )}
        </>
      ) : (
        <Button
          onClick={handleNewUserBookClick}
          variant='outline'
          className='gap-2 rounded-lg font-normal'
        >
          <Icons.save className='h-5 w-5' />
          <div>{readingStatuses[Reading_Status.WantToRead].name}</div>
        </Button>
      )}
    </>
  );
};

export default StatusButton;
