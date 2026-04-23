import { useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  heroTitles,
  productBreadcrumbs,
} from "@swiss-activities/dummy-data";
import {
  SectionProduct,
} from "@swiss-activities/ui";
import {
  getContentBlocks,
  getHeroGallery,
  getProductInfoBadges,
  getProductInfoCards,
  getRelatedActivityItems,
  getSectionProductReviews,
} from "../../story-data";
import { Page } from "../page";

const infoBadges = getProductInfoBadges();
const infoCards = getProductInfoCards();

function SectionProductStoryPage(args: Story["args"]) {
  const heroGallery = useMemo(() => getHeroGallery(), []);
  const reviews = useMemo(() => getSectionProductReviews(), []);
  const contentItems = useMemo(() => getContentBlocks(), []);
  const relatedActivities = useMemo(() => getRelatedActivityItems(), []);

  return (
    <Page className="bg-white">
      <SectionProduct
        {...args}
        images={heroGallery}
        rating={{ score: 4.7, stacked: true }}
        badges={infoBadges}
        description="Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das Jungfraujoch. Auch bekannt als Top of Europe liegt das Jungfraujoch mit Europas hochstem Bahnhof auf 3454 m u. M."
        infoItems={infoCards}
        reviewsTitle="Bewertungen"
        reviews={reviews}
        contentItems={contentItems}
        relatedActivitiesTitle={heroTitles.relatedActivities}
        relatedActivities={relatedActivities}
      />
    </Page>
  );
}

const meta = {
  title: "Sections/SectionProduct",
  component: SectionProduct,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.product,
    images: [],
    backLabel: heroTitles.hero,
    backHref: "#",
    breadcrumbs: [...productBreadcrumbs],
  },
  render: (args) => <SectionProductStoryPage {...args} />,
};
