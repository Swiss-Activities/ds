import type { HTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { Skeleton } from '../skeleton'
import type { BaseHeaderProps, BaseHeaderSectionProps } from './header.types'

export type HeaderProps = BaseHeaderProps & Omit<HTMLAttributes<HTMLElement>, 'children'>

export function Header({ children, className, loading, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between bg-white px-4 shadow-sm border-b border-border backdrop-blur-md',
        className,
      )}
      {...props}
    >
      {loading ? <Skeleton loading amount={1} size="xs" className="w-full" /> : children}
    </header>
  )
}

export type HeaderSectionProps = BaseHeaderSectionProps & HTMLAttributes<HTMLDivElement>

Header.Left = function HeaderLeft({ children, className, ...props }: HeaderSectionProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}

Header.Right = function HeaderRight({ children, className, ...props }: HeaderSectionProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}
