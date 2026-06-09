import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageContent } from "@swiss-activities/data";
import { gatewayDetailNonBookableResponse } from "../fixtures/gateway-detail-non-bookable-response";

const meta = {
  title: "Pages/Detail - Non Bookable",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "detail-non-bookable",
      id: "3088ee86-2451-4ae6-a685-6c2c528ec72f",
      detail: gatewayDetailNonBookableResponse,
    },
  },
  render: (args) => (
    <main className="min-h-screen bg-white lg:pt-8">
      <WebsiteGatewayPageContent {...args} />
    </main>
  ),
} satisfies Meta<typeof WebsiteGatewayPageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
