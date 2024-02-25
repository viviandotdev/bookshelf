'use client';

import { useEffect, useState } from 'react';
import { AddToShelfModal } from '@/components/modals/add-to-shelf-modal';
import { JouranlEntryModal } from '@/components/modals/journal-entry-modal';
import CreateReviewModal from '@/components/modals/create-review-modal';
import { CreateShelfModal } from '@/modules/shelf/components/modals/create-shelf-modal';
import LogBookModal from '@/components/modals/log-book-modal';

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
      <JouranlEntryModal />
      <CreateReviewModal />
      <CreateShelfModal />
    </>
  );
};
