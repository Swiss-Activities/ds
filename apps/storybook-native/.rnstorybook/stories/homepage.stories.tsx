import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { heroTitles } from "@swiss-activities/dummy-data";
import {
  SectionActivityGrid,
  SectionFilters,
  SectionHero,
} from "@swiss-activities/ui";
import {
  StoryScrollScreen,
  getActivityItems,
  getHomepageFilterDrawerContent,
  getHeroImage,
  getHomepageFilters,
  getWeatherDaysLong,
} from "./story-data";

const meta = {
  title: "Pages/Homepage",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState("0");

    return (
      <StoryScrollScreen>
        <SectionHero
          title={heroTitles.hero}
          image={getHeroImage()}
          days={getWeatherDaysLong()}
          selected={selected}
          onSelect={setSelected}
        />
        <SectionFilters
          items={getHomepageFilters()}
          drawerContent={getHomepageFilterDrawerContent()}
        />
        <SectionActivityGrid
          title={heroTitles.sectionActivityGrid}
          activities={getActivityItems()}
        />
      </StoryScrollScreen>
    );
  },
};
