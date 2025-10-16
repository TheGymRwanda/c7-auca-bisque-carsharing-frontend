import { useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'
import Logo from '../assets/Logo'

const Header = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <header className="flex h-16 flex-row justify-between rounded-b-xl bg-[#111827] p-4">
        <div>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white"
          >
            {showMenu ? 'Close' : 'Menu'}
          </button>{' '}
        </div>
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full bg-[#111827] p-3">
          <Link to="/" className="">
            {<Logo />}
          </Link>
        </div>
        <div>{!isLoginPage && <ProfileIcon />}</div>
      </header>
      <div>{showMenu && <MobileNav />}</div>
    </>
  )
}

export default Header
