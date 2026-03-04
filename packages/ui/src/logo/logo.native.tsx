import type { ViewProps } from 'react-native'
import { View } from 'react-native-css/components'
import { SvgXml } from 'react-native-svg'

import { cn } from '../utils/cn'
import type { BaseLogoProps } from './logo.types'
import { getLogoDimensions, getLogoMarkup } from './logo.shared'

export type LogoProps = BaseLogoProps & Omit<ViewProps, 'children'>

export function Logo({
  size = 'default',
  className,
  ...props
}: LogoProps) {
  const dimensions = getLogoDimensions(size)
  const markup = getLogoMarkup(size)

  return (
    <View className={cn('shrink-0', className)} {...props}>
      <SvgXml
        height={dimensions.height}
        width={dimensions.width}
        xml={markup}
      />
    </View>
  )
}
