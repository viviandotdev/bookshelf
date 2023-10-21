"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import useUserBook from "@/hooks/use-user-book";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import BookCover from "../book-cover";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calender";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCreateJournalEntryMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";

interface AddToShelfModalProps {}

export const JouranlEntryModal: React.FC<AddToShelfModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
  const [createJournalEntry] = useCreateJournalEntryMutation();
  const [unit, setUnit] = useState<"pages" | "percent">("pages");
  const [error, setError] = useState<string>("");
  const userBook = useUserBook();
  const [currentProgress, setCurrentProgress] = useState({
    page: 20,
    percent: 30,
  });
  const inputRef = useRef(null);

  //   get the most recent jounral entry
  //   check the input must be greater than the most recent journal entry
  const displayFormSchema = z
    .object({
      notes: z.string().max(160).optional(),
      mark_abandoned: z.boolean().default(false),
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
          message: "Either current page.",
          code: z.ZodIssueCode.custom,
          path: ["current_page"],
        });
        ctx.addIssue({
          message: "Either a percent page.",
          code: z.ZodIssueCode.custom,
          path: ["current_percent"],
        });
      }
    });

  // TODO: Additional validation
  // The value entered is less than the previous value
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

  useEffect(() => {
    form.reset({
      notes: "",
      current_percent: "",
      current_page: "",
      date_read: new Date(),
    });
  }, [userBook.data]);

  type DisplayFormValues = z.infer<typeof displayFormSchema>;

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues: useMemo(() => {
      return {
        notes: "",
        current_page: "",
        current_percent: "",
        date_read: new Date(),
      };
    }, [userBook.data]),
  });
  async function onSubmit(data: DisplayFormValues) {
    let currentPage;
    let currentPercent;
    const totalPages = userBook.data && userBook.data.pageNum;
    if (unit == "pages" && data.current_page) {
      currentPage = parseInt(data.current_page);
      currentPercent = totalPages
        ? Math.round((parseInt(data.current_page) / totalPages) * 100)
        : 0;
    } else if (unit == "percent" && data.current_percent) {
      currentPercent = parseInt(data.current_percent);
      currentPage = Math.round(
        totalPages ? currentPercent * 0.01 * totalPages : 0
      );
    }

    await createJournalEntry({
      variables: {
        data: {
          readingNotes: data.notes,
          currentPage: currentPage,
          currentPercent: currentPercent,
        },
        book: {
          id: userBook.data.id,
        },
      },
      onError(error) {
        toast({
          title: error.message,
          variant: "destructive",
        });
      },
      onCompleted(data) {
        toast({
          title: "Sucessfylly create journal entry",
        });
      },
    });
    console.log(data);
    jouranlEntryModal.onClose();
  }

  const onChange = (open: boolean) => {
    if (!open) {
      jouranlEntryModal.onClose();
    }
  };

  return (
    <Dialog open={jouranlEntryModal.isOpen} onOpenChange={onChange}>
      <DialogContent className="flex min-w-[720px]">
        <div className="flex gap-8 min-w-full">
          <BookCover />
          <div className="flex text-sm flex-col w-[fill-available] justify-between">
            {formHeader()}
            <Form {...form}>
              <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                {formBody()}
                {error && (
                  <p
                    className={cn(
                      "pt-2 pb-1 text-[0.8rem] font-medium text-destructive"
                    )}
                  >
                    {error}
                  </p>
                )}
                {formFooter()}
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
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
                    <PopoverContent className="w-auto p-0" align="start">
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

          {unit === "pages" ? (
            <>
              <FormField
                control={form.control}
                name="current_page"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        autoFocus
                        className="h-7 px-2 w-[48px] py-4 text-xs "
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
            </>
          ) : (
            <>
              <FormField
                control={form.control}
                name="current_percent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        autoFocus
                        className="h-7 px-2 w-[48px] py-4 text-xs "
                        onKeyDown={handleKeyPress}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage setError={setError} />
                  </FormItem>
                )}
              />
              <div>% done</div>
            </>
          )}
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
          <Button variant="outline" onClick={jouranlEntryModal.onClose}>
            {jouranlEntryModal.isEdit ? "Delete" : "Close"}
          </Button>
          <Button type="submit" variant="default">
            Save
          </Button>
        </div>
      </div>
    );
  }
  function formHeader() {
    return (
      <DialogHeader>
        <DialogTitle className="text-muted-foreground font-light">
          I read...
        </DialogTitle>
        <DialogDescription className="text-black font-medium">
          {userBook.data.title}
        </DialogDescription>{" "}
      </DialogHeader>
    );
  }
  function unitButton(type: "pages" | "percent") {
    return (
      <Button
        variant={`secondary`}
        className={`${unit === type && "bg-primary text-white"}`}
        onClick={(e) => {
          e.preventDefault();
          if (type == "pages") {
            form.reset({
              current_percent: "",
            });
          } else {
            form.reset({
              current_page: "",
            });
          }

          setUnit(type);
        }}
      >
        {type == "pages" ? "#" : "%"}
      </Button>
    );
  }
};
