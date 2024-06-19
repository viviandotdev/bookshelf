import { BookParts } from '@/modules/bookshelves/types';
import { Book, Reading_Status, UserBookShelves } from '../graphql/graphql';
import { create } from 'zustand';

type State = {
  userId: string;
  bookId: string;
  userBookId: string;
  status: Reading_Status;
  rating: number;
  book: BookParts;
  shelves: UserBookShelves[];
};

type Action = {
  updateBookId: (bookId: State['bookId']) => void;
  updateUserBookId: (userBookId: State['userBookId']) => void;
  updateUserId: (userId: State['userId']) => void;
  updateStatus: (status: State['status']) => void;
  updateRating: (rating: State['rating']) => void;
  initShelves: (shelves: UserBookShelves[]) => void;
  setBook: (book: State['book']) => void;
};

const useUserBookStore = create<State & Action>((set) => ({
  id: '',
  status: Reading_Status.WantToRead,
  userId: '',
  userBookId: '',
  bookId: '',
  rating: 0,
  book: {
    title: '',
    subtitle: '',
    authors: [],
    identifiers: [],
    covers: [],
    pageCount: 0,
  },
  shelves: [],

  updateStatus: (status: Reading_Status) => set(() => ({ status: status })),
  updateUserBookId: (userBookId: string) =>
    set(() => ({ userBookId: userBookId })),
  updateRating: (rating: number) => set(() => ({ rating: rating })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
  initShelves: (shelves: UserBookShelves[]) =>
    set(() => ({ shelves: shelves })),
  setBook: (book: BookParts) => set(() => ({ book: book })),
}));

export default useUserBookStore;
