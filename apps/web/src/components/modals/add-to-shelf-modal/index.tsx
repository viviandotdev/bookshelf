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
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import useShelfStore from '@/stores/use-shelf-store';
import { UserBook } from '@prisma/client';
import { ShelfSelector } from '@/components/shelf-selector';
import useUserBookStore from '@/stores/use-user-book-store';
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
  const {
    setShelves,
    // shelves: userBookShelves,
    // bookTitle,
    // userBookId,
  } = useAddToShelfModal();
  const {
    userBookId,
    shelves: userBookShelves,
    bookTitle,
    setUserBook,
  } = useUserBookStore();
  const [loading, setLoading] = useState(false);
  const { updateUserBook } = useUpdateUserBook({
    onCompleted: (data: UserBook) => {
      setUserBook({
        shelves: data.shelves,
      });
    },
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
        shelves: userBookShelves.map((item) => {
          console.log(item);
          return { label: item.shelf.name, value: item.shelf.name };
        }),
      };
    }, [userBookShelves]),
  });

  useEffect(() => {
    form.reset({
      shelves: userBookShelves.map((item) => {
        return { label: item.shelf.name, value: item.shelf.name };
      }),
    });
  }, [userBookShelves]);

  async function onSubmit({ shelves: formShelves }: DisplayFormValues) {
    setLoading(true);
    const shelves = formShelves.map((item) => item.value);
    //this userBookId could be wrong
    console.log(userBookId);
    await updateUserBook(userBookId, { shelves });
    if (userBookShelves.length == 0) {
      decrementLibraryCount('Unshelved');
    }

    // should only increment shelves that are new
    shelves.map((item) => {
      if (!userBookShelves.map((item) => item.shelf.name).includes(item)) {
        incrementShelfCount(item);
      }
    });
    // should decrement unselected shelves
    userBookShelves.map((item) => {
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
    // set the state of the shelves
    setLoading(false);
    addToShelfModal.onClose();
  }

  let content;
  if (addToShelfModal.isLoading) {
    content = <div className='h-[286px]'>Loading...</div>;
  } else {
    content = (
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
                  <ShelfSelector
                    defaultOptions={shelves.map((item) => {
                      return { label: item.name, value: item.name };
                    })}
                    control={form.control}
                    footer={
                      <div className='mr-2 gap-2'>
                        <Button
                          type='submit'
                          disabled={loading}
                          variant='default'
                          className='h-8'
                        >
                          Done
                        </Button>
                      </div>
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  }

  return (
    <Modal
      title={`Add
        '${bookTitle}' to shelves`}
      description='Add a new shelf to organize your books.'
      isOpen={addToShelfModal.isOpen}
      onClose={addToShelfModal.onClose}
    >
      {content}
    </Modal>
  );
};
