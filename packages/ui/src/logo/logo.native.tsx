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
  children,
  ...props
}: LogoProps) {
  const dimensions = getLogoDimensions(size)
  const markup = getLogoMarkup(size)

  const svg = (
    <SvgXml
      height={dimensions.height}
      width={dimensions.width}
      xml={markup}
    />
  )

  if (!children) {
    return (
      <View className={cn('shrink-0', className)} {...props}>
        {svg}
      </View>
    )
  }

  return (
    <View className={cn('flex-row items-center gap-2', className)} {...props}>
      <View className="shrink-0">{svg}</View>
      {children}
    </View>
  )
}
