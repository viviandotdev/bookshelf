'use client';
// CollapsibleForm.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SettingsSchema } from '@/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { settings } from '../actions/settings';
import { useSession } from 'next-auth/react';
import { CalendarIcon } from 'lucide-react';
import { format, isValid } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calender';
import { toast } from '@/hooks/use-toast';

export type FormNames =
  | 'username'
  | 'location'
  | 'name'
  | 'bio'
  | 'email'
  | 'dob';

interface CollapsibleFormProps {
  label: string;
  value: string;
  isLastSection?: boolean;
  isOpen: boolean;
  openForm: FormNames | '';
  onToggle: () => void;
  onChange?: (value: string) => void;
}

export const CollapsibleForm: React.FC<CollapsibleFormProps> = ({
  label,
  value,
  isLastSection,
  openForm,
  isOpen,
  onToggle,
  onChange,
}) => {
  const textColor = value ? 'text-black' : 'text-gray-400';
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();
  //get user from query
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: undefined,
      username: undefined,
      location: undefined,
      bio: undefined,
    },
  });
  //   call the api to update the value in the database

  useEffect(() => {
    form.reset({
      name: openForm === 'name' ? value : undefined,
      username: openForm === 'username' ? value : undefined,
      location: openForm === 'location' ? value : undefined,
      bio: openForm === 'bio' ? value : undefined,
    });
  }, [openForm]);

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    onToggle();
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            if (onChange && openForm) {
              if (openForm === 'dob') {
                onChange(values[openForm]?.toISOString() || '');
              } else {
                onChange(values[openForm] || '');
              }
            }
            toast({
              title: 'Success',
              description: 'Your settings have been updated',
              variant: 'success',
            });
            setSuccess(data.success);
          }
        })
        .catch(() => setError('Something went wrong!'));
    });
  };

  function formatDateOrDisplayValue(value: string) {
    return value || '+ Add';
  }

  const renderFormControl = (field: any) => {
    if (openForm === 'bio') {
      return (
        <FormControl>
          <Textarea
            {...field}
            className='resize-none'
            placeholder='Tell us a little bit about yourself'
            disabled={isPending}
          />
        </FormControl>
      );
    } else {
      return (
        <FormControl>
          <Input
            {...field}
            disabled={isPending}
            className='rounded-md border border-gray-100 bg-transparent bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          />
        </FormControl>
      );
    }
  };

  return (
    <div>
      <div className='justify-between text-base text-beige'>
        <div
          onClick={onToggle}
          className={`transition-all ${
            isOpen ? 'bg-beige-50' : ''
          } cursor-pointer items-center justify-between`}
        >
          <div className='cursor-pointer rounded-t-md hover:bg-beige-50'>
            <div className={`flex justify-between px-4 py-3 text-black`}>
              <div className='min-w-20 text-sm font-normal text-gray-400'>
                {label}
              </div>
              <div
                className={`transition-max-height transform text-sm duration-500 ${textColor} transition-all ease-in-out ${
                  isOpen
                    ? '-translate-x-2 translate-y-2 opacity-0'
                    : 'translate-x-0 translate-y-0 opacity-100'
                }`}
              >
                {formatDateOrDisplayValue(value)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='grid gap-1 text-sm'>
          <div className='cursor-pointer rounded-b bg-beige-50'>
            <div className='px-4'>
              {openForm !== '' && (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className=''>
                      <FormField
                        control={form.control}
                        name={openForm}
                        render={({ field }) => (
                          <FormItem className='mt-0'>
                            {renderFormControl(field)}
                            <FormMessage setError={setError} />
                            <p className={'pb-1 pt-2 text-sm text-red-400'}>
                              {error}
                            </p>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className='flex justify-end gap-2 py-3'>
                      <Button
                        onClick={onToggle}
                        className='border border-beige-100 bg-white text-black hover:bg-white hover:text-black'
                      >
                        Cancel
                      </Button>
                      <Button
                        type='submit'
                        disabled={error ? true : false}
                        variant={'secondary'}
                      >
                        Save
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
      {isLastSection ? null : <hr className='mx-2 border-gray-100' />}
    </div>
  );
};

export default CollapsibleForm;
