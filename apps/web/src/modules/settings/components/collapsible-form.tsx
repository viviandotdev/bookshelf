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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { settings } from '../actions/settings';
import { useSession } from 'next-auth/react';

// Assuming these are the fields we want to be collapsible
export type FormNames =
  | 'username'
  | 'location'
  | 'firstName'
  | 'lastName'
  | 'bio'
  | 'email'
  | 'password'
  | 'newPassword';

interface CollapsibleFormProps {
  label: string;
  value: string;
  isLastSection?: boolean;
  isOpen: boolean;
  openForm: FormNames | '';
  onToggle: () => void;
}

export const CollapsibleForm: React.FC<CollapsibleFormProps> = ({
  label,
  value,
  isLastSection,
  openForm,
  isOpen,
  onToggle,
}) => {
  const textColor = value ? 'text-black' : 'text-gray-400';
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      username: undefined,
      location: undefined,
      bio: undefined,
    },
  });

  useEffect(() => {
    form.reset({
      username: openForm == 'username' ? value : undefined,
      location: openForm == 'location' ? value : undefined,
      bio: openForm == 'bio' ? value : undefined,
    });
  }, [openForm]);

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    console.log(values);
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
          onToggle();
        })
        .catch(() => setError('Something went wrong!'));
    });
  };

  return (
    <div>
      <div className=' justify-between text-base text-beige'>
        <div
          onClick={onToggle}
          className={`transition-all ${
            isOpen ? 'bg-beige-50' : ''
          } cursor-pointer items-center justify-between`}
        >
          <div className='cursor-pointer rounded-t-md hover:bg-beige-50'>
            <div className={`flex justify-between px-4 py-3 text-black`}>
              <div className='text-sm font-normal text-gray-400'>{label}</div>
              <div
                className={`transform text-sm duration-150 ${textColor} transition-all ease-in-out ${
                  isOpen
                    ? '-translate-x-2 translate-y-2 opacity-0'
                    : 'translate-x-0 translate-y-0 opacity-100'
                }`}
              >
                {!value ? '+ Add' : value}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-100 ease-in-out ${
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
                            <FormControl>
                              <Input
                                {...field}
                                // value={value || ''}
                                //   placeholder='John Doe'
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
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
                      <Button type='submit' variant={'secondary'}>
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
