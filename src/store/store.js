import { configureStore } from '@reduxjs/toolkit'
import { climaSlice } from './'

	export const store = configureStore({
  	reducer: {
        clima: climaSlice.reducer
    },
})