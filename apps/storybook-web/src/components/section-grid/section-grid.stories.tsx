import type { Meta, StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import { SectionGrid } from "@swiss-activities/ui";
import { getActivityItems } from "../../story-data";
import { Page } from "../page";

const meta = {
  title: "Sections/SectionGrid",
  component: SectionGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionGrid {...args} className="py-6" />
      </div>
    </Page>
  ),
};

export const ThreeItemsOnLarge: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
    itemsPerRowLg: 3,
  },
  render: (args) => (
    <Page>
      <div className="sa-container">
        <SectionGrid {...args} className="py-6" />
      </div>
    </Page>
  ),
};
