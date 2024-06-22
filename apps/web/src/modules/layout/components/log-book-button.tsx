'use client';
import { Icons } from '@/components/icons';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { buttonVariants } from '@/components/ui/button';
import { Reading_Status, useGetUserBooksLazyQuery } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React from 'react';

interface LogBookButtonProps {}

export const LogBookButton: React.FC<LogBookButtonProps> = ({}) => {
  const logBookModal = useLogBookModal();
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
        logBookModal.setUserBooks(data.getUserBooks?.userBooks);
        logBookModal.setIsLoading(false);
      }
    },

    errorPolicy: 'all',
  });

  return (
    <>
      <button
        onClick={async () => {
          logBookModal.onOpen();

          logBookModal.setIsLoading(true);
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
