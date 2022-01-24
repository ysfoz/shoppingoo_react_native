import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userRedux'
import productRedux from './productRedux'

export const store = configureStore({
  reducer: {
      user:userReducer,
      product:productRedux,
  },
})