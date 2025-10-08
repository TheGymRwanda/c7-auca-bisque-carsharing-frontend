import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <header className="h-16 bg-[#111827]">
      <div className="mx-auto flex h-full items-center justify-between px-4 ">
        {/* Logo section */}
        <div className="flex w-full items-center justify-center sm:w-auto sm:justify-start ">
          <div className=" flex h-24 w-24 items-center  justify-center rounded-full bg-[#111827] sm:h-32 sm:w-32 ">
            {/* <Link to="/"> */}
            <Logo className=" h-12 w-12 sm:h-24 sm:w-16 sm:pt-8" />
            {/* </Link> */}
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
  )
}

export default Header
