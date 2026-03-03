import type { HTMLAttributes } from 'react'

import type { BaseCardProps } from './Card.types'
import {
  cardBaseStyles,
  cardMxStyles,
  cardPaddingStyles,
  cardResponsivePaddingStyles,
  cardRoundedStyles,
} from './Card.variants.web'

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
      className={`${cardBaseStyles.web} ${cardPaddingStyles.web} ${responsivePadding ? cardResponsivePaddingStyles.web : ''} ${fullWidth ? cardMxStyles.web : ''} ${rounded ? cardRoundedStyles.web : ''} ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}
