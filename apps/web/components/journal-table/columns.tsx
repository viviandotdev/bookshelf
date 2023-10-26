import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import BookCover from "../book-cover";
import { Icons } from "../icons";
import { ColumnHeader } from "./column-header";
import {
  UserBookQuery,
  UserBookDocument,
  Book,
  UserBookShelves,
  UserBook,
} from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth/session";
import BookOperations from "../book-operations";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export const journalEntrySchema = z.object({
  month: z.string(),
  date: z.number().int().positive().min(1).max(31),
  title: z.string(),
  pagesRead: z.number().int().positive(),
  progress: z.number().int().positive(),
  notes: z.string(),
  liked: z.boolean(),
  abandoned: z.boolean(),
  userBook: z.object({
    id: z.string(),
    status: z.string(),
    shelves: z.array(
      z.object({
        shelf: z.object({
          id: z.string(),
          name: z.string(),
          userId: z.string(),
        }),
        shelfId: z.string(),
      })
    ),
    book: z.object({
      id: z.string(),
      title: z.string(),
      coverImage: z.string().nullable(),
    }),
  }),
});

type JournalEntryValues = z.infer<typeof journalEntrySchema>;

export const columns: ColumnDef<JournalEntryValues>[] = [
  {
    accessorKey: "month",
    // header: ({ column }) => <div>Month</div>,
    header: ({ column }) => <ColumnHeader column={column} title="MONTH" />,
    cell: ({ row }) => {
      return <div className="text-left px-2">{row.getValue("month")}</div>;
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "date",
    header: ({ column }) => <ColumnHeader column={column} title="DATE" />,
    cell: ({ row }) => {
      return (
        <div className="text-center text-primary text-lg px-2">
          {row.getValue("date")}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => <ColumnHeader column={column} title="TITLE" />,
    cell: ({ row }) => {
      return (
        <div className="text-left text-lg px-2 flex gap-2">
          <BookCover size={"sm"} src={null} />
          <span className={cn(dm_sefif_display.className, "")}>
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "pagesRead",
    header: ({ column }) => <ColumnHeader column={column} title="PAGES READ" />,
    cell: ({ row }) => {
      return (
        <div className="text-center text-primary text-lg px-2">
          {row.getValue("pagesRead")}
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: ({ column }) => <ColumnHeader column={column} title="PROGRESS" />,
    cell: ({ row }) => {
      return (
        <div className="text-center text-primary text-lg px-2">
          {row.getValue("progress")}%
        </div>
      );
    },
  },
  {
    accessorKey: "abandoned",
    header: ({ column }) => <ColumnHeader column={column} title="ABANDONED" />,
    cell: ({ row }) => {
      const abandoned = row.getValue("abandoned");
      return (
        <div
          className="text-center text-primary px-2 cursor-pointer"
          onClick={() => {}}
        >
          {abandoned! && <Icons.abondoned className="h-5" />}
        </div>
      );
    },
  },
  {
    accessorKey: "notes",
    header: ({ column }) => <ColumnHeader column={column} title="NOTES" />,
    cell: ({ row }) => {
      const showNotes = (row.getValue("notes") as String).length > 0;
      return (
        <div
          className="text-center text-primary px-2 cursor-pointer"
          onClick={() => {
            console.log("open notes");
          }}
        >
          {showNotes && <Icons.notes className="h-5" />}
        </div>
      );
    },
  },
  {
    accessorKey: "liked",
    header: ({ column }) => <ColumnHeader column={column} title="LIKED" />,
    cell: ({ row }) => {
      const liked = row.getValue("liked");

      return (
        <div
          className="text-center text-primary px-2 cursor-pointer"
          onClick={() => {}}
        >
          <Icons.heart
            className={`h-5 ${liked && "fill-current text-accent"}`}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "userBook",
    header: ({ column }) => <ColumnHeader column={column} title="EDIT" />,
    cell: ({ row }) => {
      const userBook = row.getValue("userBook") as UserBook;
      return (
        <div className="text-center cursor-pointer px-2">
          {userBook && (
            <BookOperations
              bookStatus={userBook.status ?? undefined}
              book={userBook.book ?? undefined}
              shelves={userBook?.shelves ?? undefined}
            />
          )}
        </div>
      );
    },
  },
];
