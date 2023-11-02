import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { ColumnHeader } from "./column-header";
import { UserBook } from "../../../../graphql/graphql";
import BookCover from "@/components/book-cover";
import BookActions from "@/components/book-actions";
import { Icons } from "@/components/icons";

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
        // header: ({ column }) => <div>Month</div>,
        header: ({ column }) => <ColumnHeader column={column} title="MONTH" />,
        cell: ({ row }) => {
            return (
                <div className="text-center font-bold">
                    <svg
                        width="64"
                        viewBox="0 0 720 631"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M171.439 0.0811201L169.439 0.0881014C156.57 0.13302 146.175 10.6011 146.22 23.4693L146.464 93.3089C146.509 106.177 156.977 116.572 169.845 116.527L171.845 116.52C184.713 116.475 195.108 106.007 195.063 93.1392L194.82 23.2996C194.775 10.4315 184.307 0.0362016 171.439 0.0811201Z"
                            fill="#4F3C2C"
                        />
                        <path
                            d="M496.084 0.0857829L494.004 0.0821526C481.141 0.059703 470.696 10.4688 470.673 23.3315L470.551 93.2114C470.529 106.074 480.938 116.52 493.801 116.542L495.881 116.546C508.743 116.568 519.189 106.159 519.211 93.2963L519.333 23.4164C519.356 10.5537 508.947 0.108233 496.084 0.0857829Z"
                            fill="#4F3C2C"
                        />
                        <path
                            d="M453.292 41.5737H212.452C211.309 41.5737 210.382 42.5005 210.382 43.6437V74.7037C210.382 75.847 211.309 76.7737 212.452 76.7737H453.292C454.435 76.7737 455.362 75.847 455.362 74.7037V43.6437C455.362 42.5005 454.435 41.5737 453.292 41.5737Z"
                            fill="#4F3C2C"
                        />
                        <path
                            d="M624.272 84.8145C620.252 73.9345 608.662 70.0545 597.502 70.1345C576.502 70.2678 555.412 70.3311 534.232 70.3245C533.953 70.3245 533.677 70.269 533.42 70.1612C533.162 70.0534 532.929 69.8955 532.733 69.6965C532.536 69.4975 532.381 69.2615 532.277 69.0019C532.172 68.7424 532.119 68.4646 532.122 68.1845L532.352 43.2145C532.354 42.9527 532.458 42.7024 532.642 42.5173C532.825 42.3323 533.073 42.2271 533.332 42.2245C553.638 41.9645 573.858 41.9711 593.992 42.2445C603.152 42.3645 609.788 42.8411 613.902 43.6745C634.722 47.8745 656.532 62.9245 659.512 85.6645C659.718 87.2645 659.832 93.1145 659.852 103.214C660.078 241.748 660.075 380.278 659.842 518.804C659.822 530.451 659.735 536.864 659.582 538.044C655.772 567.504 623.292 581.804 597.002 581.824C420.748 581.958 244.498 581.981 68.2517 581.894C59.2384 581.888 52.5951 581.488 48.3217 580.694C23.9617 576.154 0.321734 559.624 0.281734 532.434C0.0417343 387.834 -0.0449269 243.234 0.0217398 98.6345C0.0284065 90.5411 0.508409 84.6445 1.46174 80.9445C8.26174 54.5945 37.8017 41.8845 62.7617 41.9845C83.7617 42.0578 105.018 42.1378 126.532 42.2245C126.923 42.2271 127.296 42.3832 127.572 42.6585C127.847 42.9339 128.002 43.3063 128.002 43.6945V67.7045C128.002 69.4311 127.142 70.2978 125.422 70.3045C104.622 70.3778 83.9851 70.2778 63.5117 70.0045C47.7517 69.7945 34.1117 77.0545 34.1417 94.6845C34.3617 237.138 34.3551 379.591 34.1217 522.044C34.1084 530.411 34.4084 535.641 35.0217 537.734C39.6917 553.654 56.7517 553.934 70.2517 553.934C247.085 553.974 423.918 553.891 600.752 553.684C607.992 553.678 614.158 551.514 619.252 547.194C624.882 542.424 625.792 536.804 625.782 529.014C625.715 441.654 625.608 354.294 625.462 266.934C625.442 254.681 625.455 242.431 625.502 230.184C625.662 186.191 625.748 142.198 625.762 98.2045C625.768 91.9778 625.272 87.5145 624.272 84.8145Z"
                            fill="#4F3C2C"
                        />
                        <path
                            d="M684.392 154.114C681.052 145.684 672.962 142.354 664.472 140.744C664.062 140.665 663.693 140.445 663.428 140.121C663.163 139.798 663.019 139.392 663.022 138.974L663.162 114.934C663.164 114.804 663.191 114.674 663.244 114.554C663.296 114.435 663.372 114.326 663.468 114.237C663.563 114.147 663.675 114.078 663.798 114.033C663.921 113.987 664.052 113.968 664.182 113.974C685.822 115.034 711.392 127.494 718.162 149.704C720.222 156.454 719.862 164.884 719.872 172.184C720.032 305.018 719.962 437.851 719.662 570.684C719.642 581.151 719.352 587.801 718.792 590.634C715.532 607.024 702.022 618.974 686.622 624.814C677.216 628.388 666.759 630.168 655.252 630.154C481.752 630.021 308.252 629.994 134.752 630.074C107.612 630.084 76.6424 616.994 72.0024 587.234C71.9635 586.986 71.9789 586.731 72.0473 586.489C72.1158 586.246 72.2357 586.022 72.399 585.83C72.5623 585.638 72.7651 585.484 72.9935 585.378C73.2219 585.271 73.4705 585.216 73.7224 585.214C82.1824 585.161 90.7757 585.144 99.5024 585.164C101.362 585.171 103.182 585.424 104.962 585.924C105.117 585.971 105.258 586.053 105.373 586.165C105.488 586.276 105.573 586.413 105.622 586.564C110.522 601.784 123.442 603.394 137.252 603.394C312.586 603.328 487.919 603.298 663.252 603.304C667.232 603.304 670.922 601.904 674.622 600.134C680.529 597.301 684.182 592.961 685.582 587.114C685.982 585.454 686.176 580.151 686.162 571.204C686.042 436.784 685.946 302.364 685.872 167.944C685.866 161.198 685.372 156.588 684.392 154.114Z"
                            fill="#4F3C2C"
                        />
                        <text
                            x="46%"
                            y="42%"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            font-size="140"
                            fill="black"
                        >
                            OCT
                        </text>
                        <text
                            x="46%"
                            y="68%"
                            dominant-baseline="middle"
                            text-anchor="middle"
                            font-size="110"
                            fill="black"
                        >
                            2023
                        </text>
                    </svg>
                </div>
            );
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
        header: ({ column }) => <ColumnHeader column={column} title="PAGES" />,
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
                    onClick={() => { }}
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
                        <BookActions
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
