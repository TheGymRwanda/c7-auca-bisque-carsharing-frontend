// Home.jsx
import { Link } from 'react-router-dom'
import positiv from '../assets/positiv.png'

function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div>
          <img src={positiv} alt="Positive illustration" />
        </div>
        <p className="mt-8 sm:mt-10 md:mt-12 text-center sm:text-lg md:text-3xl max-w-xl px-2">
          Hello Manuela!
          <br />
          What are you up to today?
        </p>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-16 max-w-md mx-auto grid grid-cols-1 gap-4 px-4">
        <Link
          to="/bookcar"
          className="flex items-center justify-center rounded-3xl bg-white text-[var(--color-primary)] border border-spacing-10 h-12 font-bold w-full px-6 text-lg transition-colors duration-300"
        >
          Book Car
        </Link>

        <h1 className="flex justify-center items-center p-5 place-self-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          or
        </h1>

        <Link
          to="/seemycar"
          className="flex justify-center items-center w-full rounded-3xl border border-spacing-10 hover:bg-white hover:text-[var(--color-primary)] text-white h-12 font-bold px-6 text-lg transition-colors duration-300 text-center"
        >
          See My Car
        </Link>

        <Link
          to="/bookings"
          className="flex justify-center items-center rounded-3xl border border-spacing-10 hover:bg-white hover:text-[var(--color-primary)] text-white h-12 font-bold w-full px-6 text-lg transition-colors duration-300 text-center"
        >
          See My Bookings
        </Link>
      </div>
    </div>
  )
}

export default Home
