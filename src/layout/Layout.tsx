import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'text-red-600' : '')
  console.log('Render Layout')
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-2 text-2xl'>
          <li>
            <NavLink className={getActiveClass} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/heroes'>
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/search'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/battle'>
              Battle
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/cities'>
              Cities
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/profile'>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClass} to='/register'>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Copyright SuperHero Corp @2023</footer>
    </>
  )
}

export default Layout
