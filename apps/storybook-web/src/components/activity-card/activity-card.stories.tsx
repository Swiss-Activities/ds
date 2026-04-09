import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityCard } from "@swiss-activities/ui";

const meta = {
  title: "Web & Mobile/ActivityCard",
  component: ActivityCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    score: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
    },
    reviewCount: {
      control: { type: "number", min: 0 },
    },
  },
} satisfies Meta<typeof ActivityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  render: (args) => (
    <div className="w-[280px]">
      <ActivityCard {...args} />
    </div>
  ),
};

export const CliffWalk: Story = {
  args: {
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
  render: (args) => (
    <div className="w-[280px]">
      <ActivityCard {...args} />
    </div>
  ),
};
