"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

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
import { Button } from "@/components/ui/button";
import useCreateShelfModal from "./use-create-shelf-modal";
import { useCreateShelf } from "../../api/use-create-shelf";
import { useUpdateShelf } from "../../api/use-update-shelf";
import useShelfStore from "@/stores/use-shelf-store";
import { Shelf } from "@/graphql/graphql";

const formSchema = z.object({
    name: z.string().min(1),
});

export const CreateShelfModal = () => {
    const shelfModal = useCreateShelfModal();
    const { addShelf, renameShelf } = useShelfStore();
    const { createShelf, isLoading: isCreating } = useCreateShelf({
        onSuccess: (shelf: Shelf) => {
            addShelf({ ...shelf })
        }
    });
    const { updateShelf, isLoading: isUpdating } = useUpdateShelf({
        onSuccess: (shelf: Shelf) => {
            renameShelf({ id: shelfModal.shelf!.id!, name: shelf.name })
        },
    });

    useEffect(() => {
        // Set the default value of the "name" field to an empty string when the component mounts
        form.reset({
            name: shelfModal.isEdit ? shelfModal.shelf!.name : ""
        })
        // onOpen set initial value
    }, [shelfModal.isOpen]); // Empty dependency array ensures the effect runs once after the initial render

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: useMemo(() => {
            return {
                name: shelfModal.isEdit ? shelfModal.shelf!.name : ""
            };
        }, [shelfModal.isOpen]),
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!shelfModal.isOpen) {
            return;
        }
        if (!shelfModal.isEdit) {
            await createShelf({ name: values.name });
        } else {
            await updateShelf({ id: shelfModal.shelf!.id!, name: values.name });
        }

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
                                                    disabled={isCreating || isUpdating}
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
                                        disabled={isCreating || isUpdating}
                                        variant="outline"
                                        label="Cancel"
                                        onClick={shelfModal.onClose}
                                    ></Button>
                                    <Button
                                        disabled={isCreating || isUpdating}
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
