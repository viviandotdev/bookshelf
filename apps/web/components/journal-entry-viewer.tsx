"use client";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { useJournalEntriesLazyQuery } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE, MONTH } from "@/lib/constants";
import * as R from "ramda";
import { useEffect } from "react";
import { NetworkStatus } from "@apollo/client";
import JournalEntryTable from "@/components/journal-entry-table";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
interface JournalEntryViewer {}

export const journalEntrySchema = z.object({
  month: z.string(),
  date: z.number().int().positive().min(1).max(31),
  title: z.string(),
  pagesRead: z.number().int().positive(),
  progress: z.number().int().positive(),
  notes: z.string(),
  liked: z.boolean(),
  abandoned: z.boolean(),
});

export const columns: ColumnDef<z.infer<typeof journalEntrySchema>>[] = [
  {
    accessorKey: "month",
    header: "MONTH",
  },
  {
    accessorKey: "date",
    header: "DATE",
  },
  {
    accessorKey: "title",
    header: "TITLE",
  },
  {
    accessorKey: "pagesRead",
    header: "PAGES READ",
  },
  {
    accessorKey: "progress",
    header: "PROGRESS",
  },
  {
    accessorKey: "notes",
    header: "NOTES",
  },
  {
    accessorKey: "liked",
    header: "LIKED",
  },
  {
    accessorKey: "abandoned",
    header: "ABANDONED",
  },
];

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
      month: MONTH[date.getMonth()],
      date: date.getDate(),
      title: entry.userBook && entry.userBook.book && entry.userBook.book.title,
      pagesRead: entry.pagesRead,
      progress: entry.currentPercent,
      notes: entry.readingNotes,
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
        <JournalEntryTable {...{ journalEntires, loading }} />
      </section>
    </>
  );
};
export default JournalEntryViewer;
