import type { ViewProps } from 'react-native'
import { ScrollView, Text, View } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseBreadcrumbsProps } from './breadcrumbs.types'

export type BreadcrumbsProps = BaseBreadcrumbsProps & Omit<ViewProps, 'children'>

export function Breadcrumbs({
  items,
  white = false,
  ignoreLast = false,
  className,
  ...props
}: BreadcrumbsProps) {
  return (
    <View className={cn('relative', className)} {...props}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row items-center">
          {items.map((item, index) => {
            const isLast = ignoreLast && items.length === index + 1

            return (
              <View key={item.href} className="flex flex-row items-center">
                <Text
                  className={cn('text-xs font-medium', {
                    'text-gray-500': isLast,
                    'text-gray-700': !isLast && !white,
                    'text-white': !isLast && white,
                  })}
                >
                  {item.label}
                </Text>
                {items.length > index + 1 && (
                  <Text className={cn('px-1.5 text-xs', {
                    'text-gray-500': white,
                    'text-gray-300': !white,
                  })}>
                    ›
                  </Text>
                )}
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
