import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filters;

export const { changeFilter } = filterSlice.actions;

export const FiltersReducer = filterSlice.reducer;
