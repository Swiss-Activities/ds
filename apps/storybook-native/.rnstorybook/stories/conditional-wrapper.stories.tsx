import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { ConditionalWrapper } from "@swiss-activities/ui";
import type { ReactNode } from "react";
import { Text, View } from "react-native-css/components";

const meta = {
  title: "Components/ConditionalWrapper",
  component: ConditionalWrapper,
  argTypes: {
    condition: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof ConditionalWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithWrapper: Story = {
  args: {
    condition: true,
    wrapper: (children: ReactNode) => (
      <View
        style={{ padding: 16, backgroundColor: "#f9fafb", borderRadius: 8 }}
      >
        {children}
      </View>
    ),
    children: (
      <Text style={{ fontSize: 14, color: "#404040" }}>
        This content is wrapped
      </Text>
    ),
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <ConditionalWrapper {...args} />
    </View>
  ),
};

export const WithoutWrapper: Story = {
  args: {
    condition: false,
    wrapper: (children: ReactNode) => (
      <View
        style={{ padding: 16, backgroundColor: "#f9fafb", borderRadius: 8 }}
      >
        {children}
      </View>
    ),
    children: (
      <Text style={{ fontSize: 14, color: "#404040" }}>
        This content is not wrapped
      </Text>
    ),
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <ConditionalWrapper {...args} />
    </View>
  ),
};
