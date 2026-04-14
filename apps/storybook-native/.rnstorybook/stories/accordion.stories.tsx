import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Accordion } from "@swiss-activities/ui";
import { View } from "react-native";
import { getAccordionItems } from "./story-data";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: getAccordionItems(),
  },
  render: (args) => (
    <View style={{ width: "100%", maxWidth: 600, alignSelf: "center" }}>
      <Accordion {...args} />
    </View>
  ),
};
