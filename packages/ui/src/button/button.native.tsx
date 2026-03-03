import type { TouchableOpacityProps } from 'react-native'
import { Text, TouchableOpacity } from 'react-native-css/components'

import { cn } from '../utils/cn'
import { buttonComponentId, type BaseButtonProps } from './button.types'
import {
  buttonContainerStyles,
  buttonTextStyles,
} from './button.variants.native'

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

;(Button as { saComponent?: string }).saComponent = buttonComponentId
