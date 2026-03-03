import type { ViewProps } from 'react-native'
import { View } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseCardProps } from './card.types'
import { cardStyles } from './card.variants.native'

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
      className={cn(cardStyles({ responsivePadding, fullWidth, rounded }), className)}
      {...props}
    >
      {children}
    </View>
  )
}
