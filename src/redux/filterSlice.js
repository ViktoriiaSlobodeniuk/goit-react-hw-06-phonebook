import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      // state = action.payload;
      return action.payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
