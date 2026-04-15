import { useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  heroTitles,
  productBreadcrumbs,
} from "@swiss-activities/dummy-data";
import {
  ContentBlocks,
  InfoBadge,
  ProductInfoList,
  Rating,
  SectionActivityGrid,
  SectionProduct,
  SectionReviewGrid,
  Text,
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
        className="pb-6 lg:pb-4"
      >
        <div className="mt-4 flex items-center gap-6 lg:mt-6">
          <Rating score={4.7} stacked />
          <div className="h-8 w-px bg-gray-200" />
          <InfoBadge
            icon={infoBadges[0].icon}
            title={infoBadges[0].title}
            subtitle={infoBadges[0].subtitle}
          />
          <div className="h-8 w-px bg-gray-200" />
          <InfoBadge
            icon={infoBadges[1].icon}
            title={infoBadges[1].title}
            subtitle={infoBadges[1].subtitle}
          />
        </div>
        <Text className="mt-4 max-w-screen-sm text-balance lg:mt-6">
          Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das
          Jungfraujoch. Auch bekannt als Top of Europe liegt das Jungfraujoch
          mit Europas hochstem Bahnhof auf 3454 m u. M.
        </Text>
      </SectionProduct>
      <section className="pt-0 pb-0 lg:pt-4 lg:pb-10">
        <div className="sa-container">
          <ProductInfoList items={infoCards} />
        </div>
      </section>
      <section className="bg-bg pt-6 pb-8 lg:py-10">
        <SectionReviewGrid
          title="Bewertungen"
          as="div"
          reviews={reviews}
        />
      </section>
      <section className="pt-0 pb-8 lg:py-10">
        <div className="sa-container">
          <ContentBlocks items={contentItems} />
        </div>
      </section>
      <SectionActivityGrid
        title={heroTitles.relatedActivities}
        className="pb-8 lg:pb-10"
        activities={relatedActivities}
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
