import type { Meta, StoryObj } from "@storybook/react-vite";
import { WebsiteGatewayPageContent } from "@swiss-activities/data";
import { gatewayDetailBlogPostResponse } from "../fixtures/gateway-detail-blog-post-response";

const meta = {
  title: "Pages/Detail - Blog Post",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "detail-blog-post",
      id: gatewayDetailBlogPostResponse.id,
      detail: gatewayDetailBlogPostResponse,
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
