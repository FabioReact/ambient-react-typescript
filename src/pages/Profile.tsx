import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'

const Profile = () => {
  const { accessToken } = useAuthContext()
  const navigate = useNavigate()
  useEffect(() => {
    if (accessToken === '') navigate('/login')
  }, [accessToken])

  return (
    <section>
      <h1>Profile</h1>
      <p>{accessToken}</p>
    </section>
  )
}

export default Profile
