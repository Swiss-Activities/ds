import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConditionalWrapper } from "@swiss-activities/ui";

const meta = {
  title: "Web & Mobile/ConditionalWrapper",
  component: ConditionalWrapper,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    condition: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ConditionalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithWrapper: Story = {
  args: {
    condition: true,
    wrapper: (children) => (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        {children}
      </div>
    ),
    children: (
      <span className="text-sm text-gray-700">This content is wrapped</span>
    ),
  },
};

export const WithoutWrapper: Story = {
  args: {
    condition: false,
    wrapper: (children) => (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        {children}
      </div>
    ),
    children: (
      <span className="text-sm text-gray-700">This content is not wrapped</span>
    ),
  },
};
