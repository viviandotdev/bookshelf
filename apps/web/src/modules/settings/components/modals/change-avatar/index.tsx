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
import { changeAvatar } from '@/modules/settings/actions/change-avatar';
import { toast } from '@/hooks/use-toast';

export const changeAvatarSchema = z.object({
  image: z.string().min(1),
});

export const ChangeAvatarModal = () => {
  const { data: session, update } = useSession();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const changeAvatarModal = useChangeAvatarModal();

  useEffect(() => {
    form.reset({
      image: session?.user.avatarImage, // Set default image
    });
  }, [changeAvatarModal.isOpen]);

  const form = useForm<z.infer<typeof changeAvatarSchema>>({
    resolver: zodResolver(changeAvatarSchema),
    defaultValues: {
      image: session?.user.avatarImage, // Set default image
    },
  });

  const onSubmit = async (values: z.infer<typeof changeAvatarSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      // Perform the email update logic here with the verification code
      changeAvatar({ image: values.image })
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            changeAvatarModal.onClose();
            toast({
              title: data.success,
              variant: 'success',
            });
            // update the client seession
            update({
              avatarImage: form.getValues().image,
            });
          }
        })
        .catch(() => setError('Something went wrong!'));
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
                name='image'
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
                  className='border border-gray-200 bg-white text-black hover:bg-white hover:text-black'
                  label='Cancel'
                  onClick={changeAvatarModal.onClose}
                ></Button>
                <Button
                  disabled={isPending}
                  variant={'secondary'}
                  label={'Submit'}
                  type='submit'
                ></Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
