import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Checkbox } from "@swiss-activities/ui";
import { View } from "react-native-css/components";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    title: "Familienfreundlich",
    selected: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Checkbox {...args} />
    </View>
  ),
};
