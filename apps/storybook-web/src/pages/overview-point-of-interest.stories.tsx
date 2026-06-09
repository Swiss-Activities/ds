import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewPointOfInterestResponse } from "../fixtures/gateway-overview-point-of-interest-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Point of Interest",
  parameters: { layout: "fullscreen" },
  args: {
    data: gatewayOverviewPointOfInterestResponse,
    locale: "de_CH",
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
