import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'react-native-css/components'

import { Button, Card, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    responsivePadding: false,
    fullWidth: false,
    rounded: true,
  },
  render: args => (
    <View className="p-4">
      <Card {...args}>
        <Flow>
          <Text className="text-[20px] font-semibold text-slate-900">Zurich City Pass</Text>
          <Text className="text-[14px] text-slate-600">
            Explore museums, cruises, and city transport with one pass.
          </Text>
          <Button label="Book Activity" />
        </Flow>
      </Card>
    </View>
  ),
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Contained: Story = {}

export const EdgeToEdge: Story = {
  args: {
    fullWidth: true,
  },
}

export const ResponsivePadding: Story = {
  args: {
    responsivePadding: true,
  },
}

export const Square: Story = {
  args: {
    rounded: false,
  },
}
