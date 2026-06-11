import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewActivityTypeResponse } from "../fixtures/gateway-overview-activity-type-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Activity Type",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "overview-activity-type",
      data: gatewayOverviewActivityTypeResponse,
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
