import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    currentUser: null,
    isFetching: false,
    error: false,
    jwtToken:null
  },
  reducers: {
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
      
    },
    getUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
    registerSuccess:(state) => {
      state.isFetching = false
      state.error = false;
    },
   
  },
})

export const { getUserFailure, getUserStart, registerSuccess } = counterSlice.actions

export default counterSlice.reducer