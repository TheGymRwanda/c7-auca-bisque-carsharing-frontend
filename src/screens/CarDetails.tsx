import { ReactElement, useEffect, useState } from 'react'
import HeadingWithNav from '../components/HeadingWithNav'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'
import MenuIcon from '../assets/MenuIcon'
import RedFlagIcon from '../assets/RedFlagIcon'
import { useCar, useCarType } from '../hooks'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'

async function getCarOwner(ownerId: number | string) {
  return fetch(`${apiUrl}/users/${ownerId}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  })
    .then(res => {
      if (res.status === 200) {
        return res.json()
      }
    })
    .then(data => {
      if (data) return data.name
      return ''
    })
}

export default function CarDetails({ carId = 1 }: { carId: number }): ReactElement {
  const [ownerName, setOwnerName] = useState<string>('')
  const [ownerLoading, setOwnerLoading] = useState<boolean>(true)
  const [, forceMount] = useState<number>(0)
  const [{ data: carDetails, loading: carLoading }] = useCar(carId)
  const [{ data: carType, loading: carTypeLoading }] = useCarType(carId)

  // fetch owner only when the carDetails is ready
  useEffect(() => {
    if (!carDetails?.ownerId) return
    getCarOwner(carDetails.ownerId)
      .then(setOwnerName)
      .then(() => setOwnerLoading(false))
  }, [carDetails])

  return !carLoading && !ownerLoading && !carTypeLoading && carDetails && carType && ownerName ? (
    <>
      <HeadingWithNav title="Details" />
      <div className="flex h-[45vh] w-full justify-center">
        <img src={carType.imageUrl} alt={carDetails.info} />
      </div>
      <div className="px-10">
        <h2 className="font-lora text-[20px]">{carDetails.name}</h2>
        <ul className="mt-10 flex flex-col gap-3 font-inter text-[14px]">
          <li className="flex gap-2">
            <ProfileIcon />
            <span>{ownerName}</span>
          </li>
          {carDetails.info && (
            <li className="flex gap-2">
              <CarIcon />
              <span>{carDetails.info}</span>
            </li>
          )}

          {carDetails.licensePlate && (
            <li className="flex gap-2">
              <MenuIcon />
              <span>{carDetails.licensePlate}</span>
            </li>
          )}

          {carDetails.horsepower && (
            <li className="flex gap-2">
              <HorseIcon />
              <span>{carDetails.horsepower}P</span>
            </li>
          )}

          <li className="flex gap-2">
            <FuelIcon />
            <span>{carDetails.fuelType}</span>
          </li>
          <li className="flex gap-2">
            <RedFlagIcon />
            <span>{carDetails.state}</span>
          </li>
        </ul>
      </div>
    </>
  ) : carLoading || ownerLoading || carTypeLoading ? (
    <div className="flex h-screen flex-col items-center justify-center">Loading</div>
  ) : (
    <div className="flex h-screen flex-col items-center justify-center">
      <span>Error</span>
      <button onClick={() => forceMount(prev => prev + 1)}>Retry</button>
    </div>
  )
}
