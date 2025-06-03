'use client';
// CollapsibleForm.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState, useTransition } from 'react';
import { useForm, Path } from 'react-hook-form';
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
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { SettingsSchema } from '@/schemas/auth';

type SettingsFieldName = keyof z.infer<typeof SettingsSchema>;

interface CollapsibleFormProps<T extends z.ZodType> {
    label: string;
    value: string;
    isLastSection?: boolean;
    isOpen: boolean;
    openForm: SettingsFieldName | '';
    onToggleForm: () => void;
    onChange: (value: string) => void;
    schema: T;
    fieldName: SettingsFieldName;
}

export const CollapsibleForm = <T extends z.ZodType>({
    label,
    value,
    openForm,
    isOpen,
    onToggleForm,
    onChange,
    schema,
    fieldName,
}: CollapsibleFormProps<T>) => {
    const [isPending, startTransition] = useTransition();
    const { update } = useSession();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const form = useForm<z.infer<T>>({
        resolver: zodResolver(schema),
        defaultValues: {
            [fieldName]: value,
        } as z.infer<T>,
    });

    useEffect(() => {
        if (openForm) {
            form.reset({
                [fieldName]: value,
            } as z.infer<T>);
        }
    }, [openForm, value, form, fieldName]);

    const onSubmit = (values: z.infer<T>) => {
        onToggleForm();

        startTransition(() => {
            // settings(values)
            //     .then((data) => {
            //         if (data.error) {
            //             setError(data.error);
            //         }

            //         if (data.success) {
            //             if (onChange && openForm) {
            onChange(values[fieldName] as string);
            //             }
            //             toast({
            //                 title: 'Success',
            //                 description: 'Your settings have been updated',
            //                 variant: 'success',
            //             });
            //             setSuccess(data.success);
            //         }
            //     })
            //     .catch(() => setError('Something went wrong!'));
        });
    };

    const renderFormControl = (field: any) => {
        if (fieldName === 'bio') {
            return (
                <FormControl>
                    <Textarea
                        {...field}
                        value={field.value || ''}
                        className='resize-none'
                        placeholder='Tell us a little bit about yourself'
                        disabled={isPending}
                    />
                </FormControl>
            );
        }
        return (
            <FormControl>
                <Input
                    {...field}
                    value={field.value || ''}
                    disabled={isPending}
                    className='rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-gray-400 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                />
            </FormControl>
        );
    };

    return (
        <div className='relative'>
            <div
                onClick={onToggleForm}
                className={cn(
                    'group cursor-pointer transition-colors duration-200',
                    isOpen ? 'bg-beige-50' : 'hover:bg-beige-50/50'
                )}
            >
                <div className='flex items-center justify-between px-4 py-3'>
                    <span className='min-w-20 text-sm font-normal text-gray-400'>
                        {label}
                    </span>
                    <motion.span
                        className={cn(
                            'text-sm',
                            value ? 'text-black' : 'text-gray-400'
                        )}
                        animate={{
                            opacity: isOpen ? 0 : 1,
                            y: isOpen ? 8 : 0
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        {value || '+ Add'}
                    </motion.span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className='overflow-hidden'
                    >
                        <div className='bg-beige-50 border-b border-s rounded-b-md border-gray-200'>
                            {openForm !== '' && (
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className='px-4'>
                                        <FormField
                                            control={form.control}
                                            name={fieldName as Path<z.infer<T>>}
                                            render={({ field }) => (
                                                <FormItem className='mt-0'>
                                                    {renderFormControl(field)}
                                                    <FormMessage setError={setError} />
                                                    {error && (
                                                        <p className='pb-1 pt-2 text-sm text-red-400'>
                                                            {error}
                                                        </p>
                                                    )}
                                                </FormItem>
                                            )}
                                        />
                                        <div className='flex justify-end gap-2 py-3'>
                                            <Button
                                                type='button'
                                                onClick={onToggleForm}
                                                className='border border-beige-100 bg-white text-black hover:bg-white hover:text-black'
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type='submit'
                                                disabled={!!error}
                                                variant='secondary'
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CollapsibleForm;
