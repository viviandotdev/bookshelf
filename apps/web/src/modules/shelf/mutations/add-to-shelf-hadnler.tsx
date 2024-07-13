'use client';
import React from 'react';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import {
  Shelf,
  useGetMyBookShelvesLazyQuery,
  UserBookShelves,
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
  const { onOpen, setIsLoading } = useAddToShelfModal();
  const { setUserBook } = useUserBookStore();
  const { initShelves: initAllShelves } = useShelfStore();

  const [loadBookShelves] = useGetMyBookShelvesLazyQuery({
    variables: { where: { id: userBookId } },
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.getMyBookShelves) {
        setUserBook({
          shelves: data.getMyBookShelves as UserBookShelves[],
        });
      }
    },
  });

  const [loadShelves] = useShelvesLazyQuery({
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      if (data.shelves) {
        initAllShelves(data.shelves as Shelf[]);
      }
    },
  });

  const handleAddToShelf = async () => {
    setUserBook({ userBookId, bookTitle });
    onOpen();
    setIsLoading(true);
    await loadShelves();
    await loadBookShelves();
    setIsLoading(false);
  };

  return <>{children(handleAddToShelf)}</>;
};

export default AddToShelfHandler;
