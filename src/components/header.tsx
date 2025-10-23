import { useState } from 'react'
import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import MobileNav from './MobileNav'
import MenuIcon from '../assets/MenuIcon'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <header className="relative bg-[#111827] h-16">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        {/* Logo section */}
        <div className="flex w-full items-center justify-center sm:w-auto sm:justify-start">
          <div className="flex items-center justify-center rounded-full bg-[#111827] size-24 sm:size-32">
            <Logo className="size-12 sm:size-24 sm:pt-8" />
          </div>
        </div>

        {/* Menu + Profile */}
        {!isLoginPage && (
          <div className="absolute top-0 left-0 flex w-full items-center justify-between px-4 h-16 md:hidden">
            {/* Left: MenuIcon */}
            <button type="button" onClick={toggleMenu} className="p-2">
              <MenuIcon />
            </button>

            {/* Right: ProfileIcon */}
            <ProfileIcon />
          </div>
        )}
      </div>

      {/* MobileNav toggle */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 z-50 md:hidden">
          <MobileNav />
        </div>
      )}
    </header>
  )
}

export default Header
