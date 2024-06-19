'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';

import { Modal } from '@/components/ui/modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import { Button } from '../../ui/button';
import useUserBookStore from '@/stores/use-user-book-store';
import { useApolloClient } from '@apollo/client';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import useShelfStore from '@/stores/use-shelf-store';
import { UserBook } from '@prisma/client';
import MultipleSelector from '@/components/multi-select';
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
  const userBook = useUserBookStore();
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (data: UserBook) => {},
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
    },
  });

  const optionSchema = z.object({
    label: z.string(),
    value: z.string(),
    disable: z.boolean().optional(),
  });

  const displayFormSchema = z.object({
    shelves: z.array(optionSchema),
  });

  type DisplayFormValues = z.infer<typeof displayFormSchema>;

  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues: useMemo(() => {
      return {
        shelves: userBook.shelves.map((item) => {
          return { label: item.shelf.name, value: item.shelf.name };
        }),
      };
    }, [userBook.shelves]),
  });

  useEffect(() => {
    form.reset({
      shelves: userBook.shelves.map((item) => {
        return { label: item.shelf.name, value: item.shelf.name };
      }),
    });
    console.log('userBook.shelves', userBook.shelves);
  }, [userBook.shelves]);

  async function onSubmit({ shelves: formShelves }: DisplayFormValues) {
    setLoading(true);
    const shelves = formShelves.map((item) => item.value);
    console.log(formShelves);
    await updateUserBook(userBook.userBookId, { shelves });
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
    // if new shelves is not part of current filter, remove it
    // client.cache.evict({ id: `Book:${userBook.bookId}` });

    toast({
      title: `Sucessfully shelved book`,
    });
    setLoading(false);
    addToShelfModal.onClose();
  }

  return (
    <Modal
      title={'Add book to shelves'}
      description='Add a new shelf to organize your books.'
      isOpen={addToShelfModal.isOpen}
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
            render={(field) => (
              <FormItem>
                <FormControl>
                  <MultipleSelector
                    {...field}
                    control={form.control}
                    options={shelves.map((item) => {
                      return { label: item.name, value: item.name };
                    })}
                    creatable={true}
                    badgeClassName='bg-beige-100 font-medium rounded-full'
                    placeholder='Select shelves...'
                    emptyIndicator={
                      <>
                        <div>No results...</div>
                      </>
                    }
                  />
                </FormControl>
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
            <Button type='submit' disabled={loading} variant='default'>
              Done
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
