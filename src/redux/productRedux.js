import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    cat: null,
  },
  reducers: {
    setCat: (state,action) => {
      state.cat = action.payload;
    },
  },
});

export const { setCat } = productSlice.actions;
export default productSlice.reducer;
