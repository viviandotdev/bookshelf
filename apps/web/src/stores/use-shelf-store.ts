import { Shelf } from '../graphql/graphql';
import { create } from 'zustand';

// Define a type for the shelf state
interface ShelfState {
    loadingRoute: boolean;
    selected: Shelf | null;
    shelves: Shelf[];
    library: Shelf[];
}
type ShelfAction = {
    setLoadingRoute: (payload: boolean) => void;
    updateSelected: (payload: string) => void;
    addShelf: (shelf: Shelf) => void;
    removeShelf: (shelfId: string) => void;
    renameShelf: (payload: { slug: string; name: string }) => void;
    decrementLibraryCount: (name: string) => void;
    incrementLibraryCount: (name: string) => void;
    decrementShelfCount: (name: string) => void;
    incrementShelfCount: (name: string) => void;
    initLibrary: (payload: Shelf[]) => void;
    initShelves: (payload: Shelf[]) => void;
};

const useShelfStore = create<ShelfState & ShelfAction>((set) => ({
    loadingRoute: false,
    selected: null,
    shelves: [],
    library: [],

    setLoadingRoute: (payload: boolean) => set({ loadingRoute: payload }),
    updateSelected: (payload: string) =>
        set((state) => {
            const selectedFromShelves = state.shelves.find(
                (shelf) => shelf.slug === payload
            );
            const selectedFromLibrary = state.library.find(
                (shelf) => shelf.slug === payload
            );

            return {
                selected: selectedFromShelves || selectedFromLibrary || null,
            };
        }),
    addShelf: (shelf: Shelf) =>
        set((state) => ({
            shelves: [...state.shelves, shelf],
        })),

    removeShelf: (shelfId: string) =>
        set((state) => ({
            shelves: state.shelves.filter((s) => s.id !== shelfId),
        })),

    renameShelf: ({ slug, name }: { slug: string; name: string }) =>
        set((state) => ({
            shelves: state.shelves.map((s) => {
                if (s.slug === slug) {
                    return { ...s, name };
                }
                return s;
            }),
        })),

    decrementLibraryCount: (name: string) =>
        set((state) => ({
            library: state.library.map((s) => {
                if (s.name === name) {
                    return { ...s, _count: { userBooks: s._count.userBooks - 1 } };
                }
                return s;
            }),
        })),

    incrementLibraryCount: (name: string) =>
        set((state) => ({
            library: state.library.map((s) => {
                if (s.name === name) {
                    return { ...s, _count: { userBooks: s._count.userBooks + 1 } };
                }
                return s;
            }),
        })),

    decrementShelfCount: (name: string) =>
        set((state) => ({
            shelves: state.shelves.map((s) => {
                if (s.name === name) {
                    return { ...s, _count: { userBooks: s._count.userBooks - 1 } };
                }
                return s;
            }),
        })),

    incrementShelfCount: (name: string) =>
        set((state) => ({
            shelves: state.shelves.map((s) => {
                if (s.name === name) {
                    return { ...s, _count: { userBooks: s._count.userBooks + 1 } };
                }
                return s;
            }),
        })),

    initLibrary: (payload: Shelf[]) => set({ library: payload }),

    initShelves: (payload: Shelf[]) => set({ shelves: payload }),
}));

export default useShelfStore;
