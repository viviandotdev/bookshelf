import { create } from "zustand";

type State = {
  selected: string;
};

type Action = {
  updateSelected: (selected: State["selected"]) => void;
};

const useSidebar = create<State & Action>((set) => ({
  selected: "",
  updateSelected: (selected: string) => set(() => ({ selected: selected })),
}));

export default useSidebar;
