'use client';
import React, { useState, useTransition } from 'react';
import { Textarea } from '@/components/ui/textarea';
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
import { settingsBioSchema } from '@/schemas/auth';
import FormContainer from './collapsible-form';

type BioFormData = z.infer<typeof settingsBioSchema>;

interface BioFormProps {
    value: string;
    isOpen: boolean;
    onToggleForm: () => void;
}

export const BioForm: React.FC<BioFormProps> = ({
    value,
    isOpen,
    onToggleForm,
}) => {
    const [isPending, startTransition] = useTransition();
    const { data: session, update } = useSession();
    const [error, setError] = useState<string | undefined>();
    const [formValue, setFormValue] = useState(value);

    const form = useForm<BioFormData>({
        resolver: zodResolver(settingsBioSchema),
        defaultValues: {
            bio: value,
        },
    });

    const onSubmit = (values: BioFormData) => {
        const newValue = values.bio || '';
        setFormValue(newValue);

        startTransition(() => {
            settings(values)
                .then(async (data) => {
                    if (data.error) {
                        toast({
                            title: 'Failed',
                            description: 'Failed to update bio',
                            variant: 'destructive',
                        });
                    }

                    if (data.success) {
                        await update({
                            user: {
                                ...session?.user,
                                bio: newValue,
                            }
                        })
                        toast({
                            title: 'Bio was updated',
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
            label="Bio"
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
                        name="bio"
                        render={({ field }) => (
                            <FormItem className='mt-0'>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        value={field.value || ''}
                                        className='resize-none'
                                        placeholder='Tell us a little bit about yourself'
                                        disabled={isPending}
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

export default BioForm;
