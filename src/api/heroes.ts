import { Hero } from '../types/hero'
import { fetcher } from './fetcher'

export const getHeroes = (letter?: string): Promise<Hero[] | undefined> => {
  const query = letter ? `?name_like=^${letter}` : ''
  return fetcher.get(`http://localhost:4000/heroes${query}`)
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.error(err)
    })
}
