import { useUserBooksLazyQuery } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

const useLoadBooks = () => {
    const [loadBooks, { data: booksData, networkStatus }] = useUserBooksLazyQuery(
        {
            fetchPolicy: "cache-and-network",
            // nextFetchPolicy: "cache-first",
            // cache-only does not refetch when updating cache
            nextFetchPolicy: "cache-only",
            notifyOnNetworkStatusChange: true,
            onError: (error) => {
                console.log("here")
                toast({
                    title: error.message,
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                if (data && data.userBooks && data.userBooks.length === 0) {
                    console.log("no books loaded");
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
