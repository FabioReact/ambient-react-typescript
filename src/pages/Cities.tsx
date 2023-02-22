import { yupResolver } from '@hookform/resolvers/yup'
import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCity, deleteCity, getCities } from '../redux/slices/citiesSlice'

const schema = yup.object({
  city: yup.string().required(),
})

type Inputs = yup.InferType<typeof schema>

const Cities = () => {
  const cityInputRef = useRef<HTMLInputElement | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const dispatch = useAppDispatch()
  const onSubmitHandler: SubmitHandler<Inputs> = (formData) => {
    dispatch(addCity(formData.city))
    cityInputRef.current?.focus()
  }
  const cities = useAppSelector(getCities)
  const onDeleteCity = (id: number) => {
    dispatch(deleteCity(id))
  }

  const { ref, ...rest } = register('city')

  return (
    <section>
      <h1>Cities to visit</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='city'>City to add:</label>
          <input
            {...rest}
            name='city'
            ref={(e) => {
              ref(e)
              cityInputRef.current = e // you can still assign to ref
            }}
            type='text'
            id='city'
          />
          {errors.city && <p className='text-sm text-red-500'>{errors.city.message}</p>}
        </fieldset>
        <button>Add</button>
      </form>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name} <button onClick={() => onDeleteCity(city.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cities
