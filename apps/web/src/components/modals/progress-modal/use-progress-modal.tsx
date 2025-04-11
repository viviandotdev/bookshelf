import { Progress_Type, ReadDate } from '@/graphql/graphql';
import { create } from 'zustand';

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
    updateReadingProgressStore: (
        readingProgressId: string,
        type: Progress_Type,
        progress: number
    ) => void;
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
    storeReadDates: (readDates) => {
        if (!readDates.length) {
            return;
        }
        set((state) => ({
            readDates: [...state.readDates, ...readDates],
        }));
    },
    updateReadingProgressStore: (readingProgressId, type, progress) => {
        set((state) => ({
            readDates: state.readDates.map((rd) =>
                rd.readingProgress?.id === readingProgressId
                    ? {
                        ...rd,
                        readingProgress: {
                            ...rd.readingProgress,
                            type,
                            progress,
                        },
                    }
                    : rd
            ),
        }));
    },
}));

export default useProgressModal;
