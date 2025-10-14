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
      <header className="h-16 bg-[#111827]">
        <div className="mx-auto flex h-full items-center justify-center px-4 ">
          <div className="flex justify-start">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-white"
            >
              {showMenu ? 'Close' : 'Menu'}
            </button>
            <div className="mt-96">{showMenu && <MobileNav />}</div>
          </div>

          {/* Logo section */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex size-24 items-center justify-center rounded-full bg-[#111827]">
              <Link to="/Home">
                <Logo className="size-12" />
              </Link>
            </div>
          </div>

          {/* The user login icon */}
          {!isLoginPage && (
            <div className=" absolute right-8 items-center justify-end">
              <ProfileIcon />
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
