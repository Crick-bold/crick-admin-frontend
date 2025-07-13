// toastSlice.js
import { createSlice } from '@reduxjs/toolkit'

const toastSlice = createSlice({
  name: 'toast',
  initialState: null, // Holds the current toast configuration or null
  reducers: {
    setToast: (state, action) => action.payload, // Set the toast
    clearToast: () => null // Clear the toast
  }
})

export const { setToast, clearToast } = toastSlice.actions
export default toastSlice.reducer
