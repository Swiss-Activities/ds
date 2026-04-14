import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { IconCircle } from "@swiss-activities/ui";
import { Text, View } from "react-native-css/components";

const meta = {
  title: "Components/IconCircle",
  component: IconCircle,
} satisfies Meta<typeof IconCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Text>⭐</Text>,
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};

export const Emoji: Story = {
  args: {
    icon: <Text>🏔️</Text>,
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};
