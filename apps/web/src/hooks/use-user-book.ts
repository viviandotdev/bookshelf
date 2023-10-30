import {
  Book,
  JournalEntry,
  Shelf,
  UserBookShelves,
} from "@/src/graphql/graphql";
import { create } from "zustand";

type State = {
  userId: string;
  bookId: string;
  status: string;
  data: Book;
  shelves: UserBookShelves[];
};

type Action = {
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
  updateStatus: (status: State["status"]) => void;
  setUserBook: (data: State["data"]) => void;
  initShelves: (shelves: UserBookShelves[]) => void;
};

const useUserBook = create<State & Action>((set) => ({
  status: "",
  userId: "",
  bookId: "",
  data: {
    id: "",
    title: "",
    description: "",
    _count: {
      userBook: 0,
    },
  },
  shelves: [],

  updateStatus: (status: string) => set(() => ({ status: status })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  setUserBook: (data: Book) => set(() => ({ data: data })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
  initShelves: (shelves: UserBookShelves[]) =>
    set(() => ({ shelves: shelves })),
}));

export default useUserBook;
