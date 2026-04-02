import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@swiss-activities/ui";
import { badgeVariants } from "@swiss-activities/ui/badge/badge.types";

const meta = {
  title: "Web & Mobile/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: [...badgeVariants],
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demand: Story = {
  args: {
    variant: "demand",
    children: "High Demand",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Free cancellation",
  },
};

export const Overlay: Story = {
  args: {
    variant: "overlay",
    children: "Top rated",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "New",
  },
};
