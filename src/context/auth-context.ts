import { createContext, useContext } from 'react'

type AuthContextType = {
  accessToken: string
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType>({
  accessToken: 'TOKEN',
  setAccessToken: () => null,
})

export const useAuthContext = () => useContext(AuthContext)

export default AuthContext
