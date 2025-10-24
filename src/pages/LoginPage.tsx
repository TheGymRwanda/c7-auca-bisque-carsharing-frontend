import { ReactElement, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MoniShareLogo from '../components/MoniShareLogo'
import ButtonLarge from '../components/ButtonLarge'
import InputTextField from '../components/InputField'
import * as Icons from '../assets'
import CheckCircleIcon from '../assets/CheckCircleIcon'
import { InputTextType } from '../types/InputTextType'
import { useAuth, useAuthToken, useInputValidation } from '../hooks'

export default function LoginPage(): ReactElement {
  const [showLogin, setShowLogin] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false)
  const [isCheckingLogin, setIsCheckingLogin] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const EMAIL_USERNAME_LENGTH = 5
  const PASSWORD_LENGTH = 6

  // check if user is already loggedin and redirect them
  useEffect(() => {
    async function checkAuth(): Promise<boolean> {
      setIsCheckingLogin(true)
      const data = await useAuthToken()
      setIsCheckingLogin(false)
      return data !== null
    }
    checkAuth().then(res => res && navigate('/home', { replace: true }))
  }, [])

  const { isUserValid, isPasswordValid } = useInputValidation({
    emailRef,
    passwordRef,
    EMAIL_USERNAME_LENGTH,
    PASSWORD_LENGTH,
    showLogin,
  })

  return isCheckingLogin ? (
    <div className="relative min-h-screen w-full">
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[15px]">
        Loading...
      </p>
    </div>
  ) : (
    <div className="mx-auto my-10 grid max-w-md grid-cols-1 px-4 sm:mt-14 md:mt-16">
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
              prefixIcon={<Icons.ProfileIcon className="" />}
              placeHolder="Username / e-mail"
              ref={emailRef}
              type={InputTextType.TEXT}
              suffixIcon={isUserValid ? <CheckCircleIcon /> : null}
            />
            <InputTextField
              prefixIcon={<Icons.KeyIcon className="" />}
              placeHolder="Password"
              ref={passwordRef}
              type={showPassword ? InputTextType.PASSWORD : InputTextType.TEXT}
              suffixIcon={
                <Icons.EyeIcon
                  visible={showPassword}
                  onClick={() => setShowPassword(prev => !prev)}
                />
              }
            />
            {isLoginFailed && !isLoggingIn && (
              <p className="text-center text-red-600">Login has failed!</p>
            )}
          </div>
          {isUserValid && isPasswordValid ? (
            <ButtonLarge
              text={!isLoggingIn ? 'Login' : 'Logging in ...'}
              onClick={async () => {
                setIsLoggingIn(true)
                const passwordInputField = passwordRef.current
                if (passwordInputField === null) return
                const emailInputField = emailRef.current
                if (emailInputField === null) return
                const success = await useAuth(emailInputField.value, passwordInputField.value)
                setIsLoggingIn(false)
                if (success) navigate('home', { replace: true })
                else setIsLoginFailed(true)
              }}
            />
          ) : null}
        </>
      )}
    </div>
  )
}
