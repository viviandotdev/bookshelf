import { create } from "zustand";

type State = {
  isOpen: boolean;
  status: string;
  userId: string;
  bookId: string;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  updateStatus: (status: State["status"]) => void;
  updateBookId: (bookId: State["bookId"]) => void;
  updateUserId: (userId: State["userId"]) => void;
};

const useStatusModal = create<State & Action>((set) => ({
  status: "",
  isOpen: false,
  userId: "",
  bookId: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  updateStatus: (status: string) => set(() => ({ status: status })),
  updateBookId: (bookId: string) => set(() => ({ bookId: bookId })),
  updateUserId: (userId: string) => set(() => ({ userId: userId })),
}));

export default useStatusModal;
