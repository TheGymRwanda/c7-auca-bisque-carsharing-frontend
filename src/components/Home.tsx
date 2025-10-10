import { Link } from 'react-router-dom'
import positiv from '../assets/positiv.png'

function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div>
          <img src={positiv} alt="Positive illustration" />
        </div>
        <p className="mt-8 max-w-xl px-2 text-center font-lora sm:mt-10 sm:text-lg md:mt-12 md:text-3xl">
          Hello Manuela!
          <br />
          What are you up to today?
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 px-4 sm:mt-14 md:mt-16">
        <Link
          to="/bookcar"
          className="flex h-12 w-full border-spacing-10 items-center justify-center rounded-3xl border bg-white px-6 text-lg font-bold text-[var(--color-primary)] transition-colors duration-300"
        >
          Book Car
        </Link>

        <h1 className="flex items-center justify-center place-self-center p-5 text-3xl">or</h1>

        <Link
          to="/car-details"
          className="flex justify-center items-center w-full h-12 px-6 rounded-3xl border border-spacing-10 text-white font-bold text-lg text-center hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          See My Car
        </Link>

        <Link
          to="/bookings"
          className="flex h-12 w-full border-spacing-10 items-center justify-center rounded-3xl border px-6 text-center text-lg font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[var(--color-primary)]"
        >
          See My Bookings
        </Link>
      </div>
    </div>
  )
}

export default Home
