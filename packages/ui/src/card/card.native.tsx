import type { ViewProps } from 'react-native'
import { View } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseCardProps } from './card.types'
import { cardStyles } from './card.variants.native'

export type CardProps = BaseCardProps & Omit<ViewProps, 'children'>

export function Card({
  children = null,
  className,
  elevation = 'default',
  noPadding = false,
  ...props
}: CardProps) {
  return (
    <View
      className={cn(cardStyles({ elevation, noPadding }), className)}
      {...props}
    >
      {children}
    </View>
  )
}
