function Home() {
  return (
    <div>
      <div>
        <h1 className="place-self-center text-4xl font-serif">MONI</h1>
        <h1 className="place-self-center text-4xl font-sans ">share</h1>
        <p className="mt-12 place-self-center">
          Hello Manuela! <br />
          What are you up to today?
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1  gap-4">
        <button className="rounded-3xl bg-white text-blue-600 border border-spacing-10 h-10 ">
          book car
        </button>
        <button className=" mt-34 rounded-3xl  border border-spacing-4 text-blue-400 h-10">
          see my car
        </button>
        <button className=" mt-34 rounded-3xl  border border-spacing-10 text-blue-500 h-10 ">
          see my bookings
        </button>
      </div>
    </div>
  )
}

export default Home
