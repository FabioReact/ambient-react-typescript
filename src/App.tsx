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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='search' element={<Search />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
