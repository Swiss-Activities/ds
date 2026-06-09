import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewActivityTypeResponse } from "../fixtures/gateway-overview-activity-type-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Activity Type",
  parameters: { layout: "fullscreen" },
  args: {
    data: gatewayOverviewActivityTypeResponse,
    locale: "de_CH",
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
