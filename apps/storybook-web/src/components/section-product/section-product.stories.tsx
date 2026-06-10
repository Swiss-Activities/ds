import { useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  heroTitles,
  productBreadcrumbs,
} from "@swiss-activities/dummy-data";
import {
  SectionProduct,
  SectionReviews,
} from "@swiss-activities/ui";
import {
  getContentBlocks,
  getHeroGallery,
  getProductInfoBadges,
  getProductInfoCards,
  getRelatedActivityItems,
  getSectionReviewsItems,
  getSectionReviewsLabels,
} from "../../story-data";
import { Page } from "../page";

const infoBadges = getProductInfoBadges();
const infoCards = getProductInfoCards();

function SectionProductStoryPage(args: Story["args"]) {
  const heroGallery = useMemo(() => getHeroGallery(), []);
  const reviews = useMemo(() => getSectionReviewsItems(), []);
  const reviewLabels = useMemo(() => getSectionReviewsLabels(), []);
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
        reviewsContent={
          <SectionReviews
            averageRating={4.8}
            labels={reviewLabels}
            reviewCount={204}
            reviews={reviews}
          />
        }
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
    breadcrumbs: [...productBreadcrumbs],
  },
  render: (args) => <SectionProductStoryPage {...args} />,
};
