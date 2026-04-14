import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Rating } from "@swiss-activities/ui";
import {
  ratingSizes,
  type RatingSize,
} from "@swiss-activities/ui/rating/rating.types";
import { Text, View } from "react-native-css/components";

const meta = {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    score: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
    },
    count: {
      control: { type: "number", min: 0 },
    },
    size: {
      options: [...ratingSizes],
      control: "inline-radio",
    },
    showScore: {
      control: "boolean",
    },
  },
  args: {
    score: 4.8,
    count: 187,
    showScore: true,
    size: "default",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Rating {...args} />
    </View>
  ),
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    score: 4.5,
    showScore: false,
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    score: 4.8,
    count: 42,
    size: "sm",
  },
};

export const WithLabel: Story = {
  args: {
    score: 4.6,
    label: (
      <Text className="text-xs text-gray-700">
        (215 Reviews - 1,240x booked)
      </Text>
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ padding: 16, gap: 24 }}>
      {ratingSizes.map((size) => (
        <View
          key={size}
          style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
        >
          <Text style={{ width: 64, fontSize: 14, color: "#737373" }}>
            {size}
          </Text>
          <Rating
            score={4.5}
            count={120}
            size={size as RatingSize}
            label={
              size === "default" || size === "lg" ? (
                <Text className="text-xs text-gray-700">(120 Reviews)</Text>
              ) : undefined
            }
          />
        </View>
      ))}
    </View>
  ),
};
