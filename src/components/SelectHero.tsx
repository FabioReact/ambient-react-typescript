import { useEffect, useState } from 'react'
import { useLazyGetHeroesByNameQuery } from '../redux/api'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'
import HeroLabel from './HeroLabel'
import Loader from './Loader'
import SearchHeroesForm from './SearchHeroesForm'

type SelectHeroProps = {
  label?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSelect: (hero: Hero | undefined) => void
  hero: Hero | undefined
}

const SelectHero = ({ onSelect, hero, label = 'Player' }: SelectHeroProps) => {
  const [heroName, setHeroName] = useState('')

  const [searchHeroes, { data, isLoading, isFetching }] = useLazyGetHeroesByNameQuery()

  useEffect(() => {
    if (heroName) searchHeroes(heroName)
  }, [heroName])

  const onSubmitHandler = (name: string) => {
    setHeroName(name)
  }

  const selectHero = (heroId: string) => {
    const result = data?.find((hero) => hero.id === heroId)
    onSelect(result)
  }

  if (hero) {
    return (
      <div>
        <button onClick={() => onSelect(undefined)}>Change Hero</button>
        <HeroCard hero={hero} />
      </div>
    )
  }

  return (
    <div>
      <p>Select {label}</p>
      <SearchHeroesForm callback={onSubmitHandler} />
      <div className=''>
        <Loader loading={isLoading && isFetching} />
        {data?.map((hero) => (
          <HeroLabel onClick={selectHero} key={hero.id} name={hero.name} id={hero.id} />
        ))}
      </div>
    </div>
  )
}

export default SelectHero
