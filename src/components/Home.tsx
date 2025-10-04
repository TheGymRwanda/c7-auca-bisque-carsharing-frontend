import positiv from '../assets/positiv.png'

function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div>
          <img src={positiv} />
        </div>
        <p className="mt-8 sm:mt-10 md:mt-12 text-center text-xs sm:text-2xl md:text-3xl max-w-xl px-2">
          Hello Manuela!
          <br />
          What are you up to today?
        </p>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-16 max-w-md mx-auto grid grid-cols-1 gap-4 px-4">
        <button className="rounded-3xl bg-white text-[var(--color-primary)] border border-spacing-10 h-12 font-bold w-full sm:w-full md:w-full px-6 transition-colors duration-300">
          Book Car
        </button>
        <h1 className="p-5 place-self-center text-lg sm:text-xl md:text-2xl">or</h1>
        <button className="rounded-3xl border border-spacing-10 hover:bg-white hover:text-[var(--color-primary)] text-white h-12 font-bold w-full sm:w-full md:w-full px-6 transition-colors duration-300">
          See My Car
        </button>
        <button className="rounded-3xl border border-spacing-10 hover:bg-white hover:text-[var(--color-primary)] text-white h-12 font-bold w-full sm:w-full md:w-full px-6 transition-colors duration-300">
          See My Bookings
        </button>
      </div>
    </div>
  )
}
export default Home
