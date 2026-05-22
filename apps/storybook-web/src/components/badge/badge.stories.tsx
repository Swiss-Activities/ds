import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@swiss-activities/ui";
import {
  badgeSizes,
  badgeVariants,
} from "@swiss-activities/ui/badge/badge.types";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: [...badgeVariants],
      control: "inline-radio",
    },
    size: {
      options: [...badgeSizes],
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

export const Glass: Story = {
  args: {
    size: "lg",
    variant: "glass",
    children: "Official partner SBB",
  },
};

export const Dark: Story = {
  args: {
    size: "lg",
    variant: "dark",
    children: "12'500 booked",
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
