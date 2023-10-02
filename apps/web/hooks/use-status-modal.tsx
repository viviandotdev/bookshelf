import { create } from "zustand";

type State = {
  isOpen: boolean;
  title: string;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  updateTitle: (title: State["title"]) => void;
};

// interface StatusModalStore {
//   isOpen: boolean;
//   title: string;
//   onOpen: () => void;
//   onClose: () => void;
//   updateTitle: (title: State["title"]) => void;
// }

const useStatusModal = create<State & Action>((set) => ({
  title: "",
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  updateTitle: (title: string) => set(() => ({ title: title })),
}));

export default useStatusModal;
