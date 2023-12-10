import { Book, UserBookShelves } from "../graphql/graphql";
import { create } from "zustand";

type State = {
  userId: string;
  bookId: string;
  status: string;
  rating: number;
  data: Book;
  shelves: UserBookShelves[];
};

type Action = {
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
  updateStatus: (status: State["status"]) => void;
  updateRating: (rating: State["rating"]) => void;
  setUserBook: (data: State["data"]) => void;
  initShelves: (shelves: UserBookShelves[]) => void;
};

const useUserBookStore = create<State & Action>((set) => ({
  status: "",
  userId: "",
  bookId: "",
  rating: 0,
  data: {
    id: "",
    title: "",
    description: "",
    author: "",
    categories: "",
    coverImage: "",
    pageCount: 0,
    publishedDate: "",
    publisher: "",
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
  setUserBook: (data: Book) => set(() => ({ data: data })),
  initShelves: (shelves: UserBookShelves[]) =>
    set(() => ({ shelves: shelves })),
}));

export default useUserBookStore;
