"use client";
import { useJournalEntriesLazyQuery } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE, MONTH } from "@/lib/constants";
import { useEffect } from "react";
import { NetworkStatus } from "@apollo/client";
import { columns } from "./journal-table/columns";
import { DataTable } from "./journal-table/data-table";
interface JournalEntryViewer {}
export const JournalEntryViewer: React.FC<JournalEntryViewer> = () => {
  const [loadEntries, { data: journalData, fetchMore, networkStatus }] =
    useJournalEntriesLazyQuery({
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
        if (data && data.journalEntries && data.journalEntries.length === 0) {
          toast({
            title: "No journal entries are here... yet",
          });
        }
      },
      errorPolicy: "all",
    });

  const journalEntires = journalData?.journalEntries.map((entry) => {
    const date = new Date(entry.dateRead);
    return {
      id: entry.id,
      userBook: entry.userBook,
      monthYear: [MONTH[date.getMonth()], date.getFullYear()].join(" "),
      date: date.getDate(),
      title:
        (entry.userBook && entry.userBook.book && entry.userBook.book.title) ||
        "",
      pagesRead: entry.pagesRead,
      progress: entry.currentPercent,
      notes: entry.readingNotes || "",
      liked: true,
      abandoned: entry.userBook?.status === "ABANDONED",
    };
  });
  const loading = networkStatus === NetworkStatus.loading;
  // process journal entries to table data
  // get all entries from this user

  useEffect(() => {
    const loadData = async () => {
      await loadEntries({
        variables: {
          offset: 0,
          limit: BOOKS_PAGE_SIZE,
        },
      });
    };

    loadData();
  }, [loadEntries]);
  // query journal entries
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-0">
        <DataTable data={journalEntires!} columns={columns} loading={loading} />
      </section>
    </>
  );
};
export default JournalEntryViewer;
