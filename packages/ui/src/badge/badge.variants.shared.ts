import { cva } from 'class-variance-authority'

export const badgeStyles = cva(
  'flex h-5 max-w-max items-center justify-center whitespace-nowrap rounded px-1 text-xs font-bold uppercase leading-[0]',
  {
    variants: {
      variant: {
        demand: 'bg-light text-dark',
        info: 'bg-blue-50 text-blue',
        overlay: 'bg-blue/75 text-white backdrop-blur-md',
        text: '!bg-transparent !px-0',
      },
    },
    defaultVariants: {
      variant: 'overlay',
    },
  },
)
