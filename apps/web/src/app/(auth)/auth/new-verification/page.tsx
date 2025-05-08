import { NewVerificationForm } from '@/modules/auth/components/auth-forms/new-verification-form';
import React from 'react';

const NewVerificationPage = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    return (
        <React.StrictMode>
            <NewVerificationForm />
        </React.StrictMode>
    );
};

export default NewVerificationPage;
