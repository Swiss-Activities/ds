import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { SectionFilters } from "@swiss-activities/ui";
import { StoryScrollScreen, getHomepageFilters } from "./story-data";

const meta = {
  title: "Sections/SectionFilters",
  component: SectionFilters,
  args: {
    items: getHomepageFilters(),
  },
} satisfies Meta<typeof SectionFilters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <StoryScrollScreen>
      <SectionFilters {...args} />
    </StoryScrollScreen>
  ),
};
