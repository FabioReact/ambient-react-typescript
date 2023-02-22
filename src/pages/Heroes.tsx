import { memo, useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react'
import HeroesList from '../components/HeroesList'
import Heading from '../Heading'
import { useLazyGetHeroesByLetterQuery } from '../redux/api'
import { isPrime } from '../utils/isPrime'

const arrayOfLetters: string[] = []
for (let i = 0; i < 26; i++) {
  arrayOfLetters.push(String.fromCharCode(65 + i))
}

const IncrementButton = ({ callback }: { callback: any; log: any }) => {
  console.log('Render du button')
  return <button onClick={() => callback((c: number) => c + 1)}>Increment</button>
}

const IncrementButtonMemo = memo(IncrementButton)

const Heroes = () => {
  const mounted = useRef(false)
  const [filter, setFilter] = useState('')
  const [isPending, startTransition] = useTransition()
  const [getHeroes, { data: heroes }] = useLazyGetHeroesByLetterQuery()
  const [counter, setcounter] = useState(0)

  // useCallback permet de memoiser une fonction tant que les valeurs du tableau de dependance ne changent pas
  const logMemo = useCallback(() => {
    console.log('Some logger', counter)
  }, [counter])

  // useMemo permet de memoiser le resultat de la fonction tant que les valeurs du tableau de dependance ne changent pas
  const result = useMemo(() => isPrime(34866), [])

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
      <h2>Counter: {counter}</h2>
      <h2>Is prime: {result}</h2>
      <IncrementButtonMemo callback={setcounter} log={logMemo} />
      <input
        className='border-black border-2'
        type='text'
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          startTransition(() => {
            // startTransition permet de declarer les changements a l'interieur du bloc comme non urgent et donc de differer leur affichage afin de garder l'UI fluide
            setFilter(e.target.value)
          })
        }}
      />
      <ul className='flex justify-center gap-2 text-2xl font-thin my-4'>
        {arrayOfLetters.map((letter) => (
          <li className='cursor-pointer' onClick={() => onClickHandler(letter)} key={letter}>
            {letter}
          </li>
        ))}
      </ul>
      {isPending && <div>Filtering</div>}
      {heroes && (
        <HeroesList
          heroes={heroes.filter((hero) => hero.name.toLowerCase().includes(filter.toLowerCase()))}
        />
      )}
    </section>
  )
}

export default Heroes
