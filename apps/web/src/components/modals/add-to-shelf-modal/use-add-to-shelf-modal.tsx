import { UserBookShelves } from "@/graphql/graphql";
import { create } from "zustand";

type State = {
    isOpen: boolean;
    shelves: UserBookShelves[];
};

type Action = {
    onOpen: () => void;
    onClose: () => void;
    setShelves: (shelves: UserBookShelves[]) => void;
};

const useAddToShelfModal = create<State & Action>((set) => ({
    isOpen: false,
    shelves: [],
    setShelves: (shelves: UserBookShelves[]) =>
        set(() => ({ shelves: shelves })),
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAddToShelfModal;
