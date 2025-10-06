import { ReactElement } from 'react'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'

export default function HeadingWithNav({
  title,
  showBack = true,
}: {
  title: string
  showBack?: boolean
}): ReactElement {
  return (
    <div className="flex w-full items-center justify-between">
      {showBack ? <ChevronBackIcon className="size-5" /> : null}
      <h3 className="grow text-center font-lora text-[30px] italic">{title}</h3>
    </div>
  )
}
