import type { HTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { Skeleton } from '../skeleton'
import type { BaseHeaderProps, BaseHeaderSectionProps } from './header.types'

export type HeaderProps = BaseHeaderProps & Omit<HTMLAttributes<HTMLElement>, 'children'>

export function Header({ children, className, loading, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 flex h-[var(--h-header)] items-center justify-between bg-white px-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-solid border-gray-200 border-l-0 border-r-0 border-t-0 border-b backdrop-blur-md',
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
