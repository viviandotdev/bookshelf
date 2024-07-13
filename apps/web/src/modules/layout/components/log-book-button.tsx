'use client';
import { Icons } from '@/components/icons';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import useProgressModal from '@/components/modals/progress-modal.tsx/use-progress-modal';
import { buttonVariants } from '@/components/ui/button';
import {
  ReadDate,
  Reading_Status,
  useGetUserBooksLazyQuery,
  UserBook,
  useReadDatesLazyQuery,
} from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
interface LogBookButtonProps {}

export const LogBookButton: React.FC<LogBookButtonProps> = ({}) => {
  const { setUserBooks, userBooks, onOpen } = useLogBookModal();
  const { storeReadDates } = useProgressModal();
  const [loadReadDates] = useReadDatesLazyQuery({
    fetchPolicy: 'cache-and-network',
    onCompleted: async ({ readDates }) => {
      await storeReadDates(readDates as ReadDate[]);
    },
  });

  const [loadBooks] = useGetUserBooksLazyQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      toast({
        title: error.message,
        variant: 'destructive',
      });
    },
    onCompleted: (data) => {
      if (data && data.getUserBooks.userBooks) {
        setUserBooks(data.getUserBooks?.userBooks as UserBook[]);
      }
    },
    errorPolicy: 'all',
  });

  useEffect(() => {
    const loadData = async () => {
      await loadBooks({
        variables: {
          offset: 0,
          limit: BOOKS_PAGE_SIZE,
          where: {
            status: {
              equals: Reading_Status.Reading,
            },
          },
        },
      });
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      await loadReadDates({
        variables: {
          userBookIds: userBooks.map((userBook) => userBook.id),
          active: true,
        },
      });
    };
    loadData();
  }, [userBooks]);
  return (
    <>
      <button
        onClick={async () => {
          onOpen();
        }}
        className={cn(
          buttonVariants({ variant: 'pill', size: 'xs' }),
          'h-8 justify-center rounded-sm pl-2 pr-3'
        )}
      >
        <Icons.plus className='mr-1 h-4 w-4' />
        Log
      </button>
    </>
  );
};
export default LogBookButton;
