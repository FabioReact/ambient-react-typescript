import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login, UserRequest } from '../api/auth'
import { useAuthContext } from '../context/auth-context'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { mutate, data } = useMutation({
    mutationFn: (user: UserRequest) => login(user),
  })
  const { accessToken, setAccessToken } = useAuthContext()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    mutate(formData)
  }
  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setAccessToken(data.data.accessToken)
    }
  }, [data])

  useEffect(() => {
    if (accessToken) {
      navigate('/profile')
    }
  }, [accessToken])

  console.log(data)

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'Email is required', minLength: 8, maxLength: 40 })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  )
}

export default Login
