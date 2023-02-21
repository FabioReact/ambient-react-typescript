import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'text-red-600' : '')
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
        </ul>
      </nav>
      <Outlet />
      <footer>Copyright SuperHero Corp @2023</footer>
    </>
  )
}

export default Layout
