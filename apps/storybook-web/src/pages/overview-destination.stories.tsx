import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewDestinationResponse } from "../fixtures/gateway-overview-destination-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Destination",
  parameters: { layout: "fullscreen" },
  args: {
    data: gatewayOverviewDestinationResponse,
    locale: "de_CH",
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
