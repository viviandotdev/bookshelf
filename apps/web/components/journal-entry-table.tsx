"use client";
import { JournalEntry } from "@/graphql/graphql";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
interface JournalEntryTableProps {
  journalEntires?: JournalEntry[] | undefined;
  loading: boolean;
}
// process journal entries to table data

//month
//day
//book
//pages read
// date started
//progress
//notes
//like
//adandoned
//edit
export const columns: ColumnDef<JournalEntry>[] = [];
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
