import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayDetailActivityResponse } from "../fixtures/gateway-detail-activity-response";
import { GatewayActivityDetailPage } from "./detail-page";

const meta = {
  title: "Pages/Detail - Activity",
  parameters: { layout: "fullscreen" },
  args: {
    detail: gatewayDetailActivityResponse,
  },
  render: (args) => <GatewayActivityDetailPage {...args} />,
} satisfies Meta<typeof GatewayActivityDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
