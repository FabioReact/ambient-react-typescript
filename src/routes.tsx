import Layout from './layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('./pages/Home'))
const Search = lazy(() => import('./pages/Search'))
const Battle = lazy(() => import('./pages/Battle'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Profile = lazy(() => import('./pages/Profile'))
const Cities = lazy(() => import('./pages/Cities'))
const Heroes = lazy(() => import('./pages/Heroes'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='search' element={<Search />} />
      <Route path='battle' element={<Battle />} />
      <Route path='cities' element={<Cities />} />
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>,
  ),
)
