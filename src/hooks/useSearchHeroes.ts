import { useState } from 'react'
import { searchHeroesByName } from '../api/heroes'
import { Hero } from '../types/hero'

const useSearchHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isError, setIsError] = useState(false)

  const searchHeroes = (value: string | undefined) => {
    if (value) {
      setLoading(true)
      setHeroes(null)
      setError('')
      setIsError(false)
      searchHeroesByName(value).then((data) => {
        if (data) {
          setHeroes(data)
        } else {
          setError('Server error')
          setIsError(true)
        }
        setLoading(false)
      })
    } else {
      setError('Empty field')
      setIsError(true)
    }
  }

  return {
    heroes,
    loading,
    error,
    isError,
    searchHeroes,
  }
}

		export { useSearchHeroes }
