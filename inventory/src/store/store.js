import { configureStore } from '@reduxjs/toolkit'
import inventorySlice from '../slice/inventorySlice'
export const store = configureStore({
  reducer: {
    inventorySlice:inventorySlice
  },
})