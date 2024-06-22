import { useGetUserBooksLazyQuery } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { useSession } from 'next-auth/react';

const useLoadBooks = () => {
  const [loadBooks, { data: booksData, networkStatus }] =
    useGetUserBooksLazyQuery({
      fetchPolicy: 'cache-and-network',
      // nextFetchPolicy: "cache-first",
      // cache-only does not refetch when updating cache
      nextFetchPolicy: 'cache-only',
      notifyOnNetworkStatusChange: true,
      onError: (error) => {
        // toast({
        //   title: error.message,
        //   variant: 'destructive',
        // });
      },
      onCompleted: (data) => {
        if (
          data &&
          data.getUserBooks.userBooks &&
          data.getUserBooks.userBooks?.length === 0
        ) {
          console.log('no books loaded');
        }
      },

      errorPolicy: 'all',
    });

  return {
    loadBooks,
    booksData,
    networkStatus,
  };
};

export default useLoadBooks;
