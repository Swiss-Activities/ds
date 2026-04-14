import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { heroTitles } from "@swiss-activities/dummy-data";
import { SectionHero } from "@swiss-activities/ui";
import { StoryScrollScreen, getHeroImage, getWeatherDaysLong } from "./story-data";

const meta = {
  title: "Sections/SectionHero",
  component: SectionHero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.hero,
    image: getHeroImage(),
    days: getWeatherDaysLong(),
    selected: "0",
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);

    return (
      <StoryScrollScreen>
        <SectionHero {...args} selected={selected} onSelect={setSelected} />
      </StoryScrollScreen>
    );
  },
};
