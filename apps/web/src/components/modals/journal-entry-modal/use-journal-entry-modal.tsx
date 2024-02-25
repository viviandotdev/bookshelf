import { create } from 'zustand';

interface useJournalEntryModalStore {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
  onOpen: () => void;
  onEdit: (id: string) => void;
  onClose: () => void;
  journalEntry: {
    originalPage: number;
    originalPercent: number;
    page: number;
    pagesRead: number;
    percent: number;
    notes: '';
    date: Date;
  };
  setJournalEntry: (journalEntry: any) => void;
}

type JournalEntryType = useJournalEntryModalStore['journalEntry'];

export const useJournalEntryModal = create<useJournalEntryModalStore>(
  (set) => ({
    isOpen: false,
    isEdit: false,
    editId: undefined,
    journalEntry: {
      originalPage: 0,
      originalPercent: 0,
      pagesRead: 0,
      page: 0,
      percent: 0,
      notes: '',
      date: new Date(),
    },
    onOpen: () => set({ isOpen: true }),
    setJournalEntry: (journalEntry: JournalEntryType) =>
      set({ journalEntry: journalEntry }),
    onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
    onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
  })
);
