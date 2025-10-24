import { ReactElement } from 'react'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import { Link } from 'react-router-dom'

export default function HeadingWithNav({
  title,
  showBack = true,
}: {
  title: string
  showBack?: boolean
}): ReactElement {
  return (
    <div className="flex w-full items-center justify-between">
      {showBack ? (
        <Link to="/car-list">
          <ChevronBackIcon className="size-5" />
        </Link>
      ) : null}
      <h3 className="grow text-center font-lora text-[30px] uppercase">{title}</h3>
    </div>
  )
}
