'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Textarea } from '../../ui/textarea';
import { Input } from '../../ui/input';
import { Calendar } from '../../ui/calender';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useUserBookStore from '@/stores/use-user-book-store';
import { JournalEntryCreateInput } from '@/graphql/graphql';
import { Checkbox } from '../../ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { useCreateJournalEntry } from '../../../modules/journal/mutations/use-create-entry';
import { useUpdateJournalEntry } from '../../../modules/journal/mutations/use-update-entry';
import useLoadJournalEntry from '../../../modules/journal/queries/use-load-entry';
import { useJournalEntryModal } from './use-journal-entry-modal';
import { useRemoveEntry } from '../../../modules/journal/mutations/use-remove-entry';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';

export const JournalEntryForm: React.FC = ({}) => {
  const userBook = useUserBookStore();
  const [error, setError] = useState<string>('');
  const [unit, setUnit] = useState<'pages' | 'percent'>('pages');
  const { onClose, editId, setJournalEntry, journalEntry } =
    useJournalEntryModal();
  const loadEntry = useLoadJournalEntry(setJournalEntry);
  const { createJournalEntry } = useCreateJournalEntry();
  const { updateJournalEntry } = useUpdateJournalEntry();
  const { updateUserBook } = useUpdateUserBook();

  const {
    notes,
    date,
    percent,
    page,
    originalPage,
    originalPercent,
    pagesRead,
  } = journalEntry;

  useEffect(() => {
    form.reset({
      notes: notes || '',
      current_percent: percent.toString() || '',
      current_page: page.toString() || '',
      date_read: date || new Date(),
      mark_dnf: userBook.status === 'Did Not Finish',
    });
  }, [journalEntry, userBook]);

  useEffect(() => {
    if (!editId) {
      // Fetch most recent entry if adding new journal entry
      const loadData = async () => {
        await loadEntry({
          variables: {
            book: {
              id: parseInt(userBook!.book.id),
            },
          },
        });
      };
      loadData();
    }
  }, [loadEntry]);

  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow only numbers (0-9) or Backspace key or Tab key
    // Not backspace and noot number prevent the action
    if (!/^\d$/.test(keyValue) && keyCode !== 8 && keyCode !== 9) {
      event.preventDefault();
    }
  };

  const displayFormSchema = z
    .object({
      notes: z.string().max(160).optional(),
      mark_dnf: z.boolean().optional(),
      current_page: z
        .string()
        .refine(
          (val) => {
            // unit is pages and valid if value is less than or equal to the total number of pages in the book
            return parseInt(val, 10) >= page;
          },
          {
            message: `Enter a value greater than the previous end page ${page}`,
          }
        )
        .refine(
          (val) => {
            // unit is pages and valid if value is less than or equal to the total number of pages in the book
            return (
              parseInt(val, 10) <=
              (userBook.book && userBook.book.pageCount
                ? userBook.book.pageCount
                : 0)
            );
          },
          {
            message: `The value entered is greater than the total number of pages in the book`,
          }
        )
        .optional()
        .or(z.literal('')),
      date_read: z.date(),
      current_percent: z
        .string()
        .refine(
          (val) => {
            // unit is pages and valid if value is less than or equal to the total number of pages in the book
            return parseInt(val, 10) >= percent;
          },
          {
            message: `Enter a value greater than the previous value ${percent}`,
          }
        )
        .refine(
          (val) => {
            return parseInt(val, 10) <= 100;
          },
          {
            message: `Enter a value less than or equal to 100`,
          }
        )
        .optional()
        .or(z.literal('')),
    })
    .superRefine((values, ctx) => {
      if (!values.current_page && !values.current_percent) {
        ctx.addIssue({
          message: 'Please enter your progress',
          code: z.ZodIssueCode.custom,
          path: ['current_page'],
        });
        ctx.addIssue({
          message: 'Please enter your progress',
          code: z.ZodIssueCode.custom,
          path: ['current_percent'],
        });
      }
    });

  type DisplayFormValues = z.infer<typeof displayFormSchema>;
  const form = useForm<DisplayFormValues>({
    resolver: zodResolver(displayFormSchema),
    defaultValues: useMemo(() => {
      return {
        notes: notes || '',
        current_page: page.toString() || '',
        current_percent: percent.toString() || '',
        date_read: date || new Date(),
        mark_dnf: userBook.status === 'Did Not Finish',
      };
    }, [userBook]),
  });

  async function onSubmit(values: DisplayFormValues) {
    console.log('values', values);
    let currentPage;
    let currentPercent;
    const totalPages = userBook.book && userBook.book.pageCount;
    if (unit == 'pages' && values.current_page) {
      currentPage = parseInt(values.current_page);
      currentPercent = totalPages
        ? Math.round((parseInt(values.current_page) / totalPages) * 100)
        : 0;
    } else if (unit == 'percent' && values.current_percent) {
      // if unit is percent and current percent is not empty
      currentPercent = parseInt(values.current_percent);
      currentPage = Math.round(
        totalPages ? currentPercent * 0.01 * totalPages : 0
      );
    }

    let entryInput: JournalEntryCreateInput = {
      dateRead: values.date_read,
      readingNotes: values.notes,
      currentPage: currentPage!,
      pagesRead:
        currentPage! - originalPage > 0
          ? currentPage! - originalPage
          : pagesRead,
      currentPercent: currentPercent!,
    };
    //  if editing journal entry
    if (editId) {
      await updateUserBook(parseInt(userBook.book!.id), {
        status: values.mark_dnf ? 'Did Not Finish' : 'Currently Reading',
      });
    }

    let data;
    if (!editId) {
      // Only create entry if there is a change in the current page or percent
      if (currentPage != originalPage || currentPercent != originalPercent) {
        data = await createJournalEntry(userBook.book!.id, { ...entryInput });
      } else {
        setError('Please enter a updated progress');
        return;
      }
    } else {
      data = await updateJournalEntry(editId, { ...entryInput });
    }

    if (data && setJournalEntry) {
      setJournalEntry({
        date: new Date(data.dateRead),
        notes: data.readingNotes,
        originalPage: data.currentPage,
        originalPercent: data.currentPercent,
        page: data.currentPage,
        percent: data.currentPercent,
        status: values.mark_dnf ? 'Did Not Finish' : 'Currently Reading',
      });
    }
    onClose();
  }

  const { removeEntry } = useRemoveEntry();
  const deleteEntry = async () => {
    if (editId) {
      await removeEntry(editId);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form className='' onSubmit={form.handleSubmit(onSubmit)}>
          {formBody()}
          {error && (
            <p className={'pb-1 pt-2 text-sm font-medium text-red-500'}>
              {error}
            </p>
          )}
          {formFooter()}
        </form>
      </Form>
    </div>
  );

  function formBody() {
    return (
      <div className='pt-2'>
        <div className='flex gap-16'>
          <div className='flex items-center gap-2'>
            <div className='items-center text-beige'>Read on</div>
            <FormField
              control={form.control}
              name='date_read'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='tag'
                          size='xs'
                          className={cn(
                            'cursor-pointer py-0 text-left font-normal text-black',
                            !field.value && 'text-gray-500'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span className='text-black'>Pick Date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto rounded-xl border-2 bg-white p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage setError={setError} />
                </FormItem>
              )}
            />
          </div>
          {editId && (
            <FormField
              control={form.control}
              name='mark_dnf'
              render={({ field }) => (
                <FormItem className='flex flex-row items-center space-x-2 space-y-0'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>Mark as did not finish</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          )}
        </div>
        <FormField
          control={form.control}
          name='notes'
          render={({ field }) => (
            <FormItem className='pt-3'>
              <FormControl>
                <Textarea
                  placeholder='Write notes here...'
                  className='resize-none pt-2'
                  {...field}
                />
              </FormControl>
              <FormMessage setError={setError} />
            </FormItem>
          )}
        />
        <div className='flex items-center gap-2 pt-3'>
          <div className='text-beige'>
            Currently
            {unit == 'pages' && <span> on</span>}
          </div>
          <div>
            <div
              className={`${
                unit == 'pages' ? 'block' : 'hidden'
              } flex items-center gap-2`}
            >
              <FormField
                control={form.control}
                name='current_page'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        // disabled={editId ? true : false}
                        autoComplete='off'
                        autoFocus
                        className={` ${
                          unit == 'pages' ? 'block' : 'hidden'
                        } h-7 w-[48px] px-2 py-4 text-xs `}
                        onKeyDown={handleKeyPress}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage setError={setError} />
                  </FormItem>
                )}
              />
              <div className='text-beige'>of</div>
              {userBook.book &&
                userBook.book.pageCount &&
                userBook.book.pageCount!.toString() && (
                  <div className='font-bold text-beige'>
                    {userBook.book.pageCount!.toString()}
                  </div>
                )}
            </div>

            <div
              className={`${
                unit == 'percent' ? 'block' : 'hidden'
              } flex items-center gap-2`}
            >
              <FormField
                control={form.control}
                name='current_percent'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        // disabled={editId ? true : false}
                        autoComplete='off'
                        autoFocus
                        className={` h-7 w-[48px] px-2 py-4 text-xs `}
                        onKeyDown={handleKeyPress}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage setError={setError} />
                  </FormItem>
                )}
              />
              <div>% done</div>
            </div>
          </div>

          <div>
            <div className='flex items-start gap-0 rounded-xl bg-beige-100'>
              {unitButton('pages')}
              {unitButton('percent')}
            </div>
          </div>
        </div>
      </div>
    );
  }
  function formFooter() {
    return (
      <div className='flex justify-between'>
        <div className='flex cursor-pointer items-center font-semibold text-beige'>
          I'm finished!
        </div>
        <div className='flex items-center justify-end space-x-2'>
          <Button
            variant='outline'
            onClick={(e) => {
              e.preventDefault();
              if (editId) {
                deleteEntry();
              } else {
                onClose();
              }
            }}
          >
            {editId ? 'Delete' : 'Close'}
          </Button>
          <Button type='submit' variant='default'>
            Save
          </Button>
        </div>
      </div>
    );
  }
  function unitButton(type: 'pages' | 'percent') {
    return (
      <Button
        variant={`beige-100`}
        className={`${unit === type && 'bg-beige text-white'}`}
        onClick={(e) => {
          e.preventDefault();
          form.reset({
            current_percent: percent.toString() || '',
            current_page: page.toString() || '',
          });
          setUnit(type);
        }}
      >
        {type == 'pages' ? '#' : '%'}
      </Button>
    );
  }
};
export default JournalEntryForm;
