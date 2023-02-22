import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCity, deleteCity, getCities } from '../redux/slices/citiesSlice'

const schema = yup.object({
  city: yup.string().required(),
})

type Inputs = yup.InferType<typeof schema>

const Cities = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const dispatch = useAppDispatch()
  const onSubmitHandler: SubmitHandler<Inputs> = (formData) => {
    dispatch(addCity(formData.city))
    setValue('city', '')
  }
  const cities = useAppSelector(getCities)
  const onDeleteCity = (id: number) => {
    dispatch(deleteCity(id))
  }

  return (
    <section>
      <h1>Cities to visit</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='city'>City to add:</label>
          <input {...register('city')} type='text' id='city' />
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
