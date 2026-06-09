import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayDetailNonBookableResponse } from "../fixtures/gateway-detail-non-bookable-response";
import { GatewayNonBookableDetailPage } from "./detail-page";

const meta = {
  title: "Pages/Detail - Non Bookable",
  parameters: { layout: "fullscreen" },
  args: {
    detail: gatewayDetailNonBookableResponse,
  },
  render: (args) => <GatewayNonBookableDetailPage {...args} />,
} satisfies Meta<typeof GatewayNonBookableDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
