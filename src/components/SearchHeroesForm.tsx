import { useRef } from 'react'

type SearchHeroesFormProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback: Function
}

const SearchHeroesForm = ({ callback }: SearchHeroesFormProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()
    // Optional chaining
    callback(searchInputRef.current?.value)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <fieldset>
        <label htmlFor='search'>Search by name:</label>
        <input ref={searchInputRef} type='text' id='search' name='search' />
      </fieldset>
      <button>Search</button>
    </form>
  )
}

export default SearchHeroesForm
