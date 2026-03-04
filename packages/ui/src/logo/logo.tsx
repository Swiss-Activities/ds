import type { ImgHTMLAttributes } from 'react'

import { cn } from '../utils/cn'
import type { BaseLogoProps } from './logo.types'
import { getLogoDimensions, getLogoMarkup } from './logo.shared'

export type LogoProps = BaseLogoProps & ImgHTMLAttributes<HTMLImageElement>

const encodedLogoSrc = {
  default: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup('default'))}`,
  sm: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup('sm'))}`,
} as const

export function Logo({
  size = 'default',
  className,
  alt = 'Swiss Activities',
  ...props
}: LogoProps) {
  const dimensions = getLogoDimensions(size)
  const src = size === 'sm' ? encodedLogoSrc.sm : encodedLogoSrc.default

  return (
    <img
      alt={alt}
      className={cn('inline-block shrink-0', className)}
      height={dimensions.height}
      src={src}
      width={dimensions.width}
      {...props}
    />
  )
}
