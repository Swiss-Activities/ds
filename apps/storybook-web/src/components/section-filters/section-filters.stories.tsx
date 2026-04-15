import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionFilters } from "@swiss-activities/ui";
import { getHomepageFilters } from "../../story-data";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionFilters",
  component: SectionFilters,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    desktopDrawer: "left",
    items: getHomepageFilters(),
  },
} satisfies Meta<typeof SectionFilters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Page>
      <SectionFilters {...args} />
    </Page>
  ),
};

export const MobileOnlyBottomSheet: Story = {
  args: {
    desktopDrawer: undefined,
  },
  render: (args) => (
    <Page>
      <SectionFilters {...args} />
    </Page>
  ),
};
