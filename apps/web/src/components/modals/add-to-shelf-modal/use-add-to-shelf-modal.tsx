import { UserBookShelves } from '@/graphql/graphql';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
  isLoading: boolean;
  bookTitle: string;
  userBookId: string;
  shelves: UserBookShelves[];
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  setBookTitle: (bookTitle: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setShelves: (shelves: UserBookShelves[]) => void;
  setUserBookId: (userBookId: State['userBookId']) => void;
};

const useAddToShelfModal = create<State & Action>((set) => ({
  bookTitle: '',
  userBookId: '',
  isOpen: false,
  shelves: [],
  isLoading: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setBookTitle: (title: string) => set({ bookTitle: title }),
  setUserBookId: (userBookId: string) =>
    set(() => ({ userBookId: userBookId })),
  setShelves: (shelves: UserBookShelves[]) => set(() => ({ shelves: shelves })),
}));

export default useAddToShelfModal;
