'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
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
import useChangePasswordModal from './use-change-password-modal';
import { changePasswordSchema } from '@/schemas/auth';
import { changePassword } from '@/modules/settings/actions/change-password';
import { toast } from '@/hooks/use-toast';
import { Icons } from '@/components/icons';
import React from 'react';

export const ChangePasswordModal = () => {
    const changePasswordModal = useChangePasswordModal();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof changePasswordSchema>>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            password: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
        startTransition(() => {
            changePassword(values)
                .then((data) => {
                    if (data.error) {
                        toast({
                            title: 'Uh oh! Something went wrong.',
                            variant: 'destructive',
                            description: `${data.error}`,
                        });
                    }
                    if (data.success) {
                        toast({
                            title: `Successfully updated password`,
                            variant: 'success',
                        });
                        changePasswordModal.onClose();
                        form.reset();
                    }
                })
        });
    };

    return (
        <Modal
            title={'Change password'}
            description='Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers.'
            isOpen={changePasswordModal.isOpen}
            onClose={() => {
                changePasswordModal.onClose();
                form.reset();
            }}
        >
            <div>
                <div className='space-y-4 py-2 pb-4'>
                    <div className='space-y-2'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Enter your current password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    disabled={isPending}
                                                    placeholder='Current password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='newPassword'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Enter a new password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    disabled={isPending}
                                                    placeholder='New password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='confirmPassword'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm your new password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    disabled={isPending}
                                                    placeholder='Confirm password'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='flex w-full items-center justify-end space-x-2 pt-6'>
                                    <Button
                                        type="button"
                                        variant='outline'
                                        label='Cancel'
                                        onClick={() => {
                                            changePasswordModal.onClose();
                                            form.reset();
                                        }}
                                    ></Button>
                                    <Button
                                        type='submit'
                                        disabled={isPending}
                                        variant='secondary'
                                    >
                                        {isPending ? (
                                            <React.Fragment key="loading">
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment key="save">Save</React.Fragment>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
