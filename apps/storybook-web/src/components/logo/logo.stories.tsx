import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo, logoSizes } from '@swiss-activities/ui'

const meta = {
  title: 'Web & Mobile/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: logoSizes,
      control: 'inline-radio',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}
