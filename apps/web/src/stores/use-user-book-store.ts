import { UserBookShelves } from '../graphql/graphql';
import { create } from 'zustand';

type State = {
    userBookId: string;
    status: string;
    rating: number;
    book: {
        title: string;
        pageCount: number;
    };
    bookTitle: string;
    shelves: UserBookShelves[];
    isInLibrary: boolean;
    isLiked: boolean;
    isOwned: boolean;
};

type Action = {
    resetStore: () => void; // Action to reset the store
    setUserBook: (initialState: Partial<State>) => void; // Action to initialize the store
};

// Initial state
const initialState: State = {
    isInLibrary: false,
    isLiked: false,
    isOwned: false,
    userBookId: '',
    status: '',
    rating: 0,
    book: {
        title: '',
        pageCount: 0,
    },
    bookTitle: '',
    shelves: [],
};

const useUserBookStore = create<State & Action>((set) => ({
    ...initialState,
    resetStore: () => set(() => ({ ...initialState })), // Reset the store to initial state
    setUserBook: (state: Partial<State>) => set(() => ({ ...state })), // Initialize the store with specific values
}));

export default useUserBookStore;
