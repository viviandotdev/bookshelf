"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Checkbox } from "../ui/checkbox";
import { toast } from "@/hooks/use-toast";
import useShelves from "@/hooks/use-shelves";
import { Button } from "../ui/button";
import useUserBook from "@/hooks/use-user-book";
import { useUpdateUserBookMutation } from "@/graphql/graphql";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { title } from "process";
import BookCover from "../book-cover";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calender";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

interface JournalEntryModalProps {}

export const JouranlEntryModal: React.FC<JournalEntryModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
  const { shelves, incrementShelfCount } = useShelves();
  const userBook = useUserBook();
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const test = 0;

  const jouranlEntryFormSchema = z.object({
    notes: z.string().max(160).min(4),
    start_page: z
      .number({
        required_error: "A start page is required",
        invalid_type_error: "A start page must be a number",
      })
      .int()
      .gte(test),
    end_page: z.number().int(),
    date_read: z.date({
      required_error: "A date is required",
    }),
    mark_abandoned: z.boolean().default(false),
    mark_finished: z.boolean().default(false),
  });

  type DisplayFormValues = z.infer<typeof displayFormSchema>;

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(jouranlEntryFormSchema),
    defaultValues: useMemo(() => {
      return {
        shelves: userBook.shelves.map((item) => item.shelf.name),
      };
    }, [userBook.shelves]),
  });

  useEffect(() => {
    form.reset({ shelves: userBook.shelves.map((item) => item.shelf.name) });
  }, [userBook.shelves]);

  async function onSubmit({ shelves }: DisplayFormValues) {
    const { data } = await UpdateUserBook({
      variables: {
        data: {
          shelves,
        },
        where: {
          id: userBook.bookId,
        },
      },
    });

    if (data) {
      toast({
        title: `Sucessfully added ${data.updateUserBook.book?.title} to shelves`,
      });

      shelves.map((item) => {
        console.log("item", item);
        incrementShelfCount(item);
      });
    } else {
      toast({
        title: "Error updating book!",
      });
    }
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
            {dialogHeader()}
            <Form {...form}>
              <form
                className="space-y-3"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {formBody()}
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
          <div>date picker</div>
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
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 pt-3">
          <div className="text-primary">Currently on </div>
          <Input
            type="age"
            placeholder=""
            className="h-7 px-2 w-[48px] py-4 text-xs "
          />

          <div className="text-primary">of</div>
          <Input type="age" className="h-7 px-2 w-[48px] py-4 text-xs " />
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
            label="Delete"
            //   disabled={loading}
            variant="outline"
            onClick={jouranlEntryModal.onClose}
          ></Button>
          <Button
            type="submit"
            label="Save"
            //   disabled={loading}
            variant="default"
          >
            Save
          </Button>
        </div>
      </div>
    );
  }

  function dialogHeader() {
    return (
      <DialogHeader>
        <DialogTitle className="text-muted-foreground font-light">
          I read...
        </DialogTitle>
        <DialogDescription className="text-black font-medium">
          {userBook.data.title}
        </DialogDescription>
      </DialogHeader>
    );
  }
};
