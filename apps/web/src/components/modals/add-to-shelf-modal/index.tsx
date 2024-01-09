"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

import { Modal } from "@/components/ui/modal";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "../../ui/checkbox";
import { toast } from "@/hooks/use-toast";
import useAddToShelfModal from "@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal";
import { Button } from "../../ui/button";
import useUserBookStore from "@/stores/use-user-book-store";
import { useApolloClient } from '@apollo/client';
import { useUpdateUserBook } from "@/modules/bookshelves/mutations/use-update-user-book";
import useShelfStore from "@/stores/use-shelf-store";
import { Checkboxes } from "./shelves";
import { Input } from "@/components/ui/input";
interface AddToShelfModalProps { }

export const AddToShelfModal: React.FC<AddToShelfModalProps> = () => {
    const addToShelfModal = useAddToShelfModal();
    const { updateUserBook } = useUpdateUserBook();
    const { shelves, decrementLibraryCount, decrementShelfCount, incrementLibraryCount, incrementShelfCount } = useShelfStore();
    const client = useApolloClient();
    const userBook = useUserBookStore();



    const displayFormSchema = z.object({
        shelves: z.array(z.string()),
        shelf: z.string().optional(),
    });

    type DisplayFormValues = z.infer<typeof displayFormSchema>;

    const form = useForm<DisplayFormValues>({
        resolver: zodResolver(displayFormSchema),
        defaultValues: useMemo(() => {
            return {
                shelves: userBook.shelves.map((item) => item.shelf.name),
                shelf: "",
            };
        }, [userBook.shelves]),
    });


    useEffect(() => {
        form.reset({ shelves: userBook.shelves.map((item) => item.shelf.name), shelf: "" });
    }, [userBook.shelves]);

    async function onSubmit({ shelves }: DisplayFormValues) {

        const updatedBook = await updateUserBook(userBook.bookId, { shelves });
        if (updatedBook) {
            if (userBook.shelves.length == 0) {
                (decrementLibraryCount("Unshelved"))
            }
            // should only increment shelves that are new
            shelves.map((item) => {
                if (!userBook.shelves.map((item) => item.shelf.name).includes(item)) {
                    (incrementShelfCount(item))
                }
            });
            // should decrement unselected shelves
            userBook.shelves.map((item) => {
                if (!shelves.includes(item.shelf.name)) {
                    (decrementShelfCount(item.shelf.name))
                }
            })
            if (shelves.length == 0) {
                (incrementLibraryCount("Unshelved"))
            }
            // Update the cache
            client.cache.evict({ id: `Book:${userBook.bookId}` });

            toast({
                title: `Sucessfully shelved book`,
            });
        }
        addToShelfModal.onClose();
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents the default behavior on Enter keypress
        }
    };

    return (
        <Modal
            title={"Add book to shelves"}
            description="Add a new shelf to organize your books."
            isOpen={addToShelfModal.isOpen}
            onClose={addToShelfModal.onClose}
        >
            <Form {...form}>
                <form className="space-y-8 w-full max-w-96 " onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="shelf"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        onKeyDown={handleKeyPress}
                                        disabled={false}
                                        placeholder="Shelf"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shelves"
                        render={() => (
                            <FormItem>
                                <Checkboxes
                                    options={shelves}
                                    control={form.control}
                                    name="shelves"
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="space-x-2 flex items-center justify-end w-full">
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
