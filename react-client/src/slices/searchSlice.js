import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    add: (state, action) => {
      const searchTerm = action.payload.originalArgs.search;
      if (state.searchTerm) {
        state[`${searchTerm}`].push(action.payload.data.collection.items);
      } else {
        state[`${searchTerm}`] = action.payload.data.collection.items;
      }
      return state;
    },
    clear: (state) => {
      state = {};
      return state;
    },
  },
})

export const { add, clear } = searchSlice.actions;

export default searchSlice.reducer;
