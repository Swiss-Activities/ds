import type { ButtonVariant } from './Button.types'

export type SharedButtonVariantStyles = {
  container: string
  text: string
}

export const sharedButtonBaseStyles = {
  container: 'min-h-[40px] items-center justify-center rounded-[8px] px-[16px] py-[10px]',
  text: 'text-[14px] [font-weight:600]',
} as const

export const sharedButtonVariantStyles: Record<
  ButtonVariant,
  SharedButtonVariantStyles
> = {
  primary: {
    container: 'bg-[#0f172b]',
    text: 'text-[#ffffff]',
  },
  secondary: {
    container: 'bg-[#e2e8f0]',
    text: 'text-[#0f172b]',
  },
}
