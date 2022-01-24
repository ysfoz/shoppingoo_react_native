import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    currentUser: null,
    isFetching: false,
    error: false,
    // jwtToken:null
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
    setTokenRedux:(state,action)=>{
      state.currentUser = action.payload;
      // state.jwtToken = state.currentUser.jwtToken
    },
    registerSuccess:(state) => {
      state.isFetching = false
      state.error = false;
    },
    loginSuccess: (state) => {
      state.isFetching = false;
      // state.currentUser = action.payload;
      // state.jwtToken = state.currentUser.jwtToken
      
    },
    logoutSuccess:(state)=>{
      state.error = false;
      state.currentUser = null
      // state.jwtToken = null;
    },
    deleteSuccess:(state)=>{
      state.error = false;
      state.isFetching = false;
      state.currentUser = null;
      // state.jwtToken = null;
    },
    // updateSuccess:(state,action)=>{
    //   state.error = false;
    //   state.isFetching =false
    //   state.currentUser = action.payload
    // }
   
  },
})

export const { getUserFailure, getUserStart, registerSuccess,loginSuccess,logoutSuccess,updateSuccess,deleteSuccess,setTokenRedux } = userSlice.actions

export default userSlice.reducer