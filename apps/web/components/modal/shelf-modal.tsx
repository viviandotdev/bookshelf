"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useShelfModal } from "@/hooks/use-shelf-modal";
import { Button } from "@/components/ui/button";
import useSidebar from "@/hooks/use-sidebar";
import { useCreateShelfMutation } from "@/graphql/graphql";
import { toast } from "@/hooks/use-toast";
import loading from "@/app/(book)/book/loading";

const formSchema = z.object({
  name: z.string().min(1),
});

export const ShelfModal = () => {
  const shelfModal = useShelfModal();
  const router = useRouter();
  const [createShelf] = useCreateShelfMutation();
  const updateShelves = useSidebar((state) => state.updateShelves);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set the default value of the "name" field to an empty string when the component mounts
    form.setValue("name", "");
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // If the modal is closed by clicking the cancel button, do not execute the rest of the function
    if (!shelfModal.isOpen) {
      return;
    }
    setIsLoading(true);
    const { data } = await createShelf({
      variables: {
        input: {
          name: values.name,
        },
      },
    });

    if (!data) {
      toast({
        title: "Error creating shelf",
        variant: "destructive",
      });
    } else {
      updateShelves({ title: values.name, icon: "shelf" });
      toast({
        title: "Sucessfylly created shelf",
      });
    }
    setIsLoading(false);
    shelfModal.onClose();
  };

  return (
    <Modal
      title={shelfModal.isEdit ? "Edit Shelf" : "Create Shelf"}
      description="Add a new shelf to organize your books."
      isOpen={shelfModal.isOpen}
      onClose={shelfModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="Shelf"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button
                    disabled={isLoading}
                    variant="outline"
                    label="Cancel"
                    onClick={shelfModal.onClose}
                  ></Button>
                  <Button
                    disabled={isLoading}
                    label="Continue"
                    type="submit"
                  ></Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
