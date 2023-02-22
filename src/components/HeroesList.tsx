import { memo, useDeferredValue } from 'react'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

type HeroesListProps = {
  heroes: Hero[]
}

const HeroesList = ({ heroes }: HeroesListProps) => {
  console.log('Render de HeroesList')
  const defferedHeroes = useDeferredValue(heroes)
  return (
    <div className='flex justify-center flex-wrap gap-4'>
      {defferedHeroes?.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  )
}

export default memo(HeroesList)
