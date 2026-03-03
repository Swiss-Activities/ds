import type { HTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import type { BaseCardProps } from './Card.types'
import { cardStyles } from './Card.variants.web'

export type CardProps = BaseCardProps & HTMLAttributes<HTMLDivElement>

export function Card({
  children = null,
  className,
  responsivePadding = false,
  fullWidth = true,
  rounded = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardStyles({ responsivePadding, fullWidth, rounded }), className)}
      {...props}
    >
      {children}
    </div>
  )
}
