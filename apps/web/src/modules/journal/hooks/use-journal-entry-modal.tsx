import { create } from "zustand";
interface useJournalEntryModalStore {
    isOpen: boolean;
    isEdit: boolean;
    editId?: string;
    journalEntry: {
        originalPage: number;
        originalPercent: number;
        page: number;
        percent: number;
        notes: string;
        date: Date;
    }
    onOpen: () => void;
    onEdit: (id: string) => void;
    onClose: () => void;

}

export const useJournalEntryModal = create<useJournalEntryModalStore>((set) => ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    journalEntry: {
        originalPage: 0,
        originalPercent: 0,
        page: 0,
        percent: 0,
        notes: "",
        date: new Date(),
    },
    onOpen: () => set({ isOpen: true }),
    onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
    onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
    setJournalEntry: (journalEntry: any) => set({ journalEntry })
}));
