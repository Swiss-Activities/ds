import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@swiss-activities/ui";
import { skeletonSizes } from "@swiss-activities/ui/skeleton/skeleton.types";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: [...skeletonSizes],
      control: "inline-radio",
    },
    amount: {
      control: { type: "number", min: 1, max: 10 },
    },
    loading: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: true,
    size: "sm",
    amount: 2,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Skeleton {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-[360px] flex-col gap-6">
      {skeletonSizes.map((size) => (
        <div key={size}>
          <p className="mb-2 text-sm text-gray-500">{size}</p>
          <Skeleton loading size={size} amount={1} />
        </div>
      ))}
    </div>
  ),
};
