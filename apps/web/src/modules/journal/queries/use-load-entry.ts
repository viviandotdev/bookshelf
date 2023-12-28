import { useGetMostRecentJournalEntryLazyQuery } from "@/graphql/graphql";

const useLoadJournalEntry = (setJournalEntry: any) => {
  const [loadEntry] = useGetMostRecentJournalEntryLazyQuery({
    onError: (error) => {
      console.log(error);
    },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      if (data.getMostRecentJournalEntry && setJournalEntry) {
        setJournalEntry({
          originalPage: data.getMostRecentJournalEntry.currentPage || 0,
          originalPercent: data.getMostRecentJournalEntry.currentPercent || 0,
          page: data.getMostRecentJournalEntry.currentPage || 0,
          percent: data.getMostRecentJournalEntry.currentPercent || 0,
        });
      } else if (setJournalEntry) {
        setJournalEntry({
          originalPage: 0,
          originalPercent: 0,
          page: 0,
          percent: 0,
        });
      }
    },
  });
  return loadEntry;
};

export default useLoadJournalEntry;
