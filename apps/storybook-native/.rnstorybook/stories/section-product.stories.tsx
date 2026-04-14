import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  heroTitles,
  productBreadcrumbs,
  productInfoBadges,
  productInfoCards,
} from "@swiss-activities/dummy-data";
import {
  Card,
  ContentBlocks,
  InfoBadge,
  Rating,
  SectionActivityGrid,
  SectionProduct,
  SectionReviewGrid,
  Text,
} from "@swiss-activities/ui";
import { View } from "react-native";
import {
  StoryScrollScreen,
  getContentBlocks,
  getHeroGallery,
  getRelatedActivityItems,
  getSectionProductReviews,
} from "./story-data";

function EmojiIcon({ children }: { children: React.ReactNode }) {
  return <Text>{children}</Text>;
}

const meta = {
  title: "Sections/SectionProduct",
  component: SectionProduct,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SectionProduct>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.product,
    images: getHeroGallery(),
    backLabel: heroTitles.hero,
    onBack: () => {},
    breadcrumbs: [...productBreadcrumbs],
    children: (
      <View style={{ marginTop: 16, gap: 16 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Rating score={4.7} stacked />
          <InfoBadge
            icon={<EmojiIcon>🏆</EmojiIcon>}
            title={productInfoBadges[0].title}
            subtitle={productInfoBadges[0].subtitle}
          />
          <InfoBadge
            icon={<EmojiIcon>🔥</EmojiIcon>}
            title={productInfoBadges[1].title}
            subtitle={productInfoBadges[1].subtitle}
          />
        </View>
        <Text>
          Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das
          Jungfraujoch. Auch bekannt als Top of Europe liegt das Jungfraujoch
          mit Europas hochstem Bahnhof auf 3454 m u. M.
        </Text>
      </View>
    ),
  },
  render: (args) => (
    <StoryScrollScreen>
      <SectionProduct {...args} />
      <View style={{ gap: 16 }}>
        <View style={{ gap: 12 }}>
          {productInfoCards.map((item) => (
            <Card key={item.title}>
              <InfoBadge
                icon={
                  <EmojiIcon>
                    {item.icon === "clock"
                      ? "🕒"
                      : item.icon === "cloud"
                        ? "☁️"
                        : item.icon === "map-pin"
                          ? "📍"
                          : "⭐"}
                  </EmojiIcon>
                }
                title={item.title}
                subtitle={item.subtitle}
              />
            </Card>
          ))}
        </View>
        <SectionReviewGrid
          title="Bewertungen"
          reviews={getSectionProductReviews()}
        />
        <ContentBlocks items={getContentBlocks()} />
        <SectionActivityGrid
          title={heroTitles.relatedActivities}
          activities={getRelatedActivityItems()}
        />
      </View>
    </StoryScrollScreen>
  ),
};
