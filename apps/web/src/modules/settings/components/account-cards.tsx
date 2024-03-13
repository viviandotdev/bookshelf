'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import useChangeEmailModal from './modals/change-email/use-change-email-modal';
import useChangePasswordModal from './modals/change-password/use-change-password-modal';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

interface AccountCardsProps {
    config: {
        title: string;
        info: string;
        icon: any;
        button: string;
    };
}

export const AccountCards: React.FC<AccountCardsProps> = ({ config }) => {
    // get the user session
    const { data } = useSession();
    const [email, setEmail] = useState<string>(data?.user.email || '');
    useEffect(() => {
        setEmail(data?.user.email);
    }, [data]);
    const changePasswordModal = useChangePasswordModal();
    const changeEmailModal = useChangeEmailModal();
    const handleClick = () => {
        if (config.title === 'Password') {
            changePasswordModal.onOpen();
        } else {
            changeEmailModal.onOpen();
        }
    };

    return (
        <div className='mb-4 flex cursor-pointer justify-between rounded-md border border-gray-100 bg-white px-4 py-3 text-sm shadow-sm'>
            <div>
                <div className='flex items-center'>
                    <div className='align-middle'>
                        {<config.icon className={cn('mr-2 h-4 w-4')} />}
                    </div>
                    {config.title}
                </div>
                <p className='text-gray-500'>
                    {config.title == 'Password'
                        ? config.info
                        : data?.user.email
                            ? data?.user.email
                            : config.info}
                </p>
            </div>
            <Button variant='secondary' onClick={handleClick}>
                {config.button}
            </Button>
        </div>
    );
};
export default AccountCards;
