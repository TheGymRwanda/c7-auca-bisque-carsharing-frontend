import { forwardRef, ReactElement } from 'react'
import { InputTextType } from '../types/InputTextType'

interface InputTextFieldProps {
  prefixIcon: ReactElement
  placeHolder: string
  type: InputTextType
  suffixIcon?: ReactElement | null
}

const InputTextField = forwardRef<HTMLInputElement, InputTextFieldProps>(
  ({ prefixIcon, placeHolder, type, suffixIcon }, ref): ReactElement => (
    <div className="flex gap-3 rounded-full bg-[var(--color-light)] p-4">
      {prefixIcon}
      <input
        type={type.toString().toLowerCase()}
        placeholder={placeHolder}
        ref={ref}
        className="grow border-0 bg-transparent text-[15px] outline-none placeholder:text-[var(--color-white)]"
      />
      {suffixIcon}
    </div>
  ),
)
InputTextField.displayName = 'InputTextField'

export default InputTextField
