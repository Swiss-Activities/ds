import { useEffect, useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useGatewayStore } from "@swiss-activities/data";
import { heroTitles } from "@swiss-activities/dummy-data";
import { HeroSkeleton, SectionActivityGrid, SectionHero, Text } from "@swiss-activities/ui";
import {
  getActivityItems,
  getHomepageHeroDefaultTabId,
  getHomepageHeroSections,
  getHomepageHeroTabs,
  getHeroImage,
  getWeatherDaysLong,
} from "../story-data";
import { Page } from "../components/page";

type GatewayPreviewArgs = {
  delayMs: number;
  outcome: "success" | "error";
};

function HomepageHeroOverlay() {
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

function LocalizedHomepagePreview() {
  const [selected, setSelected] = useState("0");

  return (
    <Page>
      <div className="sa-container">
        <div className="-mx-2 sm:mx-0">
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
        </div>
      </div>
      <div className="sa-container">
        <SectionActivityGrid
          title={heroTitles.sectionActivityGrid}
          activities={getActivityItems()}
          className="py-6"
        />
      </div>
    </Page>
  );
}

function FallbackHomepagePreview() {
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

  const activeTabId = selectedTabId ?? initialTabId ?? undefined;
  const sections = useMemo(
    () => getHomepageHeroSections(activeTabId),
    [activeTabId]
  );

  return (
    <Page>
      <div className="sa-container">
        <div className="-mx-2 sm:mx-0">
          <SectionHero
            image={getHeroImage()}
            overlay={<HomepageHeroOverlay />}
            variant="fallback"
            tabs={tabs}
            selectedTabId={activeTabId}
            onSelectTab={setSelectedTabId}
            className="pb-6"
          />
        </div>
      </div>
      {sections.map((section) => (
        <div key={section.id} className="sa-container">
          <SectionActivityGrid
            title={section.title}
            activities={section.activities}
            className="py-6"
          />
        </div>
      ))}
    </Page>
  );
}

function GatewayHomepagePreview({
  delayMs,
  outcome,
}: GatewayPreviewArgs) {
  const tabs = useMemo(() => getHomepageHeroTabs(), []);
  const initialTabId = tabs[0]?.id ?? getHomepageHeroDefaultTabId() ?? null;
  const selectedTabId = useGatewayStore((state) => state.selectedTabId);
  const setSelectedTabId = useGatewayStore((state) => state.setSelectedTabId);
  const reset = useGatewayStore((state) => state.reset);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    reset();

    if (initialTabId) {
      setSelectedTabId(initialTabId);
    }

    return reset;
  }, [initialTabId, reset, setSelectedTabId]);

  const activeTabId = selectedTabId ?? initialTabId ?? undefined;
  const fallbackSections = useMemo(
    () => [
      {
        id: "fallback-highlights",
        title: heroTitles.sectionActivityGrid,
        activities: getActivityItems(),
      },
    ],
    []
  );
  const gatewaySections = useMemo(
    () => getHomepageHeroSections(activeTabId),
    [activeTabId]
  );

  useEffect(() => {
    setStatus("loading");

    const timer = setTimeout(() => {
      setStatus(outcome);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [activeTabId, delayMs, outcome]);

  const sections = status === "success" ? gatewaySections : fallbackSections;
  const isLoading = status === "loading";

  return (
    <Page>
      <div className="sa-container">
        <div className="-mx-2 pb-6 sm:mx-0">
          <div className="relative">
            <SectionHero
              image={getHeroImage()}
              overlay={<HomepageHeroOverlay />}
              variant="fallback"
              tabs={tabs}
              selectedTabId={activeTabId}
              onSelectTab={setSelectedTabId}
            />
            {isLoading ? <HeroSkeleton fill className="z-50" /> : null}
          </div>
        </div>
      </div>
      {sections.map((section) => (
        <div key={section.id} className="sa-container">
          <SectionActivityGrid
            title={section.title}
            activities={section.activities}
            loading={isLoading}
            className="py-6"
          />
        </div>
      ))}
    </Page>
  );
}

const meta = {
  title: "Pages/Homepage",
  parameters: { layout: "fullscreen" },
  argTypes: {
    outcome: {
      options: ["success", "error"],
      control: "inline-radio",
    },
    delayMs: {
      control: { type: "number", min: 0, step: 100 },
    },
  },
} satisfies Meta<GatewayPreviewArgs>;

export default meta;

type Story = StoryObj<GatewayPreviewArgs>;

export const Default: Story = {
  render: () => <LocalizedHomepagePreview />,
};

export const Fallback: Story = {
  render: () => <FallbackHomepagePreview />,
};

export const GatewayLoading: Story = {
  args: {
    delayMs: 1500,
    outcome: "success",
  },
  render: (args) => <GatewayHomepagePreview {...args} />,
};
