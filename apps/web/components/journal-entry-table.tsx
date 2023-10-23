"use client";
import { JournalEntry } from "@/graphql/graphql";
import React from "react";

interface JournalEntryTableProps {
  journalEntires?: JournalEntry[] | undefined;
  loading: boolean;
}

export const JournalEntryTable: React.FC<JournalEntryTableProps> = ({
  journalEntires,
  loading,
}) => {
  if (loading || !journalEntires) return <div>Loading...</div>;
  return (
    <div>
      {journalEntires &&
        journalEntires?.map((journalEntry) => (
          <div key={journalEntry.id}>{journalEntry.id}</div>
        ))}
    </div>
  );
};
export default JournalEntryTable;
