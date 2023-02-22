import Heroes from './pages/Heroes'
import Layout from './layout/Layout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Battle from './pages/Battle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthContext from './context/auth-context'
import Profile from './pages/Profile'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Cities from './pages/Cities'

const router = createBrowserRouter(
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

const client = new QueryClient()

function App() {
  const [accessToken, setAccessToken] = useState('')
  return (
    <Provider store={store}>
      <AuthContext.Provider
        value={{
          accessToken,
          setAccessToken,
        }}
      >
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContext.Provider>
    </Provider>
  )
}

export default App
