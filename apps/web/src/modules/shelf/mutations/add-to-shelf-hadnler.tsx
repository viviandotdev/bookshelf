// AddToShelfHandler.tsx
'use client';
import React from 'react';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import {
  useGetMyBookShelvesLazyQuery,
  useShelvesLazyQuery,
} from '@/graphql/graphql';
import useShelfStore from '@/stores/use-shelf-store';
import useUserBookStore from '@/stores/use-user-book-store';

interface AddToShelfHandlerProps {
  userBookId: string;
  bookTitle: string;
  children: (handleAddToShelf: () => void) => React.ReactNode;
}

const AddToShelfHandler: React.FC<AddToShelfHandlerProps> = ({
  userBookId,
  bookTitle,
  children,
}) => {
  const addToShelfModal = useAddToShelfModal();
  const {
    updateUserBookId,
    setBook,
    initShelves: initBookShelves,
  } = useUserBookStore();
  const { initShelves: initAllShelves } = useShelfStore();

  const [loadBookShelves] = useGetMyBookShelvesLazyQuery({
    variables: { where: { id: userBookId } },
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.getMyBookShelves) {
        initBookShelves(data.getMyBookShelves);
      }
    },
  });

  const [loadShelves] = useShelvesLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.shelves) {
        initAllShelves(data.shelves);
      }
    },
  });

  const handleAddToShelf = async () => {
    updateUserBookId(userBookId);
    setBook({ title: bookTitle });
    await loadShelves();
    await loadBookShelves();
    addToShelfModal.onOpen();
  };

  return <>{children(handleAddToShelf)}</>;
};

export default AddToShelfHandler;
