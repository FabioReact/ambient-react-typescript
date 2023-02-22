import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hero } from '../types/hero'

// Define a service using a base URL and expected endpoints
export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getHeroesByName: builder.query<Hero[], string>({
      query: (name) => `heroes?name_like=${name}`,
    }),
    getHeroesByLetter: builder.query<Hero[], string>({
      query: (letter) => `heroes?name_like=^${letter}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetHeroesByNameQuery,
  useLazyGetHeroesByNameQuery,
  useGetHeroesByLetterQuery,
  useLazyGetHeroesByLetterQuery,
} = heroesApi
