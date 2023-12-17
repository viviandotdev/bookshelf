
import { create } from "zustand";

type State = {
    isOpen: boolean;
    isEdit: boolean;
    editId?: string;
};

type Action = {
    onOpen: () => void;
    onClose: () => void;
    setEditId: (id: string) => void;
    onEdit: (id: string) => void;
};

const useCreateShelfModal = create<State & Action>((set) => ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    onOpen: () => set({ isOpen: true }),
    setEditId: (id: string) => set({ editId: id }),
    onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
    onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
}));

export default useCreateShelfModal;
