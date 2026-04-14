import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { IconCircle } from "@swiss-activities/ui";
import { Check, Mountain, Star } from "@swiss-activities/ui/icons";
import { View } from "react-native-css/components";

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
    icon: <Star size={18} color="#002f49" fill="#002f49" strokeWidth={1.8} />,
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};

export const MountainIcon: Story = {
  args: {
    icon: <Mountain size={18} color="#002f49" strokeWidth={1.8} />,
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};

export const CustomSize: Story = {
  args: {
    icon: <Check size={22} color="#002f49" strokeWidth={2} />,
    className: "h-12 w-12",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <IconCircle {...args} />
    </View>
  ),
};
