import { NavItem } from "@/types";
import { create } from "zustand";

type State = {
  selected: string;
  shelves: NavItem[];
};

type Action = {
  updateSelected: (selected: State["selected"]) => void;
  updateShelves: (shelf: NavItem) => void;
  initShelves: (shelves: NavItem[]) => void;
};

const useSidebar = create<State & Action>((set) => ({
  selected: "",
  shelves: [],
  updateSelected: (selected: string) => set(() => ({ selected: selected })),
  updateShelves: (shelf: NavItem) => {
    set((state: any) => ({
      shelves: [...state.shelves, shelf],
    }));
  },
  initShelves: (shelves: NavItem[]) => set(() => ({ shelves: shelves })),
}));

export default useSidebar;
