'use client';
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
import { sendEmailCode } from '@/modules/settings/actions/send-email';
import { changeEmailSchema, sendCodeSchema } from '@/schemas/auth';

export const ChangeEmailModal = () => {
    const [error, setError] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const changeEmailModal = useChangeEmailModal();
    const [showCodeForm, setShowCodeForm] = useState(false);
    const { data: session, update } = useSession();

    const form = useForm({
        defaultValues: {
            email: '',
            code: '',
        },
        mode: 'onChange',
    });

    useEffect(() => {
        if (!changeEmailModal.isOpen) {
            form.reset();
            setError('');
            setShowCodeForm(false);
        }
    }, [changeEmailModal.isOpen, form]);

    const onSubmitEmail = async (values: { email: string }) => {


        setError('');
        startTransition(() => {
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
                });
        });
    };

    const onSubmitVerificationCode = async (values: { email: string; code: string }) => {

        startTransition(() => {
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
                        changeEmailModal.onClose();
                    }
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
            onClose={() => {
                changeEmailModal.onClose();
            }}
        >
            <div>
                <div className='space-y-2'>
                    <Form {...form}>
                        <form
                            onSubmit={
                                showCodeForm
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
                                                disabled={isPending || showCodeForm}
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
                            <Button
                                className='flex w-full items-center mt-4'
                                disabled={isPending}
                                type='submit'
                            >
                                {showCodeForm ? 'Change Email' : 'Send verification code'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal >
    );
};
