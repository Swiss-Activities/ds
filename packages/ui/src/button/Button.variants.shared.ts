import type { ButtonVariant } from './Button.types'

export type SharedButtonVariantStyles = {
  container: string
  text: string
  webInteraction: string
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
    container: 'bg-sa-primary',
    text: 'text-sa-light',
    webInteraction: 'hover:bg-sa-dark focus-visible:outline-sa-dark',
  },
  'ghost-primary': {
    container: 'bg-transparent',
    text: 'text-sa-primary',
    webInteraction: 'hover:bg-sa-light focus-visible:outline-sa-primary',
  },
}
