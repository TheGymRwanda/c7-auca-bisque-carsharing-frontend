import { Link } from 'react-router-dom'
import positiv from '../assets/positiv.png'

function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div>
          <img src={positiv} alt="Positive illustration" />
        </div>
        <p className="font-lora mt-8 sm:mt-10 md:mt-12 px-2 max-w-xl text-center sm:text-lg md:text-3xl">
          Hello Manuela!
          <br />
          What are you up to today?
        </p>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-1 gap-4 max-w-md mx-auto px-4">
        <Link
          to="/bookcar"
          className="flex items-center justify-center w-full h-12 px-6 rounded-3xl border border-spacing-10 bg-white text-[var(--color-primary)] font-bold text-lg transition-colors duration-300"
        >
          Book Car
        </Link>

        <h1 className="flex justify-center items-center place-self-center p-5 text-3xl">or</h1>

        <Link
          to="/seemycar"
          className="flex justify-center items-center w-full h-12 px-6 rounded-3xl border border-spacing-10 text-white font-bold text-lg text-center hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          See My Car
        </Link>

        <Link
          to="/bookings"
          className="flex justify-center items-center w-full h-12 px-6 rounded-3xl border border-spacing-10 text-white font-bold text-lg text-center hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          See My Bookings
        </Link>
      </div>
    </div>
  )
}

export default Home
