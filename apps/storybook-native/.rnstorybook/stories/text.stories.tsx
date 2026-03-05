import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'

import { Text, textSizes } from '@swiss-activities/ui'

const sizeOptions = ['unset', ...textSizes] as const
const sizeMapping = Object.fromEntries(
  textSizes.map(size => [size, size]),
) as Record<(typeof textSizes)[number], (typeof textSizes)[number]>

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      options: sizeOptions,
      mapping: {
        unset: false,
        ...sizeMapping,
      },
      control: 'select',
    },
    bold: {
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
    bold: false,
    black: false,
    gray: false,
  },
  render: args => <Text {...args} />,
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Heading: Story = {
  args: {
    size: '2xl',
    black: true,
    bold: true,
    children: 'Swiss Activities Design System',
  },
}

export const Muted: Story = {
  args: {
    gray: true,
    children: 'Supporting text for activity cards and page sections.',
  },
}

export const Display: Story = {
  args: {
    size: 'display',
    children: 'Display body text scales up on larger breakpoints.',
  },
}

export const Tiny: Story = {
  args: {
    size: 'xs2',
    children: 'Terms and conditions apply.',
  },
}
