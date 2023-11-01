import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Shelf } from "@/graphql/graphql";
import { RootState } from ".";

// Define a type for the slice state
interface ShelfState {
  selected: string;
  shelves: Shelf[];
}

// Define the initial state using that type
const initialState: ShelfState = {
  selected: "",
  shelves: [],
};

const shelvesSlice = createSlice({
  name: "shelves",
  initialState,
  reducers: {
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
    addShelf: (state, action) => {
      state.shelves.push(action.payload);
    },
    removeShelf: (state, action) => {
      state.shelves = state.shelves.filter((s) => s.id !== action.payload);
    },
    renameShelf: (state, action) => {
      const { id, name } = action.payload;
      const shelf = state.shelves.find((s) => s.id === id);
      if (shelf) {
        shelf.name = name;
      }
    },
    incrementShelfCount: (state, action) => {
      const { name } = action.payload;
      const shelf = state.shelves.find((s) => s.name === name);
      if (shelf) {
        shelf._count.userBooks += 1;
      }
    },
    initShelves: (state, action) => {
      state.shelves = action.payload;
    },
  },
});

export const {
  updateSelected,
  addShelf,
  removeShelf,
  renameShelf,
  incrementShelfCount,
  initShelves,
} = shelvesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectShelves = (state: RootState) => state.shelf.shelves;
export const shelfReducer = shelvesSlice.reducer;
