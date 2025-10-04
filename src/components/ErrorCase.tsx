import ErrorIcon from '../assets/ErrorIcon'
import { useNavigate } from 'react-router-dom'

const ErrorCase = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="space-between grid justify-center gap-16 pt-16 ">
        <h1 className="flex justify-center text-5xl sm:text-8xl">OOOOOPS!</h1>
        <div className="flex justify-center ">
          <ErrorIcon />
        </div>
        <p className="flex justify-center text-2xl sm:text-3xl">
          Something went wrong. <br />
          We wil solve your issue soon.
        </p>
        <button
          className="w-90 h-12 rounded-3xl bg-white font-bold text-blue-950 sm:h-14 sm:w-[500px] sm:text-3xl"
          onClick={handleClick}
        >
          Go Back
        </button>
      </div>
    </>
  )
}

export default ErrorCase
