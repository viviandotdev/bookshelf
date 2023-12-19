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
    const { createShelf } = useCreateShelf();
    const { updateShelf } = useUpdateShelf({
        onSuccess: (shelf: Shelf) => {
            (renameShelf({ id: shelfModal.shelf!.id!, name: shelf.name }))
        },
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Set the default value of the "name" field to an empty string when the component mounts
        form.reset({
            name: shelfModal.isEdit ? shelfModal.shelf!.name : ""
        })
        // onOpen set initial value
    }, [shelfModal.isOpen]); // Empty dependency array ensures the effect runs once after the initial render
    // initial value is not reseting
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: useMemo(() => {
            return {
                name: shelfModal.isEdit ? shelfModal.shelf!.name : ""
            };
        }, [shelfModal.isOpen]),
    });

    const onCreateShelf = async (name: string) => {
        setIsLoading(true);
        // Query or mutation execution
        const createdShelf = await createShelf(name);
        if (createdShelf) {
            (addShelf(
                {
                    id: createdShelf.id,
                    name: createdShelf.name,
                    userId: "",
                }
            ))
        }
        setIsLoading(false);
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!shelfModal.isOpen) {
            return;
        }
        if (!shelfModal.isEdit) {
            onCreateShelf(values.name);
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
