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
   
  },
})

export const {  } = counterSlice.actions

export default counterSlice.reducer