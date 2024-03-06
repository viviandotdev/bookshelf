import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { ColumnHeader } from './column-header';
import { UserBook } from '@/graphql/graphql';
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { useEffect } from 'react';
import useUserBookStore from '@/stores/use-user-book-store';
import { useJournalEntryModal } from '../../../components/modals/journal-entry-modal/use-journal-entry-modal';
import { JournalEntryValues } from '../schema';
import { Progress } from '@/components/ui/progress';
import { Dot } from 'lucide-react';


export const columns: ColumnDef<JournalEntryValues>[] = [
    {
        accessorKey: 'date',
        header: ({ column }) => <ColumnHeader column={column} title='DATE' />,
        cell: ({ row }) => {
            const date = row.getValue('date') as { month: string; year: number; day: number };
            return (
                <div className='flex w-max flex-col px-2 text-base'>
                    <div className="font-semibold">
                        {date.month} {date.day}
                    </div>
                    <div className="text-gray-500 font-medium">
                        {date.year}
                    </div>

                </div>
            );
        },
    },
    {
        accessorKey: 'entry',
        header: ({ column }) => <ColumnHeader column={column} title='TITLE' />,
        cell: ({ row }) => {
            const entry = row.getValue('entry') as {
                id: string;
                author: string;
                title: string;
                image: string;
            };
            return (
                <div className='flex gap-2 pl-2 text-left w-full '>
                    <div className="border-md overflow-hidden mr-2">
                        <BookCover size={'xs'} src={entry.image} />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(dm_sefif_display.className, 'max-w-[24rem] truncate text-2xl')}>
                            {entry.title}
                        </span>
                        <span className="text-gray-500">by {entry.author}</span>
                    </div>

                </div>
            );
        },
    },
    {
        accessorKey: 'progress',
        header: ({ column }) => <ColumnHeader column={column} title='PROGRESS' />,
        cell: ({ row }) => {
            const progress = row.getValue('progress') as {
                currentPage: number;
                currentPercent: number;
                pagesRead: number;
                totalPages: number;
            };
            const status = row.getValue('status') as string;
            return (
                <div className="flex px-2 flex-col gap-[-2px] min-w-[19em] text-sm">
                    <div className="font-bold">
                        {status}
                    </div>
                    <div className='flex min-w-36 items-center justify-center text-center gap-2 text-beige'>
                        <Progress className="items-center" value={progress.currentPercent} />
                        <div className="flex gap-0.5 items-center">{progress.currentPercent}%</div>

                    </div>
                    <div className='flex text-gray-500 w-max items-center text-xs font-medium'>
                        <div>{progress.pagesRead} pages read</div>
                        <Dot className="h-5 w-5" />
                        <div>{progress.currentPage} / {progress.totalPages} pages</div>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: 'notes',
        header: ({ column }) => <ColumnHeader column={column} title='NOTES' />,
        cell: ({ row }) => {
            const showNotes = (row.getValue('notes') as String).length > 0;
            return (
                <div
                    className='cursor-pointer px-5 text-center text-beige'
                    onClick={() => {
                        console.log(row.getValue('notes'));
                    }}
                >
                    {showNotes && <Icons.notes className='h-5' />}
                </div>
            );
        },
    },
    {
        accessorKey: 'liked',
        header: ({ column }) => <ColumnHeader column={column} title='LIKED' />,
        cell: ({ row }) => {
            const liked = row.getValue('liked');

            return (
                <div
                    className='flex cursor-pointer px-4 text-center text-beige'
                    onClick={() => { }}
                >
                    <Icons.heart
                        className={`h-5 items-center ${liked && 'fill-current text-red-400'}`}
                    />
                </div>
            );
        },
    },
    {
        accessorKey: 'status',
        header: ({ column }) => <ColumnHeader column={column} title='DNF' />,
        cell: ({ row }) => {
            const dnf = row.getValue('status') === 'Did Not Finish';
            return (
                <div
                    className='cursor-pointer px-2 text-center text-beige'
                    onClick={() => { }}
                >
                    {dnf! && <Icons.abondoned className='h-5' />}
                </div>
            );
        },
    },

    {
        accessorKey: 'userBook',
        header: ({ column }) => <ColumnHeader column={column} title='EDIT' />,
        cell: ({ row }) => {
            const userBook = row.getValue('userBook') as UserBook;
            const progress = row.getValue('progress') as {
                currentPage: number;
                currentPercent: number;
                pagesRead: number;
            };
            const entry = row.getValue('entry') as {
                id: string;
                title: string;
                image: string;
            };
            const readingNotes = row.getValue('notes') as string;
            const date = row.getValue('date') as { month: string; year: number; day: number };
            // put this in a global state?
            const dnf = row.getValue('status') == "Did Not Finish";
            const { setJournalEntry, onEdit } = useJournalEntryModal();
            const { setBook, updateStatus } = useUserBookStore();
            useEffect(() => {
                setJournalEntry({
                    originalPage: Number(progress.currentPage),
                    originalPercent: Number(progress.currentPercent),
                    page: Number(progress.currentPage),
                    percent: Number(progress.currentPercent),
                    notes: readingNotes ? readingNotes : '',
                    date: new Date(`${date.month} ${date.day}, ${date.year}`),
                    pagesRead: Number(progress.pagesRead),
                });
            }, []);

            return (
                <div className="flex gap-4">
                    <div
                        className='min-w-28 cursor-pointer px-2 text-center text-base text-beige'
                        onClick={() => { }}
                    >
                        View Activity
                    </div>
                    <div className='cursor-pointer px-2 text-center'>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setBook(userBook.book);
                                updateStatus(dnf ? 'Did Not Finish' : 'Currently Reading');
                                onEdit(entry.id);
                            }}
                        >
                            <Icons.more className='h-6 w-6  cursor-pointer fill-current stroke-beige stroke-1 text-beige' />
                        </div>

                    </div>

                </div>

            );
        },
    },
];
