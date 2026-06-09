import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewNonBookableResponse } from "../fixtures/gateway-overview-non-bookable-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Non Bookable",
  parameters: { layout: "fullscreen" },
  args: {
    data: gatewayOverviewNonBookableResponse,
    locale: "de_CH",
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
