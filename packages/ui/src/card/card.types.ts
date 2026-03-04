import type { ReactNode } from 'react'

export type BaseCardProps = {
  children?: ReactNode
  className?: string
  elevation?: 'default' | 'lg'
  noPadding?: boolean
}
