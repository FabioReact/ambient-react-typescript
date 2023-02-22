import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { register as registerUser, UserRequest } from '../api/auth'

const schema = yup
  .object({
    email: yup.string().required().min(8).max(40),
    password: yup.string().required(),
    passwordConfirmation: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required()

type Inputs = yup.InferType<typeof schema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  // Mutation - POST /register
  const { data, mutate } = useMutation({
    mutationFn: (data: UserRequest) => registerUser(data),
  })

  console.log(data)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<Inputs> = ({ passwordConfirmation, ...data }) => {
    console.log(data)
    mutate(data)
  }

  console.log(errors)

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && <span>This field is required</span>}
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm password:</label>
          <input
            type='password'
            id='passwordConfirmation'
            {...register('passwordConfirmation', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Register
