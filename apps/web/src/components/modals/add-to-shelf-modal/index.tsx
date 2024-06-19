'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';

import { Modal } from '@/components/ui/modal';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import { Button } from '../../ui/button';
import useUserBookStore from '@/stores/use-user-book-store';
import { useApolloClient } from '@apollo/client';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import useShelfStore from '@/stores/use-shelf-store';
import { ShelfList } from './shelf-list';
import { UserBook } from '@prisma/client';
import MultipleSelector, { FancyMultiSelect } from '@/components/multi-select';
interface AddToShelfModalProps {}

export const AddToShelfModal: React.FC<AddToShelfModalProps> = () => {
  const addToShelfModal = useAddToShelfModal();
  const {
    shelves,
    decrementLibraryCount,
    decrementShelfCount,
    incrementLibraryCount,
    incrementShelfCount,
  } = useShelfStore();
  const client = useApolloClient();
  const userBook = useUserBookStore();

  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (data: UserBook) => {},
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });

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
        shelf: '',
      };
    }, [userBook.shelves]),
  });

  useEffect(() => {
    form.reset({
      shelves: userBook.shelves.map((item) => item.shelf.name),
      shelf: '',
    });
  }, [userBook.shelves]);

  async function onSubmit({ shelves }: DisplayFormValues) {
    const updatedBook = await updateUserBook(userBook.userBookId, { shelves });
    if (userBook.shelves.length == 0) {
      decrementLibraryCount('Unshelved');
    }
    // should only increment shelves that are new
    shelves.map((item) => {
      if (!userBook.shelves.map((item) => item.shelf.name).includes(item)) {
        incrementShelfCount(item);
      }
    });
    // should decrement unselected shelves
    userBook.shelves.map((item) => {
      if (!shelves.includes(item.shelf.name)) {
        decrementShelfCount(item.shelf.name);
      }
    });
    if (shelves.length == 0) {
      incrementLibraryCount('Unshelved');
    }

    // Update the cache
    // client.cache.evict({ id: `Book:${userBook.bookId}` });

    toast({
      title: `Sucessfully shelved book`,
    });
    addToShelfModal.onClose();
  }
  const OPTIONS: Option[] = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember', disable: true },
    { label: 'Gatsby', value: 'gatsby', disable: true },
    { label: 'Astro', value: 'astro' },
  ];

  return (
    <Modal
      title={'Add book to shelves'}
      description='Add a new shelf to organize your books.'
      isOpen={true}
      onClose={addToShelfModal.onClose}
    >
      <Form {...form}>
        <form
          className='w-full space-y-8 '
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='shelves'
            render={() => (
              <FormItem>
                <FancyMultiSelect />
                {/* <MultipleSelector
                  defaultOptions={OPTIONS}
                  placeholder='Select frameworks you like...'
                  emptyIndicator={
                    <p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
                      no results found.
                    </p>
                  }
                /> */}
                {/* <ShelfList
                  options={shelves}
                  focus={form.setFocus}
                  control={form.control}
                /> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex w-full items-center justify-end space-x-2'>
            <Button
              label='Cancel'
              //   disabled={loading}
              variant='outline'
              onClick={addToShelfModal.onClose}
            ></Button>
            <Button
              type='submit'
              label='Add'
              //   disabled={loading}
              variant='default'
            >
              Add
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
