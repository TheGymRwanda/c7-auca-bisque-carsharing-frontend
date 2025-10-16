import React from 'react'

type MediumButtonProps = {
  label?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const MediumButton: React.FC<MediumButtonProps> = ({
  label = 'Click Me',
  onClick,
  className = '',
  type = 'button',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`h-12 w-90 rounded-3xl bg-white font-bold text-blue-950 transition-all duration-300 hover:bg-blue-100 active:scale-95 sm:h-14 sm:w-[500px] sm:text-3xl ${className}`}
  >
    {label}
  </button>
)

/*
  ===== Example Usage =====

  <div className="flex justify-center">
    <MediumButton label="Go Back" onClick={handleGoBack} />
  </div>
*/

export default MediumButton
