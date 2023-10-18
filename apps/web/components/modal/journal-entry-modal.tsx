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

interface AddToShelfModalProps {}

export const JouranlEntryModal: React.FC<AddToShelfModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
  const [error, setError] = useState<string>("");
  const userBook = useUserBook();
  const inputRef = useRef(null);
  const displayFormSchema = z.object({
    notes: z.string().max(160).optional(),
    mark_abandoned: z.boolean().default(false),
    current_page: z
      .string({
        required_error: "A current page and total pages number is required",
      })
      .refine((val) => val.length > 0 && !Number.isNaN(parseInt(val, 10)), {
        message: "Please enter a valid current page and total pages number",
      }),
    total_pages: z
      .string({
        required_error: "A current page and total pages number is required",
      })
      .refine((val) => val.length > 0 && !Number.isNaN(parseInt(val, 10)), {
        message: "Please enter a valid current page and total pages number",
      }),
    date_read: z.date({
      required_error: "A date of birth is required.",
    }),
  });
  // TODO: Additional validation
  // The value entered is less than the previous value
  // The value entered is greater than the total number of pages in the book
  // The value entered exceeds the maximum values
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
    console.log(error);
  }, [error]);

  useEffect(() => {
    setError("");
    if (jouranlEntryModal.isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [jouranlEntryModal.isOpen]);

  useEffect(() => {
    form.reset({
      notes: "",
      total_pages:
        userBook.data &&
        userBook.data.pageNum &&
        userBook.data.pageNum!.toString()
          ? userBook.data.pageNum!.toString()
          : "",
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
        total_pages:
          userBook.data &&
          userBook.data.pageNum &&
          userBook.data.pageNum!.toString()
            ? userBook.data.pageNum!.toString()
            : "",
        date_read: new Date(),
      };
    }, [userBook.data]),
  });
  async function onSubmit(data: DisplayFormValues) {
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
          <div className="text-primary">Currently on </div>
          <FormField
            control={form.control}
            name="current_page"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
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
          <FormField
            control={form.control}
            name="total_pages"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-7 px-2 w-[48px] py-4 text-xs"
                    onKeyDown={handleKeyPress}
                    {...field}
                  />
                </FormControl>

                <FormMessage setError={setError} />
              </FormItem>
            )}
          />
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
            //   disabled={loading}
            variant="outline"
            onClick={jouranlEntryModal.onClose}
          >
            {jouranlEntryModal.isEdit ? "Delete" : "Close"}
          </Button>
          <Button
            type="submit"
            //   disabled={loading}
            variant="default"
          >
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
};
