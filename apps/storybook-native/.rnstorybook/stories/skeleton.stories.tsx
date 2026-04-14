import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Skeleton } from "@swiss-activities/ui";
import { skeletonSizes } from "@swiss-activities/ui/skeleton/skeleton.types";
import { Text, View } from "react-native-css/components";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
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
    <View style={{ padding: 16, width: 360 }}>
      <Skeleton {...args} />
    </View>
  ),
};

export const Sizes: Story = {
  args: {
    loading: true,
    size: "sm",
    amount: 1,
  },
  render: () => (
    <View style={{ padding: 16, width: 360, gap: 24 }}>
      {skeletonSizes.map((size) => (
        <View key={size} style={{ gap: 8 }}>
          <Text style={{ fontSize: 14, color: "#737373" }}>{size}</Text>
          <Skeleton loading size={size} amount={1} />
        </View>
      ))}
    </View>
  ),
};
