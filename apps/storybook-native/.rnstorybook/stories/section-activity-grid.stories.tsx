import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { heroTitles } from "@swiss-activities/dummy-data";
import { SectionActivityGrid } from "@swiss-activities/ui";
import { getActivityItems, StoryScrollScreen } from "./story-data";

const meta = {
  title: "Sections/SectionActivityGrid",
  component: SectionActivityGrid,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionActivityGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
  },
  render: (args) => (
    <StoryScrollScreen>
      <SectionActivityGrid {...args} />
    </StoryScrollScreen>
  ),
};
