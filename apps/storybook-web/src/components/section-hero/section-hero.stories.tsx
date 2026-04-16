import { useEffect, useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useGatewayStore } from "@swiss-activities/data";
import { heroTitles } from "@swiss-activities/dummy-data";
import { SectionHero, Text } from "@swiss-activities/ui";
import {
  getHeroImage,
  getHomepageHeroDefaultTabId,
  getHomepageHeroTabs,
  getWeatherDaysLong,
} from "../../story-data";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionHero",
  component: SectionHero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionHero>;

export default meta;
type Story = StoryObj<typeof meta>;

function HeroOverlayPreview() {
  return (
    <>
      <Text
        size="md2"
        className="mb-0.5 text-center !text-white sm:!text-lg"
      >
        Swiss Activities
      </Text>
      <Text
        as="h1"
        size="2xl"
        className="text-center !text-white sm:!text-4xl"
      >
        Entdecke dein nächstes Erlebnis
      </Text>
    </>
  );
}

function LocalizedSectionHeroPreview() {
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
    </Page>
  );
}

function FallbackSectionHeroPreview() {
  const tabs = useMemo(() => getHomepageHeroTabs(), []);
  const initialTabId = tabs[0]?.id ?? getHomepageHeroDefaultTabId() ?? null;
  const selectedTabId = useGatewayStore((state) => state.selectedTabId);
  const setSelectedTabId = useGatewayStore((state) => state.setSelectedTabId);
  const reset = useGatewayStore((state) => state.reset);

  useEffect(() => {
    reset();

    if (initialTabId) {
      setSelectedTabId(initialTabId);
    }

    return reset;
  }, [initialTabId, reset, setSelectedTabId]);

  return (
    <Page>
      <SectionHero
        image={getHeroImage()}
        overlay={<HeroOverlayPreview />}
        variant="fallback"
        tabs={tabs}
        selectedTabId={selectedTabId ?? initialTabId ?? undefined}
        onSelectTab={setSelectedTabId}
        className="pb-6"
      />
    </Page>
  );
}

export const Default: Story = {
  render: () => <LocalizedSectionHeroPreview />,
};

export const Fallback: Story = {
  render: () => <FallbackSectionHeroPreview />,
};
