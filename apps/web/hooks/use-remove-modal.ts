import { create } from "zustand";

type State = {
  isOpen: boolean;
  userId: string;
  bookId: string;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
};

const useRemoveModal = create<State & Action>((set) => ({
  isOpen: false,
  userId: "",
  bookId: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
}));

export default useRemoveModal;
