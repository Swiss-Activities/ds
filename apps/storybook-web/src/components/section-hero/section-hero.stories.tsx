import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useGatewayStore } from "@swiss-activities/data";
import { heroTitles } from "@swiss-activities/dummy-data";
import {
  Icon,
  SearchBar,
  SectionHero,
  Text,
  renderWeatherIcon,
} from "@swiss-activities/ui";
import { Clock3, MapPin } from "@swiss-activities/ui/icons";
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

type SummaryHeroStoryData = {
  city: string;
  count: number;
  daypart: string;
  placeholder: string;
  temperature: string;
  time: string;
  weather: string;
  weatherIcon: "sun" | "cloud" | "cloud-rain" | "cloud-storm";
};

function HeroOverlayPreview() {
  return (
    <>
      <Text size="md2" className="mb-0.5 text-center !text-white sm:!text-lg">
        Swiss Activities
      </Text>
      <Text as="h1" size="2xl" className="text-center !text-white sm:!text-4xl">
        Entdecke dein nächstes Erlebnis
      </Text>
    </>
  );
}

function LocalizedSectionHeroPreview() {
  const [selected, setSelected] = useState("0");

  return (
    <Page>
      <div className="sa-container">
        <div className="-mx-2 sm:mx-0">
          <SectionHero
            title={heroTitles.hero}
            image={getHeroImage()}
            search={
              <SearchBar
                mode="main"
                placeholder="Search 12,000 Swiss things to do near Interlaken..."
              />
            }
            days={getWeatherDaysLong()}
            selected={selected}
            onSelect={(id) => {
              if (typeof id === "string") {
                setSelected(id);
              }
            }}
          />
        </div>
      </div>
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
      <div className="sa-container">
        <div className="-mx-2 sm:mx-0">
          <SectionHero
            image={getHeroImage()}
            overlay={<HeroOverlayPreview />}
            variant="fallback"
            tabs={tabs}
            selectedTabId={selectedTabId ?? initialTabId ?? undefined}
            onSelectTab={setSelectedTabId}
          />
        </div>
      </div>
    </Page>
  );
}

function TemperatureWithIcon({
  icon,
  temperature,
}: {
  icon: ReactNode;
  temperature: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
      <span className="inline-flex h-6 w-6 items-center justify-center">
        {icon}
      </span>
      {temperature}
    </span>
  );
}

function SummarySectionHeroPreview({
  city,
  count,
  daypart,
  placeholder,
  temperature,
  time,
  weather,
  weatherIcon,
}: SummaryHeroStoryData) {
  const icon = renderWeatherIcon(weatherIcon, "md");

  return (
    <Page>
      <SectionHero
        variant="summary"
        title={
          <>
            {daypart} in {city}.{" "}
            <TemperatureWithIcon icon={icon} temperature={temperature} /> and{" "}
            {weather}. {count} outdoor experiences within 30 minutes of you.
          </>
        }
        search={<SearchBar mode="main" placeholder={placeholder} />}
        tags={[
          {
            id: "location",
            icon: <Icon icon={MapPin} size="xs" />,
            label: city,
          },
          {
            id: "weather",
            icon,
            label: weather,
          },
          {
            id: "time",
            icon: <Icon icon={Clock3} size="xs" />,
            label: "14:00",
          },
        ]}
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

export const SummarySunny: Story = {
  render: () => (
    <SummarySectionHeroPreview
      city="Zurich"
      count={12}
      daypart="Tuesday afternoon"
      placeholder="Search 12,000 Swiss things to do near Zurich..."
      temperature="18°C"
      time="14:00"
      weather="sunny"
      weatherIcon="sun"
    />
  ),
};

export const SummaryRain: Story = {
  render: () => (
    <SummarySectionHeroPreview
      city="Lucerne"
      count={8}
      daypart="Friday morning"
      placeholder="Search indoor and rainy-day ideas near Lucerne..."
      temperature="11°C"
      time="09:30"
      weather="light rain"
      weatherIcon="cloud-rain"
    />
  ),
};

export const SummaryCloudy: Story = {
  render: () => (
    <SummarySectionHeroPreview
      city="Basel"
      count={19}
      daypart="Saturday evening"
      placeholder="Search museums, tours, and activities near Basel..."
      temperature="15°C"
      time="18:45"
      weather="cloudy"
      weatherIcon="cloud"
    />
  ),
};
