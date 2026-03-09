import type { ImgHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import { Text } from '../text'
import type { BaseLogoProps } from './logo.types'
import { getLogoDimensions, getLogoMarkup } from './logo.shared'

export type LogoProps = BaseLogoProps & Omit<ImgHTMLAttributes<HTMLImageElement>, 'children'>

const encodedLogoSrc = {
  default: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup('default'))}`,
  sm: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup('sm'))}`,
} as const

export function Logo({
  size = 'default',
  className,
  alt = 'Swiss Activities',
  children,
  ...props
}: LogoProps) {
  const dimensions = getLogoDimensions(size)
  const src = size === 'sm' ? encodedLogoSrc.sm : encodedLogoSrc.default

  const img = (
    <img
      alt={alt}
      className={cn('inline-block shrink-0', !children && className)}
      height={dimensions.height}
      src={src}
      width={dimensions.width}
      {...props}
    />
  )

  if (!children) return img

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      {img}
      <Text as="span" size="default" bold black>{children}</Text>
    </span>
  )
}
