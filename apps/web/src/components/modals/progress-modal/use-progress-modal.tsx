import { create } from 'zustand';

// Define the reading data type
type ReadingData = {
    latestRead: any;
    latestSession: any;
    lastUpdated: number;
};

// Define the state type
type State = {
    isOpen: boolean;
    // Centralized reading data per userBook
    readingData: Record<string, ReadingData>;
    // Current book being edited
    currentBook: { userBookId: string; bookTitle: string; book: any } | null;
};

// Define the action type
type Action = {
    onOpen: () => void;
    onClose: () => void;
    // Centralized actions
    setCurrentBook: (book: { userBookId: string; bookTitle: string; book: any }) => void;
    updateReadingData: (userBookId: string, read: any, session: any) => void;
    invalidateReadingData: (userBookId: string) => void;
    getReadingData: (userBookId: string) => ReadingData | null;
};

// Define the initial state
const initialState: State = {
    isOpen: false,
    readingData: {},
    currentBook: null,
};

// Create the Zustand store
const useProgressModal = create<State & Action>((set, get) => ({
    ...initialState,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    // Centralized actions
    setCurrentBook: (book) => set({ currentBook: book }),
    updateReadingData: (userBookId, read, session) => {
        set((state) => ({
            readingData: {
                ...state.readingData,
                [userBookId]: {
                    latestRead: read,
                    latestSession: session,
                    lastUpdated: Date.now(),
                },
            },
        }));
    },
    invalidateReadingData: (userBookId) => {
        set((state) => {
            const newReadingData = { ...state.readingData };
            delete newReadingData[userBookId];
            return { readingData: newReadingData };
        });
    },
    getReadingData: (userBookId) => {
        const state = get();
        return state.readingData[userBookId] || null;
    },
}));

export default useProgressModal;
