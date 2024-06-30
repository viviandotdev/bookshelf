import { create } from 'zustand';

// Define the state type
type State = {
  isOpen: boolean;
  isLoading: boolean;
};

// Define the action type
type Action = {
  onOpen: () => void;
  onClose: () => void;
  setIsLoading: (isLoading: boolean) => void;
};

// Define the initial state
const initialState: State = {
  isOpen: false,
  isLoading: false,
};

// Create the Zustand store
const useProgressModal = create<State & Action>((set) => ({
  ...initialState,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, isLoading: false }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useProgressModal;
