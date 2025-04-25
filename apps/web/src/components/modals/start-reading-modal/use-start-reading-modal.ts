import { create } from 'zustand';

interface State {
    isOpen: boolean;
    userBookId: string;
    bookTitle: string;
    pageCount: number | null;
}

interface Actions {
    onOpen: (userBookId: string, bookTitle: string, pageCount: number | null) => void;
    onClose: () => void;
}

const initialState: State = {
    isOpen: false,
    userBookId: '',
    bookTitle: '',
    pageCount: null,
};

const useStartReadingModal = create<State & Actions>((set) => ({
    ...initialState,
    onOpen: (userBookId: string, bookTitle: string, pageCount: number | null) =>
        set({ isOpen: true, userBookId, bookTitle, pageCount }),
    onClose: () => set(initialState),
}));

export default useStartReadingModal;
