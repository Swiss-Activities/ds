import {
  createElement,
  forwardRef,
  type HTMLAttributes,
} from 'react'

import { cn } from '../utils/cn'
import type { BaseTextProps } from './text.types'
import {
  resolveTextVariantSize,
  textStyles,
} from './text.variants.shared'

export type TextProps = BaseTextProps & HTMLAttributes<HTMLElement>

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    children = null,
    className,
    size = 'sm',
    as = 'p',
    bold = false,
    display = false,
    black = false,
    gray = false,
    ...props
  },
  ref,
) {
  const normalizedSize = resolveTextVariantSize(size)

  return createElement(
    as,
    {
      ...props,
      ref: ref as never,
      className: cn(
        textStyles({
          size: normalizedSize,
          bold,
          display,
          black,
          gray,
        }),
        className,
      ),
    },
    children ?? '',
  )
})
