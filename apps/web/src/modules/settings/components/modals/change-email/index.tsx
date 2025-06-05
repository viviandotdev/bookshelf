'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useTransition } from 'react';

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
import useChangeEmailModal from './use-change-email-modal';
import { useSession } from 'next-auth/react';
import { changeEmail } from '@/modules/settings/actions/change-email';
import { toast } from '@/hooks/use-toast';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { sendEmailCode } from '@/modules/settings/actions/send-email';

export const changeEmailSchema = z.object({
    email: z.string().min(1),
    code: z.optional(z.string().min(1)),
});

export const ChangeEmailModal = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const changeEmailModal = useChangeEmailModal();
    const [showCodeForm, setShowCodeForm] = useState(false);
    const { data: session, update } = useSession();
    const user = session?.user;

    useEffect(() => {
        form.reset({
            email: user?.email || undefined,
            code: undefined,
        });
    }, [changeEmailModal.isOpen]);

    const form = useForm<z.infer<typeof changeEmailSchema>>({
        resolver: zodResolver(changeEmailSchema),
        defaultValues: {
            email: user?.email || undefined,
            code: undefined,
        },
    });

    const onSubmitEmail = async (values: z.infer<typeof changeEmailSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            // Perform the email update logic here with the verification code
            sendEmailCode({ email: values.email })
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }
                    if (data.success) {
                        toast({
                            title: data.success,
                            variant: 'success',
                        });
                        setShowCodeForm(true);
                    }
                })
                .catch(() => setError('Something went wrong!'));
        });
    };

    const onSubmitVerificationCode = async (
        values: z.infer<typeof changeEmailSchema>
    ) => {
        startTransition(() => {
            // Perform the email update logic here with the verification code
            changeEmail({ email: values.email, code: values.code })
                .then(async (response) => {
                    if (response.error) {
                        setError(response.error);
                    }
                    if (response.success) {
                        const updatedUser = response.data.user;
                        await update({
                            user: {
                                ...session?.user,
                                email: updatedUser.email as string,
                                username: updatedUser.username as string,
                                name: updatedUser.name as string,
                                avatarImage: updatedUser.avatarImage as string,
                                refreshToken: response.data.refreshToken as string,
                                accessToken: response.data.accessToken as string,
                                expiresIn: response.data.expiresIn as number,
                            }
                        });
                        toast({
                            title: 'Success',
                            description: response.success,
                            variant: 'success',
                        });

                    }
                })
                .finally(() => {
                    // changeEmailModal.onClose();
                });
        });
    };

    return (
        <Modal
            title={'Change email'}
            description={
                showCodeForm
                    ? 'Please enter the verification code sent to your email.'
                    : "Please enter a new email, and we'll send you a verification code."
            }
            isOpen={changeEmailModal.isOpen}
            onClose={changeEmailModal.onClose}
        >
            <div>
                <div className='pb-4'>
                    <div className='space-y-2'>
                        <Form {...form}>
                            <form
                                onSubmit={
                                    form.getValues().code
                                        ? form.handleSubmit(onSubmitVerificationCode)
                                        : form.handleSubmit(onSubmitEmail)
                                }
                            >
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
                                                    placeholder='Enter new email'
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {showCodeForm && (
                                    <FormField
                                        control={form.control}
                                        name='code'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Verification Code</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isPending}
                                                        placeholder='Enter verification code'
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}
                                <FormError message={error} />
                                <FormSuccess message={success} />

                                <div className='flex w-full items-center justify-end space-x-2 pt-6'>
                                    <Button
                                        variant='outline'
                                        label='Cancel'
                                        onClick={changeEmailModal.onClose}
                                    ></Button>
                                    <Button
                                        disabled={isPending}
                                        label={
                                            showCodeForm ? 'Update Email' : 'Send verification code'
                                        }
                                        type='submit'
                                    ></Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
