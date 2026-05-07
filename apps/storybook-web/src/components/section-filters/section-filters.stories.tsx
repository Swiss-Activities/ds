import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionFilters } from "@swiss-activities/ui";
import {
  getHomepageFilters,
  getHomepageSectionFilterGroups,
} from "../../story-data";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionFilters",
  component: SectionFilters,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    desktopDrawer: "left",
    filterGroups: getHomepageSectionFilterGroups(),
    items: getHomepageFilters(),
  },
} satisfies Meta<typeof SectionFilters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionFilters {...args} />
      </div>
    </Page>
  ),
};
