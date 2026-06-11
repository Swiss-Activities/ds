import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewDestinationActivityTypeResponse } from "../fixtures/gateway-overview-destination-activity-type-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Destination Activity Type",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "overview-destination-activity-type",
      data: gatewayOverviewDestinationActivityTypeResponse,
      slug: "paragliding",
      locationSlug: "interlaken",
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
