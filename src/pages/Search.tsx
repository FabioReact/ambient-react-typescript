import { useRef } from 'react'
import HeroCard from '../components/HeroCard'
import Loader from '../components/Loader'
import SearchHeroesForm from '../components/SearchHeroesForm'
import Heading from '../Heading'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

const Search = () => {
  const { loading, heroes, error, isError, searchHeroes } = useSearchHeroes()

  return (
    <section>
      <Heading>Search</Heading>
      <SearchHeroesForm callback={searchHeroes} />
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
