import { useMemo } from 'react'
import { useCars, useCarTypes, useUsers } from '../hooks'
import { CarDto, CarTypeDto } from '../util/api'

interface FullCar {
  id: number
  name: string
  owner: string
  model: string
  image: string
}

function CarsList() {
  const [{ data: carsData, loading: carsLoading, error: carsError }] = useCars()
  const [{ data: carTypesData, loading: typesLoading, error: typesError }] = useCarTypes()
  const [{ data: usersData, loading: usersLoading, error: usersError }] = useUsers()

  const fullCars: FullCar[] = useMemo(() => {
    if (!carsData || !carTypesData || !usersData) return []

    return carsData.map((car: CarDto) => {
      const type = carTypesData.find((t: CarTypeDto) => t.id === car.carTypeId)
      const ownerUser = usersData.find(u => u.id === car.ownerId)

      return {
        id: car.id,
        name: car.name,
        owner: ownerUser?.name || `User ${car.ownerId}`,
        model: type?.name || 'Unknown Model',
        image: type?.imageUrl || 'https://via.placeholder.com/300x180?text=No+Image',
      }
    })
  }, [carsData, carTypesData, usersData])

  const loading = carsLoading || typesLoading || usersLoading
  const error = carsError || typesError || usersError

  return (
    <div className="min-h-screen bg-[#265E78] px-4 py-8 lg:px-8">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-wide text-white">ALL CARS</h2>

      {loading && <p className="text-center text-white">Loading...</p>}
      {error && <p className="text-center text-red-400">Failed to load data</p>}

      {!loading && !error && (
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {fullCars.map(car => (
            <div
              key={car.id}
              className="w-full rounded-lg bg-[#3E7591] text-white shadow transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-6 p-5">
                <div className="flex size-[224px] items-center justify-center overflow-hidden rounded-md bg-[#3E7591]">
                  <img src={car.image} alt={car.name} className="size-full object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold leading-tight">{car.name}</h3>
                  <div className="mt-1 space-y-1.5 text-base">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5 text-white"
                      >
                        <circle cx="12" cy="7" r="3" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                      </svg>
                      <span>{car.owner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5 text-white"
                      >
                        <path d="M3 14h2l2-4h8a3 3 0 012.7 1.8L18.5 14H21a2 2 0 012 2v2H1v-2a2 2 0 012-2z" />
                        <circle cx="7.5" cy="18" r="1.5" />
                        <circle cx="16.5" cy="18" r="1.5" />
                        <path d="M9 10h3" />
                      </svg>
                      <span>{car.model}</span>
                    </div>
                  </div>
                  <a href="#" className="mt-3 inline-block text-base text-[#e2e38f]">
                    Show details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarsList
