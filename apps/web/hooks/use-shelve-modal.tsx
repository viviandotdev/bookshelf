import { create } from "zustand";

interface ShelveModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSheleveModal = create<ShelveModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSheleveModal;
