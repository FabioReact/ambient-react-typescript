import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './slices/citiesSlice'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    cities: citiesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch