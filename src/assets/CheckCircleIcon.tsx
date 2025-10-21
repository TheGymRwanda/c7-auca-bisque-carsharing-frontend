import { ReactElement } from 'react'
import IconProps from '../types/iconProps'

export default function CheckCircleIcon({ className }: IconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12L11 15L16 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
