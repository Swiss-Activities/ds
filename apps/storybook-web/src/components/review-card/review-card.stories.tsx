import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewCard } from "@swiss-activities/ui";
import { getReviewItems } from "../../story-data";

const reviews = getReviewItems();

const meta = {
  title: "Components/ReviewCard",
  component: ReviewCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...reviews[0],
    className: "max-w-[280px]",
  },
};

export const NoImages: Story = {
  args: {
    ...reviews[1],
    className: "max-w-[280px]",
  },
};

export const Minimal: Story = {
  args: {
    ...reviews[2],
    className: "max-w-[280px]",
  },
};
