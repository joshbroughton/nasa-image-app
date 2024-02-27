import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.data.collection.items)
      return state
    },
    clear: (state) => {
      state = []
    },
  },
})

export const { add, clear } = searchSlice.actions;

export default searchSlice.reducer;
