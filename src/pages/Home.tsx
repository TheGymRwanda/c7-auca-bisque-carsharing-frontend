import { useNavigate } from 'react-router-dom'
import ButtonLarge from '../components/ButtonLarge'
import MoniShareLogo from '../components/MoniShareLogo'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <MoniShareLogo />
        <p className="heading-text">
          Hello Manuela!
          <br />
          What are you up to today?
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 px-4 sm:mt-14 md:mt-16">
        <ButtonLarge onClick={() => navigate('book-car')} text="Book Car" />
        <h1 className="flex items-center justify-center place-self-center p-5 text-3xl text-white">
          or
        </h1>
        <ButtonLarge
          onClick={() => navigate('/car-details')}
          text="See My Car"
          bgColor="transparent"
          textColor="white"
        />
        <ButtonLarge
          onClick={() => navigate('/bookings')}
          text="See My Bookings"
          bgColor="transparent"
          textColor="white"
        />
      </div>
    </div>
  )
}

export default Home
