import { Book, UserBookShelves } from '../graphql/graphql';
import { create } from 'zustand';

type State = {
  userId: string;
  bookId: string;
  status: string;
  rating: number;
  book: Book;
  shelves: UserBookShelves[];
};

type Action = {
  updateBookId: (bookId: State['bookId']) => void;
  updateUserId: (userId: State['userId']) => void;
  updateStatus: (status: State['status']) => void;
  updateRating: (rating: State['rating']) => void;
  initShelves: (shelves: UserBookShelves[]) => void;
  setBook: (book: State['book']) => void;
};

const useUserBookStore = create<State & Action>((set) => ({
  status: '',
  userId: '',
  bookId: '',
  rating: 0,
  book: {
    id: '',
    title: '',
    description: '',
    author: '',
    categories: '',
    coverImage: '',
    pageCount: 0,
    publishedDate: '',
    publisher: '',
    _count: {
      __typename: undefined,
      reviews: 0,
      userBook: 0,
    },
  },
  shelves: [],

  updateStatus: (status: string) => set(() => ({ status: status })),
  updateRating: (rating: number) => set(() => ({ rating: rating })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
  initShelves: (shelves: UserBookShelves[]) =>
    set(() => ({ shelves: shelves })),
  setBook: (book: Book) => set(() => ({ book: book })),
}));

export default useUserBookStore;
