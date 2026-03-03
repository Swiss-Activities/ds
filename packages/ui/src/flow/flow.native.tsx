import type { ViewProps } from 'react-native'
import { View } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseFlowProps } from './flow.types'
import { withFlowButtonSpacing } from './flow.children'
import { flowStyles } from './flow.variants.native'

export type FlowProps = BaseFlowProps & Omit<ViewProps, 'children'>

export function Flow({
  children = null,
  className,
  ...props
}: FlowProps) {
  return (
    <View className={cn(flowStyles, className)} {...props}>
      {withFlowButtonSpacing(children)}
    </View>
  )
}
