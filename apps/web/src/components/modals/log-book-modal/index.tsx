'use client';
import React, { useEffect, useReducer } from 'react';
import { Modal } from '@/components/ui/modal';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import LogBookCard from './log-book-card';
import { NetworkStatus } from '@apollo/client';
import useLoadBooks from '@/modules/bookshelves/queries/use-load-books';
interface LogBookModalProps {}

export const LogBookModal: React.FC<LogBookModalProps> = ({}) => {
  const logBookModal = useLogBookModal();
  const { loadBooks, booksData, networkStatus } = useLoadBooks();
  useEffect(() => {
    const loadData = async () => {
      const { data } = await loadBooks({
        variables: {
          offset: 0,
          limit: BOOKS_PAGE_SIZE,
          where: {
            status: {
              equals: 'Currently Reading',
            },
          },
        },
      });
      console.log(data);
    };

    loadData();
  }, [loadBooks, logBookModal.isOpen]);
  const userBooks = booksData && booksData?.getUserBooks?.userBooks;
  const loading = networkStatus === NetworkStatus.loading;

  return (
    <>
      <Modal
        isOpen={logBookModal.isOpen}
        onClose={logBookModal.onClose}
        title={'Log a Book'}
        description={'Currently Reading Books'}
      >
        {/* Display books in a list */}
        <div className='mt-2'>
          {userBooks && userBooks.length > 0 ? (
            userBooks.map((userBook, i) => (
              <div
                key={i}
                className={`flex cursor-pointer gap-2 py-2 ${
                  i !== userBooks.length - 1 ? 'border-b' : ''
                }`}
              >
                <LogBookCard userBook={userBook} />
              </div>
            ))
          ) : (
            <p>No books are currently being read.</p>
          )}
        </div>
      </Modal>
    </>
  );
};
export default LogBookModal;
