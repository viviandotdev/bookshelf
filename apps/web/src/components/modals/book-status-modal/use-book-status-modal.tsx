import { BookCountsResponse } from '@/graphql/graphql';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
  bookCounts?: BookCountsResponse;
  isLoading: boolean;
};

type Action = {
  onOpen: () => void;
  onClose: () => void;
  onEdit: (id: string) => void;
  setBookCounts: (bookCounts: BookCountsResponse) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const useBookStatusModal = create<State & Action>((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  bookCounts: undefined,
  isLoading: false,
  onOpen: () => set({ isOpen: true }),
  onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false }),
  setBookCounts: (bookCounts: BookCountsResponse) =>
    set({ bookCounts: bookCounts }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useBookStatusModal;
