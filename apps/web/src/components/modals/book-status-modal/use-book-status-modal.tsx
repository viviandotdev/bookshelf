import { create } from 'zustand';

type State = {
    isOpen: boolean;
    isLoading: boolean;
};

type Action = {
    onOpen: () => void;
    onClose: () => void;
    setIsLoading: (isLoading: boolean) => void;
};

const useBookStatusModal = create<State & Action>((set) => ({
    isOpen: false,
    isLoading: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useBookStatusModal;
