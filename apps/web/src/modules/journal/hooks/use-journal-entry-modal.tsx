import { create } from "zustand";
interface useJournalEntryModalStore {
    isOpen: boolean;
    isEdit: boolean;
    editId?: string;
    onOpen: () => void;
    onEdit: (id: string) => void;
    onClose: () => void;
}

export const useJournalEntryModal = create<useJournalEntryModalStore>((set) => ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    onOpen: () => set({ isOpen: true }),
    onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
    onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
}));
