import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { ReviewCard } from "@swiss-activities/ui";
import { View } from "react-native";
import { getReviewItems } from "./story-data";

const reviews = getReviewItems();

const meta = {
  title: "Components/ReviewCard",
  component: ReviewCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: reviews[0],
  render: (args) => (
    <View style={{ width: 280 }}>
      <ReviewCard {...args} />
    </View>
  ),
};

export const NoImages: Story = {
  args: reviews[1],
  render: (args) => (
    <View style={{ width: 280 }}>
      <ReviewCard {...args} />
    </View>
  ),
};

export const Minimal: Story = {
  args: reviews[2],
  render: (args) => (
    <View style={{ width: 280 }}>
      <ReviewCard {...args} />
    </View>
  ),
};
