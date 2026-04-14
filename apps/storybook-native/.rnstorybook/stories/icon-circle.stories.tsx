import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { IconCircle } from "@swiss-activities/ui";
import { Text, View } from "react-native-css/components";

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
    icon: "⭐",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};

export const Emoji: Story = {
  args: {
    icon: "🏔️",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};

export const CustomSize: Story = {
  args: {
    icon: <Text className="text-xl text-primary">✓</Text>,
    className: "h-12 w-12",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};
