import { create } from 'zustand';

interface State {
    isOpen: boolean;
    userBookId: string;
    bookTitle: string;
}

interface Actions {
    onOpen: (userBookId: string, bookTitle: string) => void;
    onClose: () => void;
}

const initialState: State = {
    isOpen: false,
    userBookId: '',
    bookTitle: '',
};

const useStartReadingModal = create<State & Actions>((set) => ({
    ...initialState,
    onOpen: (userBookId: string, bookTitle: string) => set({ isOpen: true, userBookId, bookTitle }),
    onClose: () => set(initialState),
}));

export default useStartReadingModal;
