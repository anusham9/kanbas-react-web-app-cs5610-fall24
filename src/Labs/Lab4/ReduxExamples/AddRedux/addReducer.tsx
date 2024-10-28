import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  sum: 0,
};
const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});

// (state.sum) --add({a,b}) --> along with event we can have optional paramater (payload)
export const { add } = addSlice.actions;
export default addSlice.reducer;
