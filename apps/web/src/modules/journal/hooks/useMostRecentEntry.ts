import { toast } from "@/hooks/use-toast";
import { useGetMostRecentJournalEntryQuery } from "../../../../graphql/graphql";

export const useGetMostRecentJournalEntry = () => {
  const getMostRecentJournalEntry = async (bookId: string) => {
    const { data, error } = await useGetMostRecentJournalEntryQuery({
      variables: {
        book: {
          id: bookId,
        },
      },
    });

    if (error) {
      toast({
        title: error.message,
        variant: "destructive",
      });
    }

    if (data && !error) {
      return data.getMostRecentJournalEntry;
    }
    return null;
  };

  return { getMostRecentJournalEntry };
};
