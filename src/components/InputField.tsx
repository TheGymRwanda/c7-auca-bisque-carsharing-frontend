import { forwardRef, ReactElement } from 'react'
import { InputTextType } from '../types/InputTextType'

interface InputTextFieldProps {
  icon: ReactElement
  placeHolder: string
  type: InputTextType
}

const InputTextField = forwardRef<HTMLInputElement, InputTextFieldProps>(
  ({ icon, placeHolder, type }, ref): ReactElement => (
    <div className="flex gap-3 rounded-full bg-[var(--color-light)] p-4">
      {icon}
      <input
        type={type.toString().toLowerCase()}
        placeholder={placeHolder}
        ref={ref}
        className="grow border-0 bg-transparent text-[15px] outline-none placeholder:text-[var(--color-white)]"
      />
    </div>
  ),
)
InputTextField.displayName = 'InputTextField'

export default InputTextField
