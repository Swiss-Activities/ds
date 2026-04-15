import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { FilterCheckboxGroup } from "@swiss-activities/ui";
import { View } from "react-native-css/components";
import { getHomepageFilterGroups } from "./story-data";

const [categoryGroup] = getHomepageFilterGroups();

const meta = {
  title: "Components/FilterCheckboxGroup",
  component: FilterCheckboxGroup,
  args: {
    title: categoryGroup.title,
    items: categoryGroup.items,
  },
} satisfies Meta<typeof FilterCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    type: "inline",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <FilterCheckboxGroup {...args} />
    </View>
  ),
};

export const Accordion: Story = {
  args: {
    type: "accordion",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <FilterCheckboxGroup {...args} />
    </View>
  ),
};
