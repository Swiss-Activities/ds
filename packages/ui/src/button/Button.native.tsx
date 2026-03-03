import type { TouchableOpacityProps } from 'react-native'
import { Text, TouchableOpacity } from 'react-native-css/components'

import { cn } from '../utils/cn'
import type { BaseButtonProps } from './Button.types'
import {
  buttonContainerStyles,
  buttonTextStyles,
} from './Button.variants.native'

export type ButtonProps = BaseButtonProps &
  Omit<TouchableOpacityProps, 'children'> & { className?: string }

export function Button({
  label,
  variant = 'primary',
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={cn(buttonContainerStyles({ variant, disabled }), className)}
      disabled={disabled}
      {...props}
    >
      <Text className={cn(buttonTextStyles({ variant }))}>{label}</Text>
    </TouchableOpacity>
  )
}
