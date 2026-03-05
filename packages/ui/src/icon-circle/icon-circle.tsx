import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../utils/cn'

export type IconCircleProps = {
  icon: ReactNode
  className?: string
} & HTMLAttributes<HTMLSpanElement>

export function IconCircle({ icon, className, ...props }: IconCircleProps) {
  return (
    <span
      className={cn(
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light text-lg text-primary',
        className,
      )}
      {...props}
    >
      {icon}
    </span>
  )
}
