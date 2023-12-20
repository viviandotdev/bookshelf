
import { create } from "zustand";

interface useCreateShelfModalStore {
    isOpen: boolean;
    isEdit: boolean;
    shelf?: {
        id: string;
        name: string;
    }
    onOpen: () => void;
    onClose: () => void;
    setEditShelf: (shelf: ShelfType) => void;
    onEdit: (shelf: ShelfType) => void;
}

type ShelfType = useCreateShelfModalStore['shelf']

const useCreateShelfModal = create<useCreateShelfModalStore>((set) => ({
    isOpen: false,
    isEdit: false,
    editShelf: undefined,
    onOpen: () => set({ isOpen: true }),
    setEditShelf: (shelf: ShelfType) => set({ shelf: shelf }),
    onEdit: (shelf: ShelfType) => set({ isOpen: true, isEdit: true, shelf: shelf }),
    onClose: () => set({ isOpen: false, isEdit: false, shelf: undefined }),
}));

export default useCreateShelfModal;
