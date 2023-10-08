import { NavItem } from "@/types";
import { create } from "zustand";

type State = {
  selected: string;
  shelves: NavItem[];
};

type Action = {
  updateSelected: (selected: State["selected"]) => void;
  addShelf: (shelf: NavItem) => void;
  initShelves: (shelves: NavItem[]) => void;
  removeShelf: (id: string) => void;
  renameShelf: (id: string, name: string) => void;
};

const useSidebar = create<State & Action>((set) => ({
  selected: "",
  shelves: [],
  updateSelected: (selected: string) => set(() => ({ selected: selected })),
  addShelf: (shelf: NavItem) => {
    set((state: any) => ({
      shelves: [...state.shelves, shelf],
    }));
  },
  removeShelf: (id: string) => {
    set((state: any) => ({
      shelves: state.shelves.filter((s: NavItem) => s.id !== id),
    }));
  },
  renameShelf: (id: string, name: string) => {
    set((state: any) => ({
      shelves: state.shelves.map((s: NavItem) => {
        return s.id === id ? { ...s, title: name } : s;
      }),
    }));
  },
  initShelves: (shelves: NavItem[]) => set(() => ({ shelves: shelves })),
}));

export default useSidebar;
