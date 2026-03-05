import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Card, Flow } from '@swiss-activities/ui'

const meta = {
  title: 'Web & Mobile/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    elevation: {
      options: ['default', 'lg'],
      control: 'inline-radio',
    },
    noPadding: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    elevation: 'default',
    noPadding: false,
  },
  render: args => (
    <div className="w-[360px] max-w-full">
      <Card {...args}>
        <Flow>
          <h3 className="text-xl font-semibold text-slate-900">Zurich City Pass</h3>
          <p className="text-sm text-slate-600">
            Explore museums, cruises, and city transport with one pass.
          </p>
          <Button>Book Activity</Button>
        </Flow>
      </Card>
    </div>
  ),
}
