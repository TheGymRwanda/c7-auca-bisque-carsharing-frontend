import { ReactElement, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MoniShareLogo from '../components/MoniShareLogo'
import ButtonLarge from '../components/ButtonLarge'
import InputTextField from '../components/InputField'
import KeyIcon from '../assets/KeyIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { InputTextType } from '../types/InputTextType'

export default function LoginPage(): ReactElement {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  return (
    <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 px-4 sm:mt-14 md:mt-16">
      <MoniShareLogo />
      {!showLogin ? (
        <>
          <h2 className="heading-text my-20 px-5">Start sharing your Monis with the world</h2>
          <ButtonLarge text="Login" onClick={() => setShowLogin(prev => !prev)} />
        </>
      ) : (
        <>
          <h3 className="heading-text">Login</h3>
          <div className="mb-20 mt-10 flex flex-col gap-4">
            <InputTextField
              icon={<ProfileIcon className="" />}
              placeHolder="Username / e-mail"
              ref={emailRef}
              type={InputTextType.TEXT}
            />
            <InputTextField
              icon={<KeyIcon className="" />}
              placeHolder="Password"
              ref={passwordRef}
              type={InputTextType.PASSWORD}
            />
          </div>
          <ButtonLarge text="Login" onClick={() => navigate('home')} />
        </>
      )}
    </div>
  )
}
