import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Card } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: {
    responsivePadding: false,
    fullWidth: false,
    rounded: true,
  },
  render: args => (
    <div className="w-[360px] max-w-full">
      <Card {...args}>
        <h3 className="text-xl font-semibold text-slate-900">Zurich City Pass</h3>
        <p className="mt-2 text-sm text-slate-600">
          Explore museums, cruises, and city transport with one pass.
        </p>
        <div className="mt-4">
          <Button label="Book Activity" />
        </div>
      </Card>
    </div>
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
