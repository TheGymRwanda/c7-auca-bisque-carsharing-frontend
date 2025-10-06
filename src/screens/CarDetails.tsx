import { ReactElement } from 'react'
import HeadingWithNav from '../components/HeadingWithNav'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import ListIcon from '../assets/ListIcon'
import HorseIcon from '../assets/HorseIcon'
import FuelIcon from '../assets/FuelIcon'

interface CarDetailsData {
  id: number
  carTypeId: number
  name: string
  ownerId: number
  state: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}

export default function CarDetails({ carId = 24 }: { carId: number }): ReactElement {
  const carDetails: CarDetailsData = {
    id: 4,
    carTypeId: 1,
    name: 'Test',
    ownerId: 1,
    state: 'LOCKED',
    fuelType: 'diesel',
    horsepower: 230,
    licensePlate: 'RAB 239 D',
    info: 'Ev Car',
  } // call /car/{id} to get car details
  const carImage =
    'https://res.cloudinary.com/dgwh59vry/image/upload/c_pad,ar_1:1/v1725970842/Mercedes-Benz-Car_vsm9cu.webp' // call /car-types/{id} endpoit to get car image

  const ownerName = 'Beatrice' // call /users/{id} to get the owner name

  return (
    <>
      <HeadingWithNav title="Details" />
      <div className="flex h-[45vh] w-full justify-center">
        <img src={carImage} alt={carDetails.info} />
      </div>
      <div className="px-10">
        <h2 className="font-lora text-[20px]">{carDetails.name}</h2>
        <ul className="mt-10 flex flex-col gap-3 font-inter text-[14px]">
          <li className="flex gap-2">
            <ProfileIcon />
            <span>{ownerName + ` - carID: ${carId}`}</span>
          </li>
          <li className="flex gap-2">
            <CarIcon />
            <span>{carDetails.info}</span>
          </li>
          <li className="flex gap-2">
            <ListIcon />
            <span>{carDetails.licensePlate}</span>
          </li>
          <li className="flex gap-2">
            <HorseIcon />
            <span>{carDetails.horsepower}P</span>
          </li>
          <li className="flex gap-2">
            <FuelIcon />
            <span>{carDetails.fuelType}P</span>
          </li>
          <li className="flex gap-2">
            <CarIcon />
            <span>{carDetails.state}P</span>
          </li>
        </ul>
      </div>
    </>
  )
}
