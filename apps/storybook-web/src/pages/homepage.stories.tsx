import { useState } from "react";
import type { StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import {
  SectionActivityGrid,
  SectionFilters,
  SectionHero,
} from "@swiss-activities/ui";
import {
  getActivityItems,
  getHeroImage,
  getHomepageFilters,
  getWeatherDaysLong,
} from "../story-data";
import { Page } from "../components/page";

export default {
  title: "Pages/Homepage",
  parameters: { layout: "fullscreen" },
};

export const Default: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState("0");
    return (
      <Page>
        <SectionHero
          title={heroTitles.hero}
          image={getHeroImage()}
          days={getWeatherDaysLong()}
          selected={selected}
          onSelect={(id) => {
            if (typeof id === "string") {
              setSelected(id);
            }
          }}
          className="pb-6"
        />
        <SectionFilters
          desktopDrawer="left"
          items={getHomepageFilters()}
          className="pb-2"
        />
        <SectionActivityGrid
          title={heroTitles.sectionActivityGrid}
          activities={getActivityItems()}
          className="py-6"
        />
      </Page>
    );
  },
};
