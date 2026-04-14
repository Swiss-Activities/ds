import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconCircle } from "@swiss-activities/ui";
import { Check, Mountain, Star } from "@swiss-activities/ui/icons";

const meta = {
  title: "Components/IconCircle",
  component: IconCircle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IconCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Star className="h-[18px] w-[18px]" fill="currentColor" />,
  },
};

export const MountainIcon: Story = {
  args: {
    icon: <Mountain className="h-[18px] w-[18px]" />,
  },
};

export const CustomSize: Story = {
  args: {
    icon: <Check className="h-[22px] w-[22px]" strokeWidth={2} />,
    className: "h-12 w-12 text-xl",
  },
};
