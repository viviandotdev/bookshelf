import { Shelf, UserBookShelves } from '@/graphql/graphql';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
};

const useAddToShelfModal = create<State & Action>((set) => ({
  isOpen: false,
  shelves: [],
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddToShelfModal;
