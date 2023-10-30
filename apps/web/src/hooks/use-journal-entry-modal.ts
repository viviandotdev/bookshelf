import { create } from "zustand";

type State = {
  isOpen: boolean;
  isEdit: boolean;
  onEdit: () => void;
  onClose: () => void;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
};

const useJouranlEntryModal = create<State & Action>((set) => ({
  isOpen: false,
  isEdit: false,
  onOpen: () => set({ isOpen: true }),
  onEdit: () => set({ isOpen: true, isEdit: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useJouranlEntryModal;
