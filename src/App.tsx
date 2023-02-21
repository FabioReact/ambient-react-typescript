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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='search' element={<Search />} />
      <Route path='battle' element={<Battle />} />
    </Route>,
  ),
)

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
