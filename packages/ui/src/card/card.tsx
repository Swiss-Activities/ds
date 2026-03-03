import type { HTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import type { BaseCardProps } from './card.types'
import { cardStyles } from './card.variants.web'

export type CardProps = BaseCardProps & HTMLAttributes<HTMLDivElement>

export function Card({
  children = null,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardStyles(), className)}
      {...props}
    >
      {children}
    </div>
  )
}
