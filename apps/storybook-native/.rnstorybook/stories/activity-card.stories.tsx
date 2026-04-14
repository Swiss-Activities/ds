import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { ActivityCard } from "@swiss-activities/ui";
import { View } from "react-native";
import { getActivityItems } from "./story-data";

const items = getActivityItems();

const meta = {
  title: "Components/ActivityCard",
  component: ActivityCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
    },
    reviewCount: {
      control: { type: "number", min: 0 },
    },
  },
} satisfies Meta<typeof ActivityCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: items[0],
  render: (args) => (
    <View style={{ width: 280 }}>
      <ActivityCard {...args} />
    </View>
  ),
};

export const CliffWalk: Story = {
  args: items[1],
  render: (args) => (
    <View style={{ width: 280 }}>
      <ActivityCard {...args} />
    </View>
  ),
};
