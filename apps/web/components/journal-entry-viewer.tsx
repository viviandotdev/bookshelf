"use client";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { useJournalEntriesLazyQuery } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import * as R from "ramda";
import { useEffect } from "react";
import { NetworkStatus } from "@apollo/client";
import JournalEntryTable from "@/components/journal-entry-table";

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

  const journalEntires = journalData && journalData.journalEntries;
  const loading = networkStatus === NetworkStatus.loading;
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
