import type { Meta, StoryObj } from '@storybook/react-vite'

import { Text, textElements, textSizes } from '@swiss-activities/ui'

const sizeOptions = ['default', ...textSizes] as const
const sizeMapping = Object.fromEntries(
  textSizes.map(size => [size, size]),
) as Record<(typeof textSizes)[number], (typeof textSizes)[number]>

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: sizeOptions,
      mapping: {
        default: false,
        ...sizeMapping,
      },
      control: 'select',
    },
    as: {
      options: textElements,
      control: 'select',
    },
    bold: {
      control: 'boolean',
    },
    display: {
      control: 'boolean',
    },
    black: {
      control: 'boolean',
    },
    gray: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Hand-picked activities with instant booking and flexible cancellation.',
    size: 'sm',
    as: 'p',
    bold: false,
    display: false,
    black: false,
    gray: false,
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Heading: Story = {
  args: {
    as: 'h2',
    size: '2xl',
    children: 'Swiss Activities Design System',
  },
}

export const Muted: Story = {
  args: {
    gray: true,
    children: 'Supporting text for activity cards and page sections.',
  },
}

export const Tiny: Story = {
  args: {
    size: 'xs2',
    children: 'Terms and conditions apply.',
  },
}
