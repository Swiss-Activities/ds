import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconCircle } from '@swiss-activities/ui'

const meta = {
  title: 'Web & Mobile/IconCircle',
  component: IconCircle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconCircle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: '⭐',
  },
}

export const Emoji: Story = {
  args: {
    icon: '🏔️',
  },
}

export const CustomSize: Story = {
  args: {
    icon: '✓',
    className: 'h-12 w-12 text-xl',
  },
}
