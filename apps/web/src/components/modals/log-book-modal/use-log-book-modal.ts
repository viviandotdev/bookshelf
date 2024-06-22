import { UserBook } from '@/graphql/graphql';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
  isEdit: boolean;
  editId?: string;
  userBooks: UserBook[];
  isLoading: boolean;
};

type Action = {
  setUserBooks: (userBooks: UserBook[]) => void;
  onOpen: () => void;
  onClose: () => void;
  onEdit: (id: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const useLogBookModal = create<State & Action>((set) => ({
  isOpen: false,
  isEdit: false,
  editId: undefined,
  userBooks: [],
  isLoading: false,
  onOpen: () => set({ isOpen: true }),
  onEdit: (id: string) => set({ isOpen: true, isEdit: true, editId: id }),
  onClose: () => set({ isOpen: false, isEdit: false, editId: undefined }),
  setUserBooks: (userBooks: UserBook[]) => set({ userBooks }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useLogBookModal;
