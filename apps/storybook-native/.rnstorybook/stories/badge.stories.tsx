import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'
import { View } from 'react-native-css/components'

import { Badge } from '@swiss-activities/ui'
import { badgeVariants } from '@swiss-activities/ui/badge/badge.types'

const meta = {
  title: 'Web & Mobile/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: [...badgeVariants],
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Demand: Story = {
  args: {
    variant: 'demand',
    children: 'High Demand',
  },
  render: args => (
    <View style={{ padding: 16 }}>
      <Badge {...args} />
    </View>
  ),
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Free cancellation',
  },
  render: args => (
    <View style={{ padding: 16 }}>
      <Badge {...args} />
    </View>
  ),
}

export const Overlay: Story = {
  args: {
    variant: 'overlay',
    children: 'Top rated',
  },
  render: args => (
    <View style={{ padding: 16 }}>
      <Badge {...args} />
    </View>
  ),
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'New',
  },
  render: args => (
    <View style={{ padding: 16 }}>
      <Badge {...args} />
    </View>
  ),
}
