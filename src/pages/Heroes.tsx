import { useEffect, useRef } from 'react'
import HeroCard from '../components/HeroCard'
import Heading from '../Heading'
import { useLazyGetHeroesByLetterQuery } from '../redux/api'

const arrayOfLetters: string[] = []
for (let i = 0; i < 26; i++) {
  arrayOfLetters.push(String.fromCharCode(65 + i))
}

const Heroes = () => {
  const mounted = useRef(false)
  const [getHeroes, { data: heroes }] = useLazyGetHeroesByLetterQuery()

  useEffect(() => {
    console.log('Premier rendu de HeroesPage')
    getHeroes('A')
    return () => {
      console.log('Avant destruction - tableau de dependance vide')
    }
  }, [])

  useEffect(() => {
    console.log('Premier rendu ou mise à jour de la variable heroes')
    if (mounted.current === true) {
      console.log('Uniquement lors de la mise à jour de la variable heroes')
    }
    mounted.current = true
    return () => {
      console.log('Avant destruction - variable observée heroes')
    }
  }, [heroes])

  const onClickHandler = (letter?: string) => {
    if (letter) getHeroes(letter)
  }

  return (
    <section>
      <Heading>Heroes</Heading>
      {/* <button onClick={onClickHandler}>Get Heroes</button> */}
      <ul className='flex justify-center gap-2 text-2xl font-thin my-4'>
        {arrayOfLetters.map((letter) => (
          <li className='cursor-pointer' onClick={() => onClickHandler(letter)} key={letter}>
            {letter}
          </li>
        ))}
      </ul>
      <div className='flex justify-center flex-wrap gap-4'>
        {heroes?.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  )
}

export default Heroes
