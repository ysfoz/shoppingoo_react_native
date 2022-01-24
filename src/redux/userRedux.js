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
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.jwtToken = state.currentUser.jwtToken
      
    },
    logoutSuccess:(state)=>{
      state.error = false;
      state.currentUser = null
      state.jwtToken = null;
    },
   
  },
})

export const { getUserFailure, getUserStart, registerSuccess,loginSuccess,logoutSuccess } = counterSlice.actions

export default counterSlice.reducer