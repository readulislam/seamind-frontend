import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    switchLanguage(state, action) {
      state.language = action.payload;
    },
  },
  extraReducers(builder) {
    // builder
    //   .addCase(thunkFn.pending, (state, action) => {
    //
    //   .addCase(thunkFn.fulfilled, (state, action) => {
    //
    //   })
    //   .addCase(thunkFn.rejected, (state, action) => {
    //
    //   });
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
