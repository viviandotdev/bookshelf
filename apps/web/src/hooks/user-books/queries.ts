import { useUserBooksLazyQuery } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

const useLoadBooks = () => {
  const [loadBooks, { data: booksData, networkStatus }] = useUserBooksLazyQuery(
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      notifyOnNetworkStatusChange: true,
      onError: (error) => {
        toast({
          title: error.message,
          variant: "destructive",
        });
      },
      onCompleted: (data) => {
        if (data && data.userBooks && data.userBooks.length === 0) {
          toast({
            title: "No books are here... yet",
            variant: "destructive",
          });
        }
      },
      errorPolicy: "all",
    }
  );

  return {
    loadBooks,
    booksData,
    networkStatus,
  };
};

export default useLoadBooks;
