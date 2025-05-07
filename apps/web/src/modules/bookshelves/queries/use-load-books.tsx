import { useGetUserBooksQuery } from '@/graphql/graphql';
import { QueryHookOptions } from '@apollo/client';

interface UseLoadBooksOptions extends QueryHookOptions {
    variables?: Record<string, any>;
}

const useLoadBooks = (options: UseLoadBooksOptions = {}) => {
    const { data: booksData, networkStatus } = useGetUserBooksQuery({
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        errorPolicy: 'all',
        ...options,
    });

    return {
        booksData,
        networkStatus,
    };
};

export default useLoadBooks;
