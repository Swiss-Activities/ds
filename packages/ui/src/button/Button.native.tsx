import type { TouchableOpacityProps } from 'react-native'
import { Text, TouchableOpacity } from 'react-native-css/components'

import type { BaseButtonProps } from './Button.types'
import {
  buttonBaseStyles,
  buttonDisabledStyles,
  buttonVariantStyles,
} from './Button.variants.native'

export type ButtonProps = BaseButtonProps & Omit<TouchableOpacityProps, 'children'>

export function Button({
  label,
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={`${buttonBaseStyles.container} ${buttonVariantStyles[variant].container} ${disabled ? buttonDisabledStyles.native : ''}`.trim()}
      disabled={disabled}
      {...props}
    >
      <Text className={`${buttonBaseStyles.text} ${buttonVariantStyles[variant].text}`}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}
