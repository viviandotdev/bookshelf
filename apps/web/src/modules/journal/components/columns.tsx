import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { ColumnHeader } from "./column-header";
import { UserBook } from "@/graphql/graphql";
import BookCover from "@/components/book-cover";
import { Icons } from "@/components/icons";
import { useEffect } from "react";
import useUserBookStore from "@/stores/use-user-book-store";
import { useJournalEntryModal } from "../../../components/modals/journal-entry-modal/use-journal-entry-modal";
import Calendar from "./calendar";

export const journalEntrySchema = z.object({
    monthYear: z.string(),
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
        accessorKey: "monthYear",
        header: ({ column }) => <ColumnHeader column={column} title="MONTH" />,
        cell: ({ row }) => {
            const monthYear = row.getValue("monthYear").split(" ") as string[];
            return (
                <Calendar month={monthYear[0]} year={monthYear[1]} />
            );
        },
        enableColumnFilter: true,
    },
    {
        accessorKey: "date",
        header: ({ column }) => <ColumnHeader column={column} title="DATE" />,
        cell: ({ row }) => {
            return (
                <div className="text-center text-beige text-lg px-2">
                    {row.getValue("date")}
                </div>
            );
        },
    },
    {
        accessorKey: "entry",
        header: ({ column }) => <ColumnHeader column={column} title="TITLE" />,
        cell: ({ row }) => {
            const entry = row.getValue("entry") as { id: string, title: string, image: string };
            return (
                <div className="text-left text-lg px-2 flex gap-2">
                    <BookCover size={"xs"} src={entry.image} />
                    <span className={cn(dm_sefif_display.className, "")}>
                        {entry.title}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "progress",
        header: ({ column }) => <ColumnHeader column={column} title="PROGRESS" />,
        cell: ({ row }) => {
            const progress = row.getValue("progress") as { currentPage: number; currentPercent: number };
            return (
                <div className="text-center text-beige text-lg px-2">
                    {progress.currentPercent}%
                </div>
            );
        },
    },
    {
        accessorKey: "pagesRead",
        header: ({ column }) => <ColumnHeader column={column} title="PAGES READ" />,
        cell: ({ row }) => {
            return (
                <div className="text-center text-beige text-lg px-2">
                    {row.getValue("pagesRead")}
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
                    className="text-center text-beige px-2 cursor-pointer"
                    onClick={() => { }}
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
                    className="text-center text-beige px-2 cursor-pointer"
                    onClick={() => {
                        console.log(row.getValue("notes"));
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
                    className="text-center text-beige px-2 cursor-pointer"
                    onClick={() => { }}
                >
                    <Icons.heart
                        className={`h-5 ${liked && "fill-current text-beige-400"}`}
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
            const progress = row.getValue("progress") as { currentPage: number; currentPercent: number };
            const entry = row.getValue("entry") as { id: string, title: string, image: string };
            const readingNotes = row.getValue("notes") as string;
            const monthYear = row.getValue("monthYear").split(" ") as string[];
            const day = row.getValue("date")
            // put this in a global state?
            const abandoned = row.getValue("abandoned");
            const { setJournalEntry, onEdit } = useJournalEntryModal();
            const { setBook, updateStatus } = useUserBookStore();
            useEffect(() => {
                setJournalEntry({
                    originalPage: Number(progress.currentPage),
                    originalPercent: Number(progress.currentPercent),
                    page: Number(progress.currentPage),
                    percent: Number(progress.currentPercent),
                    notes: readingNotes ? readingNotes : "",
                    date: new Date(`${monthYear[0]} ${day}, ${monthYear[1]}`),
                    pagesRead: Number(row.getValue("pagesRead")),
                })
            }, [])


            return (
                <div className="text-center cursor-pointer px-2">
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setBook(userBook.book);
                            updateStatus(abandoned ? "Abandoned" : "Currently Reading",)
                            onEdit(entry.id)
                        }}
                    >
                        <Icons.more className="stroke-1 fill-current stroke-beige cursor-pointer rotate-90 h-6 w-6 text-beige" />
                    </div>
                </div>
            );
        },
    },
];
