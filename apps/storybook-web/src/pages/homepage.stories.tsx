import { useState } from "react";
import type { StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import { SectionHero, SectionActivityGrid } from "@swiss-activities/ui";
import { getActivityItems, getHeroImage, getWeatherDaysLong } from "../story-data";
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
        <SectionActivityGrid
          title={heroTitles.sectionActivityGrid}
          activities={getActivityItems()}
          className="py-6"
        />
      </Page>
    );
  },
};
