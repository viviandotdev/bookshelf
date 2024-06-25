'use client';
import React from 'react';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import {
  useGetMyBookShelvesLazyQuery,
  useShelvesLazyQuery,
} from '@/graphql/graphql';
import useShelfStore from '@/stores/use-shelf-store';

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
  const { setShelves, setBookTitle, setUserBookId, onOpen, setIsLoading } =
    useAddToShelfModal();

  const { initShelves: initAllShelves } = useShelfStore();

  const [loadBookShelves] = useGetMyBookShelvesLazyQuery({
    variables: { where: { id: userBookId } },
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.getMyBookShelves) {
        setShelves(data.getMyBookShelves);
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
    setUserBookId(userBookId);
    setBookTitle(bookTitle);
    onOpen();
    setIsLoading(true);
    await loadShelves();
    await loadBookShelves();
    setIsLoading(false);
  };

  return <>{children(handleAddToShelf)}</>;
};

export default AddToShelfHandler;
