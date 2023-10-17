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

interface JournalEntryModalProps {}

export const JouranlEntryModal: React.FC<JournalEntryModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
  const { shelves, incrementShelfCount } = useShelves();
  const userBook = useUserBook();
  const [UpdateUserBook] = useUpdateUserBookMutation();
  const test = 0;
  console.log(userBook.data);
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
      <DialogContent className="flex min-w-[600px]">
        <div className="flex gap-8 min-w-full">
          <BookCover />
          <div className="flex text-sm flex-col w-[fill-available] justify-between">
            <DialogHeader>
              <DialogTitle className="text-muted-foreground font-light">
                I read...
              </DialogTitle>
              <DialogDescription className="text-black font-medium">
                {userBook.data.title}
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div></div>
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="mark_abandoned"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Mark as Abandoned</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <div className="space-x-2 flex items-center justify-end">
                    <Button
                      label="Cancel"
                      //   disabled={loading}
                      variant="outline"
                      onClick={jouranlEntryModal.onClose}
                    ></Button>
                    <Button
                      type="submit"
                      label="Add"
                      //   disabled={loading}
                      variant="default"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
