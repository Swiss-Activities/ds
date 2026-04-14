import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Button, Flow } from "@swiss-activities/ui";
import { Text } from "react-native-css/components";

const meta = {
  title: "Components/Flow",
  component: Flow,
  argTypes: {
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Flow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "px-4",
  },
  render: (args) => (
    <Flow {...args}>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#0f172b" }}>
        Discover Switzerland
      </Text>
      <Text style={{ fontSize: 14, color: "#45556c" }}>
        Hand-picked activities with instant booking and flexible cancellation.
      </Text>
      <Button>Explore Activities</Button>
    </Flow>
  ),
};
