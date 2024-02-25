import { create } from 'zustand';

type State = {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  onEdit: (id: string) => void;
};

const useLogBookModal = create<State & Action>((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  onOpen: () => set({ isOpen: true }),
  onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false }),
}));

export default useLogBookModal;
