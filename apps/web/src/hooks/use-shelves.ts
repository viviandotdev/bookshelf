import { Shelf } from "@/graphql/graphql";
import { create } from "zustand";

type State = {
  selected: string;
  shelves: Shelf[];
};

type Action = {
  updateSelected: (selected: State["selected"]) => void;
  addShelf: (shelf: Shelf) => void;
  initShelves: (shelves: Shelf[]) => void;
  removeShelf: (id: string) => void;
  renameShelf: (id: string, name: string) => void;
  incrementShelfCount: (name: string) => void;
};

const useShelves = create<State & Action>((set) => ({
  selected: "",
  shelves: [],
  updateSelected: (selected: string) => set(() => ({ selected: selected })),
  addShelf: (shelf: Shelf) => {
    set((state: any) => ({
      shelves: [...state.shelves, shelf],
    }));
  },
  removeShelf: (id: string) => {
    set((state: any) => ({
      shelves: state.shelves.filter((s: Shelf) => s.id !== id),
    }));
  },
  renameShelf: (id: string, name: string) => {
    set((state: any) => ({
      shelves: state.shelves.map((s: Shelf) => {
        return s.id === id ? { ...s, name: name } : s;
      }),
    }));
  },
  incrementShelfCount: (name: string) => {
    set((state: any) => ({
      shelves: state.shelves.map((s: Shelf) => {
        return s.name === name
          ? {
              ...s,
              _count: {
                userBooks: s._count.userBooks + 1,
              },
            }
          : s;
      }),
    }));
  },
  initShelves: (shelves: Shelf[]) => set(() => ({ shelves: shelves })),
}));

export default useShelves;
