import { useRef } from 'react'
import { searchHeroesByName } from '../api/heroes'
import HeroCard from '../components/HeroCard'
import Loader from '../components/Loader'
import Heading from '../Heading'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { loading, heroes, error, isError, searchHeroes } = useSearchHeroes()

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    // Optional chaining
    const value = searchInputRef.current?.value
    searchHeroes(value)
  }

  return (
    <section>
      <Heading>Search</Heading>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='search'>Search by name:</label>
          <input ref={searchInputRef} type='text' id='search' name='search' />
        </fieldset>
        <button>Search</button>
      </form>
      {loading && <Loader />}
      <Loader loading={loading} />
      {isError && <p className='text-red-500'>Houston, we have a problem: {error}</p>}
      <div className='flex justify-center flex-wrap gap-4'>
        {heroes?.length === 0 && <p>No hero found</p>}
        {heroes?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  )
}

export default Search
