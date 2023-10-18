"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";

import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "../ui/checkbox";
import { toast } from "@/hooks/use-toast";
import useAddToShelfModal from "@/hooks/use-add-to-shelf-modal";
import useShelves from "@/hooks/use-shelves";
import { Button } from "../ui/button";
import useUserBook from "@/hooks/use-user-book";
import { useUpdateUserBookMutation } from "@/graphql/graphql";
import useJouranlEntryModal from "@/hooks/use-journal-entry-modal";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { title } from "process";
import BookCover from "../book-cover";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calender";
import { CalendarIcon } from "@radix-ui/react-icons";

interface AddToShelfModalProps {}

export const JouranlEntryModal: React.FC<AddToShelfModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
  const { shelves, incrementShelfCount } = useShelves();
  const userBook = useUserBook();
  const [UpdateUserBook] = useUpdateUserBookMutation();

  const displayFormSchema = z.object({
    notes: z.string().max(160).min(4),
    mark_abandoned: z.boolean().default(false),
    start_page: z.string().min(1),
    end_page: z.string().min(1),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    // date_read: z.date({
    //   required_error: "A date is required",
    // }),
  });

  type DisplayFormValues = z.infer<typeof displayFormSchema>;

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues: {
      notes: "",
      start_page: "",
      end_page: "",
    },
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
              <form
                className="space-y-8"
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
          <div className="flex items-center gap-2">
            <div className="text-primary items-center">Read on</div>
            <FormField
              control={form.control}
              name="dob"
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
                            <span className="text-black">October 16, 2023</span>
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
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
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 pt-3">
          <div className="text-primary">Currently on </div>
          <FormField
            control={form.control}
            name="start_page"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="99"
                    className="h-7 px-2 w-[48px] py-4 text-xs "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-primary">of</div>
          <FormField
            control={form.control}
            name="end_page"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="99"
                    className="h-7 px-2 w-[48px] py-4 text-xs "
                    {...field}
                  />
                </FormControl>

                <FormMessage />
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
