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
import { Checkbox } from "../../../components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import useAddToShelfModal from "@/modules/bookshelves/hooks/use-add-to-shelf-modal";
import { Button } from "../../../components/ui/button";
import useUserBook from "@/stores/use-user-book";
import { useAppDispatch, useAppSelector } from "@/stores";
import { decrementLibraryCount, decrementShelfCount, incrementLibraryCount, incrementShelfCount, selectShelves } from "@/stores/shelf-slice";
import { useApolloClient } from '@apollo/client';
import { useUpdateUserBook } from "@/api/use-update-user-book";
interface AddToShelfModalProps { }

export const AddToShelfModal: React.FC<AddToShelfModalProps> = () => {
    const addToShelfModal = useAddToShelfModal();
    const dispatch = useAppDispatch();
    const { updateUserBook } = useUpdateUserBook();
    const shelves = useAppSelector(selectShelves)
    const client = useApolloClient();
    const userBook = useUserBook();

    const displayFormSchema = z.object({
        shelves: z.array(z.string())
    });

    type DisplayFormValues = z.infer<typeof displayFormSchema>;

    const form = useForm<DisplayFormValues>({
        resolver: zodResolver(displayFormSchema),
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
        const updatedBook = await updateUserBook(userBook.bookId, { shelves });
        if (updatedBook) {
            if (userBook.shelves.length == 0) {
                dispatch(decrementLibraryCount({ name: "Unshelved" }))
            }
            // should only increment shelves that are new
            shelves.map((item) => {
                if (!userBook.shelves.map((item) => item.shelf.name).includes(item)) {
                    dispatch(incrementShelfCount({ name: item }))
                }
            });
            // should decrement unselected shelves
            userBook.shelves.map((item) => {
                if (!shelves.includes(item.shelf.name)) {
                    dispatch(decrementShelfCount({ name: item.shelf.name }))
                }
            })
            if (shelves.length == 0) {
                dispatch(incrementLibraryCount({ name: "Unshelved" }))
            }
            // Update the cache
            client.cache.evict({ id: `Book:${userBook.bookId}` });

            toast({
                title: `Sucessfully shelved book`,
            });
        }
        addToShelfModal.onClose();
    }

    return (
        <Modal
            title={"Add book to shelves"}
            description="Add a new shelf to organize your books."
            isOpen={addToShelfModal.isOpen}
            onClose={addToShelfModal.onClose}
        >
            <Form {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
