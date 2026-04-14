import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  Card,
  SectionScroller,
  Text,
  sectionScrollerItemClassName,
} from "@swiss-activities/ui";
import { View } from "react-native-css/components";
import { StoryScrollScreen } from "./story-data";

const meta = {
  title: "Sections/SectionScroller",
  component: SectionScroller,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionScroller>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Section Title",
    children: Array.from({ length: 8 }, (_, index) => (
      <View key={index} className={sectionScrollerItemClassName}>
        <Card className="flex h-[200px] items-center justify-center">
          <Text gray>Item {index + 1}</Text>
        </Card>
      </View>
    )),
  },
  render: (args) => (
    <StoryScrollScreen>
      <SectionScroller {...args} />
    </StoryScrollScreen>
  ),
};

export const WithSubtitle: Story = {
  args: {
    title: "With Subtitle",
    subtitle: (
      <Text size="xs" gray>
        12 items
      </Text>
    ),
    children: Array.from({ length: 12 }, (_, index) => (
      <View key={index} className={sectionScrollerItemClassName}>
        <Card className="flex h-[160px] items-center justify-center">
          <Text gray>Item {index + 1}</Text>
        </Card>
      </View>
    )),
  },
  render: (args) => (
    <StoryScrollScreen>
      <SectionScroller {...args} />
    </StoryScrollScreen>
  ),
};
