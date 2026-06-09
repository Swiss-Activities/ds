import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageContent } from "@swiss-activities/data";
import { gatewayDetailActivityResponse } from "../fixtures/gateway-detail-activity-response";

const meta = {
  title: "Pages/Detail - Activity",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "detail-activity",
      id: "65142",
      detail: gatewayDetailActivityResponse,
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
