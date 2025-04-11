'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import useCreateShelfModal from '../../hooks/use-create-shelf-modal';
import { useCreateShelf } from '../../mutations/use-create-shelf';
import { useUpdateShelf } from '../../mutations/use-update-shelf';
import { useDeleteShelf } from '../../mutations/use-delete-shelf';
import useShelfStore from '@/stores/use-shelf-store';
import { Shelf } from '@/graphql/graphql';
import {
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';
import AlertModal from '@/components/modals/alert-modal';

const formSchema = z.object({
    name: z.string().min(1),
});

export const CreateShelfModal = () => {
    const shelfModal = useCreateShelfModal();
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { selected, addShelf, renameShelf, updateSelected, removeShelf } = useShelfStore();
    const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

    const { createShelf, isLoading: isLoadingCreate } = useCreateShelf({
        onSuccess: (shelf: Shelf) => {
            addShelf({ ...shelf });
            shelfModal.onClose();
        },
    });

    const { updateShelf, isLoading: isLoadingUpdate } = useUpdateShelf({
        onSuccess: (shelf: Shelf) => {
            renameShelf({ slug: shelfModal.shelf!.slug!, name: shelf.name });
            if (shelfModal.shelf?.name === selected?.name) {
                const shelfParam = searchParams?.get('shelf') || '';
                if (shelfParam) {
                    const newSearchParams = new URLSearchParams(searchParams?.toString());

                    for (const [key, value] of Object.entries({
                        shelf: shelf.name,
                        page: Number(searchParams?.get('page')) || 1,
                        status: searchParams?.get('status') || 'Any Status',
                    })) {
                        if (value === null) {
                            newSearchParams.delete(key);
                        } else {
                            newSearchParams.set(key, String(value));
                        }
                    }

                    const res = newSearchParams.toString();
                    router.replace(`${pathname}?${res}`);
                }
                updateSelected(shelf.name);
            }
            shelfModal.onClose();
        },
    });

    const { deleteShelf, isLoading: isLoadingDelete } = useDeleteShelf({
        onSuccess: (shelf: Shelf) => {
            removeShelf(shelf.slug);
            setOpenDeleteAlert(false);
            shelfModal.onClose();
            router.push('/')
        },
    });

    useEffect(() => {
        form.reset({
            name: shelfModal.isEdit ? shelfModal.shelf!.name : '',
        });
    }, [shelfModal.isOpen]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: useMemo(() => {
            return {
                name: shelfModal.isEdit ? shelfModal.shelf!.name : '',
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
            await updateShelf({ slug: shelfModal.shelf!.slug!, name: values.name });
        }
    };

    return (
        <>
            <AlertModal
                title="Are you sure you want to delete this shelf?"
                description="This action cannot be undone. All books in this shelf will be removed from it."
                isOpen={openDeleteAlert}
                onClose={() => setOpenDeleteAlert(false)}
                onConfirm={async () => {
                    if (shelfModal.shelf) {
                        await deleteShelf({ slug: shelfModal.shelf.slug });
                    }
                }}
                loading={isLoadingDelete}
            />
            <Modal
                title={shelfModal.isEdit ? 'Edit Shelf' : 'Create Shelf'}
                description='Add a new shelf to organize your books.'
                isOpen={shelfModal.isOpen}
                onClose={shelfModal.onClose}
            >
                <div>
                    <div className='space-y-4 py-2 pb-4'>
                        <div className='space-y-2'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isLoadingCreate || isLoadingUpdate}
                                                        placeholder='Shelf'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='flex w-full items-center justify-end space-x-2 pt-6'>
                                        {shelfModal.isEdit && (
                                            <Button
                                                disabled={isLoadingCreate || isLoadingUpdate}
                                                variant='secondary'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenDeleteAlert(true);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        )}
                                        <Button
                                            disabled={isLoadingCreate || isLoadingUpdate}
                                            type='submit'
                                        >
                                            Save shelf
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
