import type { ReactNode } from 'react'

export const horizontalScrollerVariants = ['white', 'white-button', 'black'] as const
export type HorizontalScrollerVariant = (typeof horizontalScrollerVariants)[number]

export type BaseHorizontalScrollerProps = {
  activeId?: string
  children: ReactNode
  className?: string
  classNameInner?: string
  variant: HorizontalScrollerVariant
}
