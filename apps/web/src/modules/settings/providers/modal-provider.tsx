'use client';

import { useEffect, useState } from 'react';
import { ChangePasswordModal } from '../components/modals/change-password';
import { ChangeEmailModal } from '../components/modals/change-email';
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ChangePasswordModal />
      <ChangeEmailModal />
    </>
  );
};
