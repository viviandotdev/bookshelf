"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { use, useEffect, useState } from "react";

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
import useCreateShelfModal from "../hooks/use-create-shelf-modal";
import { useAppDispatch } from "@/stores";
import { addShelf, renameShelf } from "@/stores/shelf-slice";
import { useCreateShelf, useUpdateShelf } from "@/hooks/shelf/mutations";

const formSchema = z.object({
    name: z.string().min(1),
});

export const CreateShelfModal = () => {
    const shelfModal = useCreateShelfModal();
    const { createShelf } = useCreateShelf();
    const { updateShelf } = useUpdateShelf();

    const dispatch = useAppDispatch();
    // const addShelf = useShelves((state) => state.addShelf);
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

    const onCreateShelf = async (name: string) => {
        if (!shelfModal.isOpen) {
            return;
        }
        setIsLoading(true);
        // Query or mutation execution
        const createdShelf = await createShelf(name);
        if (createdShelf) {
            dispatch(addShelf(
                {
                    id: createdShelf.id,
                    name: createdShelf.name,
                    _count: {
                        userBooks: 0,
                    },
                    userId: "",
                }
            ))
        }
        setIsLoading(false);
        shelfModal.onClose();
    };
    const onUpdateShelf = async (name: string) => {
        if (!shelfModal.isOpen) {
            return;
        }
        setIsLoading(true);
        const updatedShelf = await updateShelf(shelfModal.editId!, name);
        if (updatedShelf) {
            dispatch(renameShelf({ id: shelfModal.editId!, name: updatedShelf.name }))
        }

        setIsLoading(false);
        shelfModal.onClose();
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // If the modal is closed by clicking the cancel button, do not execute the rest of the function
        if (!shelfModal.isEdit) {
            onCreateShelf(values.name);
            return;
        } else {
            onUpdateShelf(values.name);
        }
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
