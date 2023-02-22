import HeroCard from '../components/HeroCard'
import Loader from '../components/Loader'
import SearchHeroesForm from '../components/SearchHeroesForm'
import Heading from '../Heading'
import { useLazyGetHeroesByNameQuery } from '../redux/api'

const Search = () => {
  const [searchHeroes, { isLoading, data: heroes, isError }] = useLazyGetHeroesByNameQuery()

  return (
    <section>
      <Heading>Search</Heading>
      <SearchHeroesForm callback={searchHeroes} />
      {isLoading && <Loader />}
      <Loader loading={isLoading} />
      {isError && <p className='text-red-500'>Houston, we have a problem</p>}
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
