import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Card, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[360px] max-w-full">
      <Card>
        <Flow>
          <h3 className="text-xl font-semibold text-slate-900">Zurich City Pass</h3>
          <p className="text-sm text-slate-600">
            Explore museums, cruises, and city transport with one pass.
          </p>
          <Button label="Book Activity" />
        </Flow>
      </Card>
    </div>
  ),
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
