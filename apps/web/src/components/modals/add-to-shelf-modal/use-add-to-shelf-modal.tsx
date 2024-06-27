import { UserBookShelves } from '@/graphql/graphql';
import { create } from 'zustand';

// Define the state type
type State = {
  isOpen: boolean;
  isLoading: boolean;
  bookTitle: string;
  userBookId: string;
  shelves: UserBookShelves[];
};

// Define the action type
type Action = {
  onOpen: () => void;
  onClose: () => void;
  setBookTitle: (bookTitle: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setShelves: (shelves: UserBookShelves[]) => void;
  setUserBookId: (userBookId: State['userBookId']) => void;
  initializeStore: (state: Partial<State>) => void;
};

// Define the initial state
const initialState: State = {
  isOpen: false,
  isLoading: false,
  bookTitle: '',
  userBookId: '',
  shelves: [],
};

// Create the Zustand store
const useAddToShelfModal = create<State & Action>((set) => ({
  ...initialState,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setBookTitle: (bookTitle: string) => set({ bookTitle }),
  setUserBookId: (userBookId: string) => set({ userBookId }),
  setShelves: (shelves: UserBookShelves[]) => set({ shelves }),
  resetStore: () => set(() => ({ ...initialState })), // Reset the store to initial state
  initializeStore: (state: Partial<State>) => set(() => ({ ...state })), // Initialize the store with specific values
}));

export default useAddToShelfModal;
