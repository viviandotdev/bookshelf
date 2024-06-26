import { BookParts } from '@/modules/bookshelves/types';
import { Book, Reading_Status, UserBookShelves } from '../graphql/graphql';
import { create } from 'zustand';

type State = {
  userId: string;
  bookId: string;
  userBookId: string;
  status: string;
  rating: number;
  book: BookParts;
  shelves: UserBookShelves[];
  isInLibrary: boolean;
};

type Action = {
  updateBookId: (bookId: State['bookId']) => void;
  updateUserBookId: (userBookId: State['userBookId']) => void;
  updateUserId: (userId: State['userId']) => void;
  updateStatus: (status: State['status']) => void;
  updateRating: (rating: State['rating']) => void;
  initShelves: (shelves: UserBookShelves[]) => void;
  setBook: (book: State['book']) => void;
  setIsInLibrary: (isInLibrary: State['isInLibrary']) => void;
  resetStore: () => void; // Action to reset the store
  initializeStore: (initialState: Partial<State>) => void; // Action to initialize the store
};

// Initial state
const initialState: State = {
  userId: '',
  bookId: '',
  userBookId: '',
  status: '',
  rating: 0,
  isInLibrary: false,
  book: {
    title: '',
    subtitle: '',
    authors: [],
    identifiers: [],
    covers: [],
    pageCount: 0,
  },
  shelves: [],
};

const useUserBookStore = create<State & Action>((set) => ({
  ...initialState,

  updateStatus: (status: string) => set(() => ({ status: status })),
  setIsInLibrary: (isInLibrary: boolean) => set(() => ({ isInLibrary })),
  updateUserBookId: (userBookId: string) =>
    set(() => ({ userBookId: userBookId })),
  updateRating: (rating: number) => set(() => ({ rating: rating })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
  initShelves: (shelves: UserBookShelves[]) =>
    set(() => ({ shelves: shelves })),
  setBook: (book: BookParts) => set(() => ({ book: book })),
  resetStore: () => set(() => ({ ...initialState })), // Reset the store to initial state
  initializeStore: (state: Partial<State>) => set(() => ({ ...state })), // Initialize the store with specific values
}));

export default useUserBookStore;
