import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    handleDrawer: (state) => {
      state.open = !state.open;
    },
  },
});

export const { handleDrawer } = mainSlice.actions;

export default mainSlice.reducer;
