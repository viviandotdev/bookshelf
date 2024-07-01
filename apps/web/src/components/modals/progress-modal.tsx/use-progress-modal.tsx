import { ReadDate } from '@/graphql/graphql';
import { create } from 'zustand';

//store the state
// of each in progress book
// Define the state type
type State = {
  isOpen: boolean;
  readDates: ReadDate[];
};

// Define the action type
type Action = {
  onOpen: () => void;
  onClose: () => void;
  storeReadDates: (readDates: ReadDate[]) => void;
};

// Define the initial state
const initialState: State = {
  isOpen: false,
  readDates: [],
};

// Create the Zustand store
const useProgressModal = create<State & Action>((set) => ({
  ...initialState,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  storeReadDates: async (readDates) => {
    if (!readDates.length) {
      return;
    }
    set((state) => ({
      readDates: [...state.readDates, ...readDates],
    }));
  },
}));

export default useProgressModal;
