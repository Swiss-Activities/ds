import type { ViewProps } from 'react-native'
import { View } from 'react-native-css/components'

import type { BaseCardProps } from './Card.types'
import {
  cardBaseStyles,
  cardMxStyles,
  cardPaddingStyles,
  cardResponsivePaddingStyles,
  cardRoundedStyles,
} from './Card.variants.native'

export type CardProps = BaseCardProps & Omit<ViewProps, 'children'>

export function Card({
  children = null,
  className,
  responsivePadding = false,
  fullWidth = true,
  rounded = false,
  ...props
}: CardProps) {
  return (
    <View
      className={`${cardBaseStyles.native} ${cardPaddingStyles.native} ${responsivePadding ? cardResponsivePaddingStyles.native : ''} ${fullWidth ? cardMxStyles.native : ''} ${rounded ? cardRoundedStyles.native : ''} ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </View>
  )
}
