import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { BookData } from "@/types/interfaces";
import { getBooks } from "../api/getBooks";

const useBooksSearch = (search: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<BookData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (search !== "") {
          const books = await getBooks(search);
          setResults(books);
        } else {
          setResults(null);
        }
      } catch (error) {
        toast({
          title: "Invalid Search",
          description: "There was an error with your search.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return { isLoading, results };
};

export default useBooksSearch;
