import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type Cities = {
  name: string
  id: number
}

// Define a type for the slice state
type CitiesState = {
  citiesToVisit: Cities[]
}

// Define the initial state using that type
const initialState: CitiesState = {
  citiesToVisit: [
    {
      name: 'Tokyo',
      id: 1,
    },
  ],
}

export const citiesSlice = createSlice({
  name: 'cities',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.citiesToVisit.push({
        name: action.payload,
        id: Date.now(),
      })
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.citiesToVisit.findIndex((city) => city.id === action.payload)
      state.citiesToVisit.splice(indexToDelete, 1)
      // state.citiesToVisit = state.citiesToVisit.filter((city) => city.id !== action.payload)
    },
  },
})

export const { addCity, deleteCity } = citiesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getCities = (state: RootState) => state.cities.citiesToVisit

export default citiesSlice.reducer
