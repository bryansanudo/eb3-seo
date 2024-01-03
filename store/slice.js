import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "values",
  initialState: {
    languages: "en",
  },
  reducers: {
    savelanguage: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { savelanguage } = Slice.actions;
