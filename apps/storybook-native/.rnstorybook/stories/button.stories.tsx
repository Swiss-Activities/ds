import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'

import { Button } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Book Activity'
  },
  render: args => <Button {...args} />
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
}

export const GhostPrimary: Story = {
  args: {
    variant: 'ghost-primary',
    children: 'See Details'
  }
}
