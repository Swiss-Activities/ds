import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'react-native-css/components'

import { Button, Card, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  render: () => (
    <View style={{ padding: 16 }}>
      <Card>
        <Flow>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#0f172b' }}>Zurich City Pass</Text>
          <Text style={{ fontSize: 14, color: '#45556c' }}>
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

export const Default: Story = {}
