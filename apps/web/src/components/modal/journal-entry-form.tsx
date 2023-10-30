"use client";
import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from "react";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calender";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useUserBook from "@/hooks/use-user-book";
import { useCreateJournalEntryMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import useUpdateUserBook from "@/actions/updateUserBook";

type progressTypes = {
    originalPage: number;
    originalPercent: number;
    page: number;
    percent: number;
};
interface JournalEntryFormProps {
    currentProgress: progressTypes;
    setCurrentProgress: Dispatch<SetStateAction<progressTypes>>;
    bookStatus: string;
}

export const JournalEntryForm: React.FC<JournalEntryFormProps> = ({
    currentProgress,
    setCurrentProgress,
    bookStatus,
}) => {
    const jouranlEntryModal = useJouranlEntryModal();
    const userBook = useUserBook();
    const [createJournalEntry] = useCreateJournalEntryMutation();
    const [error, setError] = useState<string>("");
    const [unit, setUnit] = useState<"pages" | "percent">("pages");
    const [status, setStatus] = useState(bookStatus);
    const { updateUserBook } = useUpdateUserBook();
    useEffect(() => {
        form.reset({
            notes: "",
            current_percent: currentProgress.percent.toString() || "",
            current_page: currentProgress.page.toString() || "",
            date_read: new Date(),
            mark_abandoned: status === "ABANDONED",
        });
    }, [userBook.data, currentProgress, status]);

    const handleKeyPress = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        // Allow only numbers (0-9) or Backspace key or Tab key
        // Not backspace and noot number prevent the action
        if (!/^\d$/.test(keyValue) && keyCode !== 8 && keyCode !== 9) {
            event.preventDefault();
        }
        // skip prevent default
    };

    const displayFormSchema = z
        .object({
            notes: z.string().max(160).optional(),
            mark_abandoned: z.boolean(),
            current_page: z
                .string()
                .refine(
                    (val) => {
                        // unit is pages and valid if value is less than or equal to the total number of pages in the book
                        return parseInt(val, 10) >= currentProgress.page;
                    },
                    {
                        message: `The value is less than the previous value`,
                    }
                )
                .refine(
                    (val) => {
                        // unit is pages and valid if value is less than or equal to the total number of pages in the book
                        return (
                            parseInt(val, 10) <=
                            (userBook.data && userBook.data.pageNum
                                ? userBook.data.pageNum
                                : 0)
                        );
                    },
                    {
                        message: `The value entered is greater than the total number of pages in the book`,
                    }
                )
                .optional()
                .or(z.literal("")),
            date_read: z.date(),
            current_percent: z
                .string()
                .refine(
                    (val) => {
                        // unit is pages and valid if value is less than or equal to the total number of pages in the book
                        return parseInt(val, 10) >= currentProgress.percent;
                    },
                    {
                        message: `The value is less than the previous value`,
                    }
                )
                .refine(
                    (val) => {
                        return parseInt(val, 10) <= 100;
                    },
                    {
                        message: `Enter a value less than or equal to 100`,
                    }
                )
                .optional()
                .or(z.literal("")),
        })
        .superRefine((values, ctx) => {
            if (!values.current_page && !values.current_percent) {
                ctx.addIssue({
                    message: "Please enter your progress",
                    code: z.ZodIssueCode.custom,
                    path: ["current_page"],
                });
                ctx.addIssue({
                    message: "Please enter your progress",
                    code: z.ZodIssueCode.custom,
                    path: ["current_percent"],
                });
            }
        });
    type DisplayFormValues = z.infer<typeof displayFormSchema>;
    const form = useForm<DisplayFormValues>({
        resolver: zodResolver(displayFormSchema),
        defaultValues: useMemo(() => {
            return {
                notes: "",
                current_page: currentProgress.page.toString() || "",
                current_percent: currentProgress.percent.toString() || "",
                date_read: new Date(),
                mark_abandoned: status === "ABANDONED",
            };
        }, [userBook.data, currentProgress, status]),
    });

    async function onSubmit(values: DisplayFormValues) {
        let currentPage;
        let currentPercent;
        const totalPages = userBook.data && userBook.data.pageNum;
        if (unit == "pages" && values.current_page) {
            currentPage = parseInt(values.current_page);
            currentPercent = totalPages
                ? Math.round((parseInt(values.current_page) / totalPages) * 100)
                : 0;
        } else if (unit == "percent" && values.current_percent) {
            // if unit is percent and current percent is not empty
            currentPercent = parseInt(values.current_percent);
            currentPage = Math.round(
                totalPages ? currentPercent * 0.01 * totalPages : 0
            );
        }
        if (values.mark_abandoned) {
            await updateUserBook(userBook.data!.id, "ABANDONED");
            setStatus("ABANDONED");
        }
        if (
            currentPage != currentProgress.originalPage ||
            currentPercent != currentProgress.originalPercent
        ) {
            await createJournalEntry({
                variables: {
                    data: {
                        readingNotes: values.notes,
                        currentPage: currentPage!,
                        pagesRead: currentPage! - currentProgress.originalPage,
                        currentPercent: currentPercent!,
                    },
                    book: {
                        id: userBook.data.id,
                    },
                },
                onError(error) {
                    toast({
                        title: error.message,
                    });
                },
                onCompleted(data) {
                    setCurrentProgress({
                        originalPage: data.createJournalEntry.currentPage || 0,
                        originalPercent: data.createJournalEntry.currentPercent || 0,
                        page: data.createJournalEntry.currentPage || 0,
                        percent: data.createJournalEntry.currentPercent || 0,
                    });
                    toast({
                        title: "Sucessfylly create journal entry",
                    });
                },
            });
        }

        jouranlEntryModal.onClose();
    }
    return (
        <div>
            <Form {...form}>
                <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                    {formBody()}
                    {error && (
                        <p
                            className={"pt-2 pb-1 text-[0.8rem] font-medium text-destructive"}
                        >
                            {error}
                        </p>
                    )}
                    {formFooter()}
                </form>
            </Form>
        </div>
    );

    function formBody() {
        return (
            <div className="pt-2">
                <div className="flex gap-16">
                    <div className="flex items-center gap-2">
                        <div className="text-primary items-center">Read on</div>
                        <FormField
                            control={form.control}
                            name="date_read"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="tag"
                                                    size="xs"
                                                    className={cn(
                                                        "text-left font-normal text-black cursor-pointer py-0",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span className="text-black">Pick Date</span>
                                                    )}
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0 bg-white rounded-xl border-2"
                                            align="start"
                                        >
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage setError={setError} />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="mark_abandoned"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Mark as adandoned</FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem className="pt-3">
                            <FormControl>
                                <Textarea
                                    placeholder="Write notes here..."
                                    className="resize-none pt-2"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage setError={setError} />
                        </FormItem>
                    )}
                />
                <div className="flex items-center gap-2 pt-3">
                    <div className="text-primary">
                        Currently
                        {unit == "pages" && <span> on</span>}
                    </div>
                    <div>
                        <div
                            className={`${unit == "pages" ? "block" : "hidden"
                                } flex gap-2 items-center`}
                        >
                            <FormField
                                control={form.control}
                                name="current_page"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                autoComplete="off"
                                                autoFocus
                                                className={` ${unit == "pages" ? "block" : "hidden"
                                                    } h-7 px-2 w-[48px] py-4 text-xs `}
                                                onKeyDown={handleKeyPress}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage setError={setError} />
                                    </FormItem>
                                )}
                            />
                            <div className="text-primary">of</div>
                            {userBook.data &&
                                userBook.data.pageNum &&
                                userBook.data.pageNum!.toString() && (
                                    <div className="text-primary font-bold">
                                        {userBook.data.pageNum!.toString()}
                                    </div>
                                )}
                        </div>

                        <div
                            className={`${unit == "percent" ? "block" : "hidden"
                                } flex gap-2 items-center`}
                        >
                            <FormField
                                control={form.control}
                                name="current_percent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                autoComplete="off"
                                                autoFocus
                                                className={` h-7 px-2 w-[48px] py-4 text-xs `}
                                                onKeyDown={handleKeyPress}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage setError={setError} />
                                    </FormItem>
                                )}
                            />
                            <div>% done</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start gap-0 bg-secondary rounded-xl">
                            {unitButton("pages")}
                            {unitButton("percent")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    function formFooter() {
        return (
            <div className="flex justify-between">
                <div className="flex items-center cursor-pointer text-primary font-semibold">
                    I'm finished!
                </div>
                <div className="space-x-2 flex items-center justify-end">
                    <Button
                        variant="outline"
                        onClick={(e) => {
                            e.preventDefault();
                            jouranlEntryModal.onClose();
                        }}
                    >
                        {jouranlEntryModal.isEdit ? "Delete" : "Close"}
                    </Button>
                    <Button type="submit" variant="default">
                        Save
                    </Button>
                </div>
            </div>
        );
    }
    function unitButton(type: "pages" | "percent") {
        return (
            <Button
                variant={`secondary`}
                className={`${unit === type && "bg-primary text-white"}`}
                onClick={(e) => {
                    e.preventDefault();
                    form.reset({
                        current_percent: currentProgress.percent.toString() || "",
                        current_page: currentProgress.page.toString() || "",
                    });
                    setUnit(type);
                }}
            >
                {type == "pages" ? "#" : "%"}
            </Button>
        );
    }
};
export default JournalEntryForm;
