'use client';
import React, { useEffect, useReducer } from 'react';
import { Modal } from '@/components/ui/modal';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import LogBookCard from './log-book-card';

interface LogBookModalProps {}

export const LogBookModal: React.FC<LogBookModalProps> = ({}) => {
  const { userBooks, isOpen, onClose, isLoading } = useLogBookModal();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (userBooks.length === 0) {
    content = <div>No books are currently being read.</div>;
  } else {
    content = (
      <div className='mt-2'>
        {userBooks.map((userBook, i) => (
          <div
            key={i}
            className={`flex cursor-pointer gap-2 py-2 ${
              i !== userBooks.length - 1 ? 'border-b' : ''
            }`}
          >
            <LogBookCard userBook={userBook} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={'Log a Book'}
        description={'Choose a book to log your reading progress'}
      >
        {content}
      </Modal>
    </>
  );
};

export default LogBookModal;
