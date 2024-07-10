'use client';

import { useEffect, useState } from 'react';
import { ChangePasswordModal } from '../components/modals/change-password';
import { ChangeEmailModal } from '../components/modals/change-email';
import { ChangeAvatarModal } from '../components/modals/change-avatar';
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
      <ChangeAvatarModal />
    </>
  );
};
