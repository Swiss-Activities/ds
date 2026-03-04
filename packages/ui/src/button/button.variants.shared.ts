import type { ButtonSize, ButtonVariant } from './button.types'

export type SharedButtonVariantStyles = {
  container: string
  text: string
  webInteraction: string
}

export type SharedButtonSizeStyles = {
  container: string
  text: string
}

export const sharedButtonBaseStyles = {
  container:
    'group inline-flex h-[max-content] max-h-max min-h-[48px] cursor-pointer appearance-none items-center justify-center rounded-lg border-solid px-3.5 py-2.5 text-center transition duration-100 ease-in',
  text: 'text-[14px] font-medium',
} as const

export const sharedButtonDisabledStyles = {
  container: 'pointer-events-none border-gray-300 bg-gray-300',
} as const

export const sharedButtonVariantStyles: Record<
  ButtonVariant,
  SharedButtonVariantStyles
> = {
  primary: {
    container: 'border border-sa-primary bg-sa-primary',
    text: 'text-white',
    webInteraction:
      'hover:text-white sm:hover:border-sa-dark sm:hover:bg-sa-dark focus-visible:outline-sa-dark',
  },
  secondary: {
    container: 'border border-gray-400 bg-white',
    text: 'text-gray-700',
    webInteraction:
      'sm:hover:border-gray-500 sm:hover:bg-gray-500 sm:hover:text-white focus-visible:outline-gray-500',
  },
  tertiary: {
    container: 'border border-transparent bg-transparent',
    text: 'text-sa-primary',
    webInteraction: 'sm:hover:underline focus-visible:outline-sa-primary',
  },
  outline: {
    container: 'border border-sa-primary bg-transparent',
    text: 'text-sa-primary',
    webInteraction:
      'sm:hover:bg-sa-primary sm:hover:text-white focus-visible:outline-sa-primary',
  },
  'outline-gray': {
    container: 'border border-gray-200 bg-transparent',
    text: 'text-gray-700',
    webInteraction: 'sm:hover:bg-gray-200 focus-visible:outline-gray-300',
  },
  transparent: {
    container: 'border border-transparent bg-transparent',
    text: 'text-black',
    webInteraction:
      'sm:hover:border-gray-100 sm:hover:bg-gray-100 focus-visible:outline-gray-300',
  },
  'blue-outline': {
    container: 'border border-sa-blue bg-transparent',
    text: 'text-sa-blue',
    webInteraction:
      'sm:hover:border-sa-blue sm:hover:bg-sa-blue sm:hover:text-white focus-visible:outline-sa-blue',
  },
  blue: {
    container: 'border border-sa-blue bg-sa-blue',
    text: 'text-white',
    webInteraction: 'sm:hover:brightness-[125%] focus-visible:outline-sa-blue',
  },
  gray: {
    container: 'border border-[#A9A2A3] bg-[#A9A2A3]',
    text: 'text-white',
    webInteraction: 'focus-visible:outline-gray-500',
  },
  instruction: {
    container: 'pointer-events-none border border-sa-light bg-sa-light',
    text: 'text-sa-primary',
    webInteraction: '',
  },
  link: {
    container: 'min-h-[auto] w-max border-none bg-transparent p-0',
    text: 'text-sa-primary',
    webInteraction: 'hover:underline focus-visible:outline-sa-primary',
  },
  linkGray: {
    container: 'min-h-[auto] w-max border-none bg-transparent p-0',
    text: 'text-gray-700 underline',
    webInteraction: 'hover:no-underline focus-visible:outline-gray-500',
  },
}

export const sharedButtonSizeStyles: Record<ButtonSize, SharedButtonSizeStyles> = {
  xs: {
    container: '!min-h-[24px] !px-2 !py-0.5',
    text: '!text-xs',
  },
  sm: {
    container: '!min-h-[36px] !px-2.5 !py-1',
    text: '!text-xs lg:!text-[14px]',
  },
  md: {
    container: '',
    text: '',
  },
  pill: {
    container: '!min-h-[32px] !rounded-[9999px] !px-3 !py-1.5 lg:!min-h-[36px]',
    text: '!text-xs sm:!text-sm',
  },
}
