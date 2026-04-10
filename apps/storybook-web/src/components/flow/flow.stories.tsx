import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Flow } from "@swiss-activities/ui";

const meta = {
  title: "Components/Flow",
  component: Flow,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Flow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[360px] max-w-full",
  },
  render: (args) => (
    <Flow {...args}>
      <h3 className="text-xl font-semibold text-slate-900">
        Discover Switzerland
      </h3>
      <p className="text-sm text-slate-600">
        Hand-picked activities with instant booking and flexible cancellation.
      </p>
      <Button>Explore Activities</Button>
    </Flow>
  ),
};
