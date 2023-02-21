import { useState } from 'react'
import SelectHero from '../components/SelectHero'
import { Hero } from '../types/hero'

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Hero>()
  const [playerTwo, setPlayerTwo] = useState<Hero>()

  return (
    <section>
      <h1>Battle</h1>
      <div className='flex gap-12 justify-center'>
        <SelectHero hero={playerOne} label='Player One' onSelect={setPlayerOne} />
        {playerOne && playerTwo && <button>Fight</button>}
        <SelectHero hero={playerTwo} label='Player Two' onSelect={setPlayerTwo} />
      </div>
    </section>
  )
}

export default Battle
