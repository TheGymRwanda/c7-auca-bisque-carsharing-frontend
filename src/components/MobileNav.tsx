import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import CarsIcon from '../assets/CarsIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import CalendarIcon from '../assets/CalendarIcon'
import { Link, useNavigate } from 'react-router-dom'

interface MobileNavPros {
  onItemClick: () => void
}

function MobileNav({ onItemClick }: MobileNavPros) {
  const handleClick = () => {
    onItemClick()
  }
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    onItemClick()
    navigate('/', { replace: true })
  }

  return (
    <div className="fixed z-50 ml-5 mt-8 w-[210px]  rounded-[8px] bg-[var(--color-light)] px-[24px] py-[16px]">
      <ul className="flex flex-col gap-[16px] font-inter text-[14px]">
        <li onClick={handleClick} className="flex cursor-pointer gap-[12px]">
          <CarIcon className="text-[var(--color-white)]" />
          <span className="font-[400]">Book A Car</span>
        </li>
        <li onClick={handleClick} className="flex cursor-pointer gap-[12px]">
          <CalendarIcon className="text-[var(--color-white)]" />
          <span className="font-[400]">My Bookings</span>
        </li>
        <hr className="border-t-[1.5px]" />
        <h3 className="font-bold">My cars</h3>
        <li onClick={handleClick} className="flex cursor-pointer gap-[12px]">
          <CarsIcon />
          <span className="font-[400]">See My Cars</span>
        </li>
        <li onClick={handleClick} className="flex cursor-pointer gap-[12px]">
          <ListIcon />
          <span className="font-[400]">My Car&apos;s Bookings</span>
        </li>
        <li onClick={handleClick} className="flex cursor-pointer gap-[12px]">
          <CarPlusIcon />
          <span className="font-[400]">Add New Car</span>
        </li>
        <hr className="border-t-[1.5px]" />
        <Link to="/" onClick={handleLogout}>
          <li className="flex cursor-pointer gap-[12px]">
            <LogoutIcon />
            <span className="font-[400]">Log Out</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileNav
