import React from 'react'

type SmallButtonProps = {
  label?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' // for Add (filled) or Cancel (outlined)
}

const SmallButton: React.FC<SmallButtonProps> = ({
  label = 'Click Me',
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
}) => {
  const base =
    'rounded-full px-6 py-2 font-semibold text-sm sm:text-base transition-all duration-300 active:scale-95'
  const variants = {
    primary: 'bg-white text-blue-950 hover:bg-blue-100 focus:ring-2 focus:ring-blue-200',
    secondary: 'border border-white text-white hover:bg-white/10 focus:ring-2 focus:ring-white',
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </button>
  )
}

/*
  ===== Example Usage =====

  <div className="mt-6 flex justify-between">
    <SmallButton
      label="Cancel"
      variant="secondary"
      onClick={() => navigate(-1)}
    />
    <SmallButton
      label="Add Car"
      type="submit"
      variant="primary"
    />
  </div>
*/

export default SmallButton
