import type { Meta, StoryObj } from '@storybook/react-native'
import { Text, View } from 'react-native-css/components'

import { Button, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Flow',
  component: Flow,
  render: () => (
    <Flow className="px-4">
      <Text className="text-[20px] font-semibold text-slate-900">Discover Switzerland</Text>
      <Text className="text-[14px] text-slate-600">
        Hand-picked activities with instant booking and flexible cancellation.
      </Text>
      <Button label="Explore Activities" />
    </Flow>
  ),
} satisfies Meta<typeof Flow>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
