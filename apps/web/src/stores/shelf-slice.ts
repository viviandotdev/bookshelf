import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Shelf } from "../../graphql/graphql";
import { RootState } from ".";

// Define a type for the slice state
interface ShelfState {
  selected: string;
  shelves: Shelf[];
  library: Shelf[];
  currentPage: number;
}

// Define the initial state using that type
const initialState: ShelfState = {
  selected: "",
  currentPage: 0,
  shelves: [],
  library: [],
};

const shelvesSlice = createSlice({
  name: "shelves",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
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
    decrementLibraryCount: (state, action) => {
      const { name } = action.payload;
      const shelf = state.library.find((s) => s.name === name);
      if (shelf) {
        shelf._count.userBooks -= 1;
      }
    },
    incrementLibraryCount: (state, action) => {
      const { name } = action.payload;
      const shelf = state.library.find((s) => s.name === name);
      if (shelf) {
        shelf._count.userBooks += 1;
      }
    },
    decrementShelfCount: (state, action) => {
      const { name } = action.payload;
      const shelf = state.shelves.find((s) => s.name === name);
      if (shelf) {
        shelf._count.userBooks -= 1;
      }
    },
    incrementShelfCount: (state, action) => {
      const { name } = action.payload;
      const shelf = state.shelves.find((s) => s.name === name);
      if (shelf) {
        shelf._count.userBooks += 1;
      }
    },
    initLibrary: (state, action) => {
      state.library = action.payload;
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
  decrementShelfCount,
  decrementLibraryCount,
  incrementLibraryCount,
  initShelves,
  initLibrary,
  setCurrentPage,
} = shelvesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectShelves = (state: RootState) => state.shelf.shelves;
export const shelfReducer = shelvesSlice.reducer;
