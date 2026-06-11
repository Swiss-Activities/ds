import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewPointOfInterestResponse } from "../fixtures/gateway-overview-point-of-interest-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Point of Interest",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "overview-point-of-interest",
      data: gatewayOverviewPointOfInterestResponse,
    },
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The state the web renderer ships statically: grids + weather under one
 * skeleton overlay each while the live data refreshes (hero stays real). */
export const Refreshing: Story = { args: { refreshing: true } };
