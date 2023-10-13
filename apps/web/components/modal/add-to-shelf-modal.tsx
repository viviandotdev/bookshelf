"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { use, useEffect, useState } from "react";

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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import useUserBook from "@/hooks/use-user-book-store";
import { useUpdateUserBookMutation } from "@/graphql/graphql";

interface AddToShelfModalProps {}

export const AddToShelfModal: React.FC<AddToShelfModalProps> = () => {
  const addToShelfModal = useAddToShelfModal();
  const { shelves } = useShelves();
  const userBook = useUserBook();
  const [isLoading, setIsLoading] = useState(false);
  const [UpdateUserBook] = useUpdateUserBookMutation();
  useEffect(() => {
    console.log(shelves);
    // Fetch the shelves for this userBook the default values
  }, [userBook]);
  const displayFormSchema = z.object({
    shelves: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  type DisplayFormValues = z.infer<typeof displayFormSchema>;

  // From the API, current book selection values
  const defaultValues: Partial<DisplayFormValues> = {
    shelves: [
      //   "books",
      //   "fiction",
    ],
  };

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues,
  });
  async function onSubmit({ shelves }: DisplayFormValues) {
    console.log(shelves);
    const { data, errors } = await UpdateUserBook({
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
        title: `Sucessfully added ${data.updateUserBook.id} to shelves`,
      });
    } else {
      toast({
        title: "Error updating book!",
      });
    }
  }

  return (
    <Modal
      title={"Add book to shelf"}
      description="Add a new shelf to organize your books."
      isOpen={addToShelfModal.isOpen}
      onClose={addToShelfModal.onClose}
    >
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          {/* <hr /> */}
          <FormField
            control={form.control}
            name="shelves"
            render={() => (
              <FormItem>
                {shelves.map((item) => (
                  <FormField
                    key={item.name}
                    control={form.control}
                    name="shelves"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.name}
                          className="flex flex-row shelves-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.name)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.name])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.name
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.name}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <Button
              label="Cancel"
              //   disabled={loading}
              variant="outline"
              onClick={addToShelfModal.onClose}
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
        </form>
      </Form>
    </Modal>
  );
};
