import { ReactElement } from 'react'
import IconProps from '../types/iconProps'

interface EyeIconProps extends IconProps {
  visible?: boolean
  onClick: () => void
}

export default function EyeIcon({
  className,
  visible = false,
  onClick,
}: EyeIconProps): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
      onClick={() => onClick()}
    >
      {visible ? (
        <>
          <path d="M3 3L21 21" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M10.584 10.587C10.2087 10.9621 9.99778 11.4698 9.99778 12C9.99778 12.5302 10.2087 13.0379 10.584 13.413C10.9591 13.7883 11.4668 13.9992 11.997 13.9992C12.5272 13.9992 13.0349 13.7883 13.41 13.413"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.228 8.231C5.656 9.831 4.028 12 4.028 12C5.636 15.208 8.628 18 12 18C13.188 18 14.317 17.735 15.349 17.265M16.771 15.774C18.491 14.504 19.571 12.845 19.971 12C18.364 8.792 15.372 6 12 6C11.308 6 10.636 6.094 10 6.264"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="3" />
          <path
            d="M2 12C3.608 8.792 6.6 6 10 6H14C17.4 6 20.392 8.792 22 12C20.392 15.208 17.4 18 14 18H10C6.6 18 3.608 15.208 2 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  )
}
