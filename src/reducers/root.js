import { createSlice } from '@reduxjs/toolkit';

export const rootSlice = createSlice({
  name: 'root',
  initialState: {
    parksList: [],
  },
  reducers: {
    setParksList: (state, action) => {
      state.parksList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setParksList } = rootSlice.actions;

export default rootSlice.reducer;
