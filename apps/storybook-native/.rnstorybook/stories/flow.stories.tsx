import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'react-native-css/components'

import { Button, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Flow',
  component: Flow,
  render: () => (
    <Flow style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: '#0f172b' }}>Discover Switzerland</Text>
      <Text style={{ fontSize: 14, color: '#45556c' }}>
        Hand-picked activities with instant booking and flexible cancellation.
      </Text>
      <Button label="Explore Activities" />
    </Flow>
  ),
} satisfies Meta<typeof Flow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
