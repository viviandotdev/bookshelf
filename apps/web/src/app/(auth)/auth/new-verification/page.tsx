import { verifyUser } from '@/modules/auth/actions/verify-user';
import { NewVerificationForm } from '@/modules/auth/components/new-verification-form';
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
