import type { Meta, StoryObj } from "@storybook/react-vite";
import { gatewayOverviewNonBookableResponse } from "../fixtures/gateway-overview-non-bookable-response";
import { GatewayPage, type GatewayPageStoryArgs } from "./gateway-page";

const meta = {
  title: "Pages/Overview - Non Bookable",
  parameters: { layout: "fullscreen" },
  args: {
    locale: "de_CH",
    page: {
      type: "overview-non-bookable",
      data: gatewayOverviewNonBookableResponse,
    },
  },
  render: (args) => <GatewayPage {...args} />,
} satisfies Meta<GatewayPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
