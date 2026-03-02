import { Pressable, Text, type PressableProps } from 'react-native'

import type { BaseButtonProps } from './Button.types'
import {
  buttonBaseStyles,
  buttonDisabledStyles,
  buttonVariantStyles,
} from './Button.variants'

export type ButtonProps = BaseButtonProps & Omit<PressableProps, 'children'>

export function Button({
  label,
  variant = 'primary',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      className={`${buttonBaseStyles.nativeContainer} ${buttonVariantStyles[variant].nativeContainer} ${disabled ? buttonDisabledStyles.native : ''}`.trim()}
      disabled={disabled}
      {...props}
    >
      <Text
        className={`${buttonBaseStyles.nativeText} ${buttonVariantStyles[variant].nativeText}`}
      >
        {label}
      </Text>
    </Pressable>
  )
}
