import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  heroTitles,
  productBreadcrumbs,
} from "@swiss-activities/dummy-data";
import {
  Button,
  Card,
  ContentBlocks,
  InfoBadge,
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
    images: getHeroGallery(),
    backLabel: heroTitles.hero,
    backHref: "#",
    breadcrumbs: [...productBreadcrumbs],
    children: (
      <>
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
      </>
    ),
  },
  render: (args) => (
    <Page className="bg-white">
      <SectionProduct {...args} className="pb-6 lg:pb-8" />
      <section className="bg-bg py-8 lg:py-10">
        <div className="sa-container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {infoCards.map((item) => (
              <Card
                key={item.title}
                noPadding
                render={({ className, children }) => (
                  <Button
                    variant="ghost"
                    className={`${className} !justify-start !text-left !p-3`}
                  >
                    {children}
                  </Button>
                )}
              >
                <InfoBadge
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </Card>
            ))}
          </div>
        </div>
        <SectionReviewGrid
          title="Bewertungen"
          as="div"
          className="pt-6"
          reviews={getSectionProductReviews()}
        />
      </section>
      <section className="py-8 lg:py-10">
        <div className="sa-container">
          <ContentBlocks items={getContentBlocks()} />
        </div>
      </section>
      <SectionActivityGrid
        title={heroTitles.relatedActivities}
        className="pb-8 lg:pb-10"
        activities={getRelatedActivityItems()}
      />
    </Page>
  ),
};
