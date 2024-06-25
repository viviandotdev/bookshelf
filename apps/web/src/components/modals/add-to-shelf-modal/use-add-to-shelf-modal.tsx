import { Shelf, UserBookShelves } from '@/graphql/graphql';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
  isLoading: boolean;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  setIsLoading: (isLoading: boolean) => void;
};

const useAddToShelfModal = create<State & Action>((set) => ({
  isOpen: false,
  shelves: [],
  isLoading: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useAddToShelfModal;
