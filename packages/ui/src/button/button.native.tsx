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
  children = null,
  variant = 'primary',
  size = 'md',
  disabled,
  className,
  ...props
}: ButtonProps) {
  const isInstruction = variant === 'instruction'
  const shouldApplyDisabledStyles = Boolean(disabled) && !isInstruction
  const isDisabled = Boolean(disabled) || isInstruction

  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={cn(
        buttonContainerStyles({
          variant,
          size,
          disabled: shouldApplyDisabledStyles,
        }),
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      <Text
        className={cn(
          buttonTextStyles({ variant, size, disabled: shouldApplyDisabledStyles }),
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

;(Button as { saComponent?: string }).saComponent = buttonComponentId
