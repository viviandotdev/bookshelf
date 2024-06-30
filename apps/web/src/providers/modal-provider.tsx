'use client';

import { useEffect, useState } from 'react';
import { AddToShelfModal } from '@/components/modals/add-to-shelf-modal';
import { CreateShelfModal } from '@/modules/shelf/components/modals/create-shelf-modal';
import LogBookModal from '@/components/modals/log-book-modal';
import ProgressModal from '@/components/modals/progress-modal.tsx';

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
      <LogBookModal />
      <AddToShelfModal />
      <ProgressModal />
      <CreateShelfModal />
    </>
  );
};
