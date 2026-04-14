import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewCard } from "@swiss-activities/ui";

const meta = {
  title: "Components/ReviewCard",
  component: ReviewCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "Willhelmine",
    countryCode: "CH",
    date: "3 days ago",
    rating: 5,
    upvoteCount: 24,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla...",
    images: [
      <img key="1" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg" alt="Photo 1" />,
      <img key="2" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg" alt="Photo 2" />,
      <img key="3" src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg" alt="Photo 3" />,
    ],
    translatedFrom: "Chinese (simplified)",
    className: "max-w-[280px]",
  },
};

export const NoImages: Story = {
  args: {
    author: "Marco",
    countryCode: "DE",
    date: "1 week ago",
    rating: 4,
    upvoteCount: 8,
    text: "Tolles Erlebnis! Die Aussicht vom Jungfraujoch ist atemberaubend. Würde es jedem empfehlen.",
    className: "max-w-[280px]",
  },
};

export const Minimal: Story = {
  args: {
    author: "Sarah",
    date: "2 weeks ago",
    rating: 5,
    text: "Amazing experience, highly recommended!",
    className: "max-w-[280px]",
  },
};
