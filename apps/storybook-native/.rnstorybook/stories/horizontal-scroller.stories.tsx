import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  HorizontalScroller,
  horizontalScrollerVariants,
} from "@swiss-activities/ui";
import { Text, View } from "react-native-css/components";

const items = Array.from({ length: 8 }, (_, i) => (
  <View key={i} className="mr-2 shrink-0 rounded-full bg-gray-100 px-4 py-2">
    <Text className="text-sm">Item {i + 1}</Text>
  </View>
));

const meta = {
  title: "Web & Mobile/HorizontalScroller",
  component: HorizontalScroller,
  argTypes: {
    variant: {
      control: "select",
      options: horizontalScrollerVariants,
    },
  },
  args: {
    variant: "white",
  },
  render: (args) => <HorizontalScroller {...args} />,
} satisfies Meta<typeof HorizontalScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "white",
    children: items,
  },
};

export const WithManyItems: Story = {
  args: {
    variant: "white",
    children: Array.from({ length: 20 }, (_, i) => (
      <View
        key={i}
        className="mr-2 shrink-0 rounded-full bg-gray-100 px-4 py-2"
      >
        <Text className="text-sm">Item {i + 1}</Text>
      </View>
    )),
  },
};
