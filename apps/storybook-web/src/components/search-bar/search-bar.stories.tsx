import { useState, type ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, SearchBar, SearchBarResultItem, Text } from "@swiss-activities/ui";

const sampleResults = [
  {
    variant: "location" as const,
    title: "Interlaken",
    subtitle: "Region Bern",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
  },
  {
    variant: "poi" as const,
    title: "Jungfraujoch - Top of Europe",
    subtitle: "Region Bern",
    detail: "Interlaken",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Eiger_Express_Grindelwald_Eigernordwand_Weitansicht_Kabine_rechts_f1841d7182.jpg",
  },
  {
    variant: "activity" as const,
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    subtitle: "Interlaken",
    detail: "Bergbahn",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/29_Oeschinensee_Seraina_57b2a4db85.jpg",
  },
  {
    variant: "activity-listing" as const,
    title: "Paragliding",
    subtitle: "Luftaktivitaet",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
  },
  {
    variant: "discovery" as const,
    title: "Spielplatz Hornanlage",
    subtitle: "Kuesnacht ZH",
    detail: "Spielplatz",
    imageSrc:
      "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Pilatus_Dragon_Ride_Winter_Gipfelpanorama_086c9962cd.jpg",
  },
  {
    variant: "supplier" as const,
    title: "Bike- und Skirental-Zueri",
    subtitle: "Zuerich",
    detail: "Vermietung",
  },
  {
    variant: "discovery" as const,
    title: "Feuerstelle Pfingstegg",
    subtitle: "Grindelwald",
    detail: "Feuerstelle",
    distance: "350 m",
  },
];

function SearchResults({ value }: { value: string }) {
  const items = sampleResults.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  if (items.length === 0) {
    return (
      <div className="px-4 py-6">
        <Text>No results</Text>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <SearchBarResultItem
          key={`${item.variant}-${item.title}`}
          {...item}
        />
      ))}
    </>
  );
}

function SearchBarDemo({
  controls,
  mobileControls,
  mode = "default",
}: {
  controls?: ReactNode;
  mobileControls?: ReactNode;
  mode?: "default" | "main" | "mobile";
}) {
  const [value, setValue] = useState("");

  return (
    <div className="w-[min(100vw-2rem,720px)]">
      <SearchBar
        mode={mode}
        value={value}
        onValueChange={setValue}
        onClear={() => setValue("")}
        onSubmit={(nextValue) => {
          // Story-only noop handler to mirror website submit behavior.
          console.log("submit", nextValue);
        }}
        controls={controls}
        mobileControls={mobileControls ?? controls}
        empty={
          <div className="px-4 py-6">
            <Text>No results</Text>
          </div>
        }
      >
        <SearchResults value={value} />
      </SearchBar>
    </div>
  );
}

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SearchBarDemo />,
};

export const Main: Story = {
  render: () => (
    <SearchBarDemo
      mode="main"
      controls={
        <div className="hidden gap-1 sm:flex">
          <Button type="outline-gray" size="sm" text="Kalender" />
          <Button type="outline-gray" size="sm" text="Personen" />
        </div>
      }
      mobileControls={
        <div className="flex flex-col gap-2 sm:hidden">
          <Button type="outline-gray" size="sm" text="Kalender" />
          <Button type="outline-gray" size="sm" text="Personen" />
        </div>
      }
    />
  ),
};

export const Mobile: Story = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <div className="mx-auto max-w-md bg-white pt-6">
      <SearchBarDemo
        mode="mobile"
        controls={
          <div className="hidden gap-2 sm:flex">
            <Button type="outline-gray" size="sm" text="Kalender" />
            <Button type="outline-gray" size="sm" text="Personen" />
          </div>
        }
        mobileControls={
          <div className="flex flex-col gap-2 sm:hidden">
            <Button type="outline-gray" size="sm" text="Kalender" />
            <Button type="outline-gray" size="sm" text="Personen" />
          </div>
        }
      />
    </div>
  ),
};

export const ResultTypes: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="min-h-screen bg-[#211f1f] px-4 py-8">
      <div className="mx-auto max-w-sm space-y-4">
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestLocation</Text>
          <SearchBarResultItem
            {...sampleResults[0]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestPOI</Text>
          <SearchBarResultItem
            {...sampleResults[1]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestActivity</Text>
          <SearchBarResultItem
            {...sampleResults[2]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestActivityListing</Text>
          <SearchBarResultItem
            {...sampleResults[3]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestDiscovery</Text>
          <SearchBarResultItem
            {...sampleResults[4]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">SuggestSupplier</Text>
          <SearchBarResultItem
            {...sampleResults[5]}
            className="bg-white hover:bg-white"
          />
        </div>
        <div className="space-y-2">
          <Text className="!text-xs !text-gray-400">
            SuggestDiscovery with Distance
          </Text>
          <SearchBarResultItem
            {...sampleResults[6]}
            className="bg-white hover:bg-white"
          />
        </div>
      </div>
    </div>
  ),
};
