import { create } from "zustand";

type State = {
  userId: string;
  bookId: string;
  status: string;
};

type Action = {
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
  updateStatus: (status: State["status"]) => void;
};

const useUserBook = create<State & Action>((set) => ({
  status: "",
  userId: "",
  bookId: "",
  updateStatus: (status: string) => set(() => ({ status: status })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
}));

export default useUserBook;
