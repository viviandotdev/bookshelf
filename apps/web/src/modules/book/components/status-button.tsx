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
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ContentLoader from 'react-content-loader';
interface StatusButtonProps {
  userBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({ userBook }) => {
  const statusModal = useBookStatusModal();
  const { data } = useSession();
  const { updateUserBookId, updateStatus, status, userBookId, isInLibrary } =
    useUserBookStore();

  const [bookCountsByUserId] = useBookCountsByUserIdLazyQuery({
    onCompleted: (data) => {
      statusModal.setBookCounts(data.bookCountsByUserId);
    },
  });

  useEffect(() => {
    if (userBook) {
      updateStatus(userBook.status);
    }
  }, [userBook, updateStatus]);

  const handleExistingUserBookClick = async () => {
    if (userBook) {
      statusModal.onOpen();
      statusModal.setIsLoading(true);
      await bookCountsByUserId({
        variables: { userId: data?.user.id },
      });
      statusModal.setIsLoading(false);
    }
  };

  const handleNewUserBookClick = () => {
    console.log('Adding new book to "Want to Read"');
    // create a userbook with status "Want to Read"
  };

  return (
    <>
      {userBook && isInLibrary ? (
        <>
          {status ? (
            <Button
              onClick={handleExistingUserBookClick}
              variant='secondary'
              className='w-[160px] gap-2 rounded-lg font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
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
