'use client';
import React, { useState, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { settings } from '../../actions/settings';
import { useSession } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';
import { settingsLocationSchema } from '@/schemas/auth';
import FormContainer from './collapsible-form';

type LocationFormData = z.infer<typeof settingsLocationSchema>;

interface LocationFormProps {
    value: string;
    isOpen: boolean;
    onToggleForm: () => void;
}

export const LocationForm: React.FC<LocationFormProps> = ({
    value,
    isOpen,
    onToggleForm,
}) => {
    const [isPending, startTransition] = useTransition();
    const { data: session, update } = useSession();
    const [error, setError] = useState<string | undefined>();
    const [formValue, setFormValue] = useState(value);

    const form = useForm<LocationFormData>({
        resolver: zodResolver(settingsLocationSchema),
        defaultValues: {
            location: value,
        },
    });

    const onSubmit = (values: LocationFormData) => {
        const newValue = values.location || '';
        setFormValue(newValue);

        startTransition(() => {
            settings(values)
                .then(async (data) => {
                    if (data.error) {
                        toast({
                            title: 'Failed',
                            description: 'Failed to update location',
                            variant: 'destructive',
                        });
                    }

                    if (data.success) {
                        await update({
                            user: {
                                ...session?.user,
                                location: newValue,
                            }
                        })
                        toast({
                            title: 'Location was updated',
                            variant: 'success',
                        });
                    }
                })
                .finally(() => {
                    onToggleForm();
                });
        });
    };

    const handleSubmit = () => {
        form.handleSubmit(onSubmit)();
    };

    const handleCancel = () => {
        form.reset();
        onToggleForm();
    };

    return (
        <FormContainer
            label="Location"
            value={formValue}
            isOpen={isOpen}
            onToggleForm={onToggleForm}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            isPending={isPending}
            hasError={!!error || !form.formState.isValid}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className='mt-0'>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        disabled={isPending}
                                        className='rounded-md border border-gray-100 bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-gray-400 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                                    />
                                </FormControl>
                                <FormMessage setError={setError} />
                                {error && (
                                    <p className='pb-1 pt-2 text-sm text-red-400'>
                                        {error}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </FormContainer>
    );
};

export default LocationForm;
