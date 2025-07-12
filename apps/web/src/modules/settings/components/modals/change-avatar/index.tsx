'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useTransition } from 'react';
import { Modal } from '@/components/ui/modal';
import { Form, FormField } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import useChangeAvatarModal from './use-change-avatar';
import { ImagePicker } from './image-picker';
import { useSession } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';
import { settings } from '@/modules/settings/actions/settings';
import { Icons } from '@/components/icons';

export const changeAvatarSchema = z.object({
    avatarImage: z.string().min(1),
});
const DEFAULT_AVATAR = 'https://webgradients.com/public/webgradients_png/029%20Everlasting%20Sky.png';
export const ChangeAvatarModal = () => {
    const { data: session, update } = useSession();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();
    const changeAvatarModal = useChangeAvatarModal();

    useEffect(() => {
        form.reset({
            avatarImage: session?.user.avatarImage || DEFAULT_AVATAR, // Set default image
        });
    }, [changeAvatarModal.isOpen]);

    const form = useForm<z.infer<typeof changeAvatarSchema>>({
        resolver: zodResolver(changeAvatarSchema),
        defaultValues: {
            avatarImage: session?.user.avatarImage || DEFAULT_AVATAR, // Set default image
        },
    });

    const onSubmit = async (values: z.infer<typeof changeAvatarSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            settings({ avatarImage: values.avatarImage })
                .then(async (data) => {
                    if (data.error) {
                        toast({
                            title: 'Failed',
                            description: 'Failed to update settings',
                            variant: 'destructive',
                        });
                    }

                    if (data.success) {
                        await update({
                            user: {
                                ...session?.user,
                                avatarImage: values.avatarImage,
                            }
                        })
                        toast({
                            title: `Your avatar has been updated`,
                            variant: 'success',
                        });
                        changeAvatarModal.onClose();
                    }
                })
        });
    };

    return (
        <Modal
            title={'Change Avatar'}
            description={'Select a gradient as your avatar'}
            isOpen={changeAvatarModal.isOpen}
            onClose={changeAvatarModal.onClose}
        >
            <div>
                <div className='space-y-2'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='avatarImage'
                                render={({ field }) => (
                                    <ImagePicker
                                        value={field.value}
                                        id='avatar-image'
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            <FormError message={error} />
                            <FormSuccess message={success} />

                            <div className='flex w-full items-center justify-end space-x-2 pt-6'>
                                <Button
                                    className='border cursor-pointer border-gray-200 bg-white text-black hover:bg-white hover:text-black'
                                    onClick={changeAvatarModal.onClose}
                                >Cancel</Button>
                                <Button
                                    type='submit'
                                    disabled={!!error || isPending}
                                    variant='secondary'
                                    className='cursor-pointer'
                                >
                                    {isPending ? (
                                        <>
                                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                        </>
                                    ) : (
                                        'Save'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    );
};
