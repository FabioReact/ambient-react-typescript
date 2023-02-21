import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { searchHeroesByName } from '../api/heroes'

type HeroLabelProps = {
  id: string
  name: string
}

const HeroLabel = ({ id, name }: HeroLabelProps) => {
  return (
    <p className='border rounded p-2 my-1 border-gray-700 cursor-pointer hover:bg-gray-100'>
      <span className='font-semibold text-gray-500 pr-2 my-2'>#{id}</span>- {name}
    </p>
  )
}

const Battle = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['searchHeroesByName', searchInputRef.current?.value],
    queryFn: () => searchHeroesByName(searchInputRef.current?.value || ''),
    enabled: Boolean(searchInputRef.current?.value),
  })
  console.log(data, isLoading, isError)

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    refetch()
  }

  return (
    <section>
      <h1>Battle</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='search'>Search by name:</label>
          <input ref={searchInputRef} type='text' id='search' name='search' />
        </fieldset>
        <button>Search</button>
      </form>
      <div className='flex'>
        {data?.map((hero) => (
          <HeroLabel key={hero.id} name={hero.name} id={hero.id} />
        ))}
      </div>
    </section>
  )
}

export default Battle
