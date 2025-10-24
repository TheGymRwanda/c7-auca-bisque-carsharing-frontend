import { useEffect, useState } from 'react'

interface UseInputValidationProps {
  emailRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
  EMAIL_USERNAME_LENGTH: number
  PASSWORD_LENGTH: number
  showLogin: boolean
}

export default function useInputValidation({
  emailRef,
  passwordRef,
  EMAIL_USERNAME_LENGTH,
  PASSWORD_LENGTH,
  showLogin,
}: UseInputValidationProps) {
  const [isUserValid, setIsUserValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const validateInput = (
    inputField: HTMLInputElement,
    minimumLength: number,
    onChange: boolean = false,
  ) => {
    const text = inputField.value
    const parent = inputField.parentElement
    if (!parent) return
    if (text.length >= minimumLength) {
      parent.style.borderColor = '#A8FBD3'
      parent.style.borderWidth = '2px'
      parent.style.boxShadow = '0 0 0 3px rgba(168, 251, 211, 0.2)'
    } else {
      parent.style.borderColor = !onChange ? 'transparent' : '#E62727'
      parent.style.borderWidth = !onChange ? '0' : '2px'
      parent.style.boxShadow = !onChange ? 'none' : '0 0 0 3px rgba(230, 39, 39, 0.15)'
    }

    setIsUserValid((emailRef.current?.value.length ?? 0) >= EMAIL_USERNAME_LENGTH)
    setIsPasswordValid((passwordRef.current?.value.length ?? 0) >= PASSWORD_LENGTH)
  }

  useEffect(() => {
    if (emailRef.current) {
      const inputField = emailRef.current
      if (inputField === null) return
      emailRef.current.oninput = () => validateInput(inputField, EMAIL_USERNAME_LENGTH)
      emailRef.current.onchange = () => validateInput(inputField, EMAIL_USERNAME_LENGTH, true)
    }

    if (passwordRef.current) {
      const inputField = passwordRef.current
      if (inputField === null) return
      passwordRef.current.oninput = () => validateInput(inputField, PASSWORD_LENGTH)
      passwordRef.current.onchange = () => validateInput(inputField, PASSWORD_LENGTH, true)
    }
  }, [showLogin, emailRef.current, passwordRef.current])

  return { isUserValid, isPasswordValid }
}
