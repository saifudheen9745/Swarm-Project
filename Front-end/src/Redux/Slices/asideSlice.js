import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aside:false
};

export const asideSlice = createSlice({
  name: "toggleAside",
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.aside = !state.aside
    }
    
  },
});

export const { toggleAside } = asideSlice.actions;
export default asideSlice.reducer;

export const asideReducer = (state) => state.persistedReducer.asideReducer;
