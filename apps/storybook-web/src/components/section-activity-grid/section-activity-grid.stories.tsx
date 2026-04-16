import type { Meta, StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import { Button, SectionActivityGrid } from "@swiss-activities/ui";
import { getActivityItems } from "../../story-data";

const meta = {
  title: "Sections/SectionActivityGrid",
  component: SectionActivityGrid,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionActivityGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
  },
  render: (args) => (
    <div className="sa-container">
      <SectionActivityGrid {...args} className="py-6" />
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    title: heroTitles.sectionActivityGrid,
    activities: getActivityItems(),
    action: (
      <Button
        type="secondary"
        size="sm"
        text="Mehr sehen"
      />
    ),
  },
  render: (args) => (
    <div className="sa-container">
      <SectionActivityGrid {...args} className="py-6" />
    </div>
  ),
};
