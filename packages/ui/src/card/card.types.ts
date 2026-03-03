import type { ReactNode } from 'react'

export type BaseCardProps = {
  children?: ReactNode
  className?: string
  elevation?: 'md' | 'lg'
  noPadding?: boolean
}
