import { useState } from 'react'
import ButtonLargeProps from '../types/buttonLarge'

export default function ButtonLarge({
  text,
  onClick,
  bgColor = 'white',
  textColor = 'var(--color-primary)',
  hoverBgColor = 'white',
  hoverTextColor = 'var(--color-primary)',
}: ButtonLargeProps) {
  const [hover, setHover] = useState(false)

  return (
    <button
      onClick={() => onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? hoverBgColor : bgColor,
        color: hover ? hoverTextColor : textColor,
      }}
      className="flex h-12 w-full items-center justify-center rounded-3xl border px-6 text-center text-lg font-bold transition-colors duration-300"
    >
      {text}
    </button>
  )
}
