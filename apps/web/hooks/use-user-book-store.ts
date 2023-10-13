import { Shelf } from "@/graphql/graphql";
import { create } from "zustand";

type State = {
  userId: string;
  bookId: string;
  status: string;
  shelves: Shelf[];
};

type Action = {
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
  updateStatus: (status: State["status"]) => void;
  initShelves: (shelves: Shelf[]) => void;
};

const useUserBook = create<State & Action>((set) => ({
  status: "",
  userId: "",
  bookId: "",
  shelves: [],
  updateStatus: (status: string) => set(() => ({ status: status })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
  initShelves: (shelves: Shelf[]) => set(() => ({ shelves: shelves })),
}));

export default useUserBook;
