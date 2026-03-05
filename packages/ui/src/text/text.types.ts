import type { ReactNode } from 'react'

export const textSizes = [
  '3xl',
  '2xl',
  'xl',
  'lg',
  'default',
  'md2',
  'display',
  'sm',
  'sm2',
  'xs',
  'xs2',
] as const

export type TextSize = (typeof textSizes)[number] | false

export const textElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'span',
  'p',
  'li',
] as const

export type TextElement = (typeof textElements)[number]

export type BaseTextProps = {
  children?: ReactNode | null
  className?: string
  size?: TextSize
  as?: TextElement
  bold?: boolean
  black?: boolean
  gray?: boolean
}
