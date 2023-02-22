import { fetcher } from './fetcher'

export type UserRequest = {
  email: string
  password: string
}

export const register = (user: UserRequest) => fetcher.post('http://localhost:4000/register', user)

export const login = (user: UserRequest) => fetcher.post('http://localhost:4000/login', user)
