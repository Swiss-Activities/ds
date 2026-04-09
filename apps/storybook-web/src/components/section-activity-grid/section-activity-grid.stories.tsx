import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionActivityGrid } from "@swiss-activities/ui";
import type { ActivityItem } from "@swiss-activities/ui";

const activities: ActivityItem[] = [
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
        alt="Jungfraujoch"
      />
    ),
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    score: 4.7,
    reviewCount: 100,
    priceLabel: "pro Person",
    price: "ab CHF 233.80",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="Grindelwald First Cliff Walk"
      />
    ),
    title: "Grindelwald: First Cliff Walk by Tissot",
    score: 4.5,
    reviewCount: 64,
    priceLabel: "pro Person",
    price: "ab CHF 68.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
        alt="Pilatus"
      />
    ),
    title: "Luzern: Tagespass Pilatus — Seilbahn, Zahnradbahn & Schifffahrt",
    score: 4.8,
    reviewCount: 215,
    priceLabel: "pro Person",
    price: "ab CHF 119.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
        alt="Harder Kulm"
      />
    ),
    title: "Interlaken: Harder Kulm — Top of Interlaken Ticket",
    score: 4.6,
    reviewCount: 87,
    priceLabel: "pro Person",
    price: "ab CHF 42.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="First Top of Adventure"
      />
    ),
    title: "Grindelwald: First — Top of Adventure Ticket",
    score: 4.4,
    reviewCount: 53,
    priceLabel: "pro Person",
    price: "ab CHF 74.00",
  },
  {
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
        alt="Zürichsee"
      />
    ),
    title: "Zürich: Stadtrundfahrt mit Schifffahrt auf dem Zürichsee",
    score: 4.3,
    reviewCount: 142,
    priceLabel: "pro Person",
    price: "ab CHF 56.00",
  },
];

const meta = {
  title: "Sections/SectionActivityGrid",
  component: SectionActivityGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionActivityGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Beliebte Aktivitäten in Interlaken",
    activities,
  },
  render: (args) => (
    <div className="mx-auto max-w-[1232px] px-2 py-8 sm:px-4">
      <SectionActivityGrid {...args} />
    </div>
  ),
};
