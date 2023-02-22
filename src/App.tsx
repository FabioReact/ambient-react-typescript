import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContext from './context/auth-context'
import { Suspense, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { router } from './routes'
import Loader from './components/Loader'

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
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </AuthContext.Provider>
    </Provider>
  )
}

export default App
