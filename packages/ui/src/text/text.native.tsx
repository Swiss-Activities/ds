import type { TextProps as NativeTextProps } from 'react-native'
import { Text as NativeText } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseTextProps } from './text.types'
import {
  resolveTextVariantSize,
  textStyles,
} from './text.variants.shared'

export type TextProps = BaseTextProps & Omit<NativeTextProps, 'children'>

export function Text({
  children = null,
  className,
  size = 'sm',
  as = 'p',
  bold = false,
  black = false,
  gray = false,
  ...props
}: TextProps) {
  const normalizedSize = resolveTextVariantSize(size)

  return (
    <NativeText
      className={cn(
        textStyles({
          size: normalizedSize,
          bold,
          black,
          gray,
        }),
        className,
      )}
      {...props}
    >
      {children ?? ''}
    </NativeText>
  )
}
