import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageContent } from "@swiss-activities/data";
import { gatewayTravelGuideOverviewResponse } from "../fixtures/gateway-travel-guide-overview-response";
import { gatewayTravelRoutesOverviewResponse } from "../fixtures/gateway-travel-routes-overview-response";

const meta = {
  title: "Pages/Overview - Travel Guide",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "overview-travel-guide",
      data: gatewayTravelGuideOverviewResponse,
    },
  },
  render: (args) => (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-10 lg:pt-12">
      <WebsiteGatewayPageContent {...args} />
    </main>
  ),
} satisfies Meta<typeof WebsiteGatewayPageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Root: Story = {};

export const TravelRoutes: Story = {
  args: {
    page: {
      type: "overview-travel-guide",
      slug: "reiserouten-schweiz",
      data: gatewayTravelRoutesOverviewResponse,
    },
  },
};
