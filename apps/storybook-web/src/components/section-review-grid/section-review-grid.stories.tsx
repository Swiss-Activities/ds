import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionReviewGrid, type ReviewItem } from "@swiss-activities/ui";
import { getSectionProductReviews } from "../../story-data";
import { Page } from "../page";

const homepageReviews: ReviewItem[] = [
  {
    id: "rolf",
    author: "Rolf",
    countryCode: "CH",
    location: "Zurich",
    rating: 5,
    text: "Genau das, was ich am Sonntag gesucht habe - und ich wohne hier seit zehn Jahren.",
    activity: {
      label: "paragliding",
      href: "/paragliding/",
    },
    translatedFromLabel: "Original auf Deutsch",
  },
  {
    id: "sabine",
    author: "Sabine",
    countryCode: "CH",
    location: "Bern",
    rating: 5,
    text: "Endlich eine Schweizer Seite, die nicht aussieht wie eine Touristen-Falle.",
    activity: {
      label: "Beyeler exhibition",
      href: "/app/v1/exhibitions/fondation-beyeler",
    },
    translatedFromLabel: "Original auf Deutsch",
  },
  {
    id: "marc",
    author: "Marc",
    countryCode: "CH",
    location: "Geneva",
    rating: 5,
    text: "Bin auf das Maggiatal gestossen - nie davon gehoert, war ein perfekter Tag.",
    activity: {
      label: "waterfall swim",
      href: "/search?tags=waterfall",
    },
    translatedFromLabel: "Original auf Deutsch",
  },
];

const meta = {
  title: "Sections/SectionReviewGrid",
  component: SectionReviewGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionReviewGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomepageGrid: Story = {
  args: {
    title: "What other Swiss visitors say",
    reviews: homepageReviews,
    variant: "grid",
    activityPrefix: "on",
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionReviewGrid {...args} className="py-6" />
      </div>
    </Page>
  ),
};

export const ProductScroller: Story = {
  args: {
    title: "Bewertungen",
    reviews: getSectionProductReviews(),
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionReviewGrid {...args} className="py-6" />
      </div>
    </Page>
  ),
};
