import { configureStore } from '@reduxjs/toolkit'
import { heroesApi } from './api'
import citiesReducer from './slices/citiesSlice'

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    cities: citiesReducer,
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heroesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
