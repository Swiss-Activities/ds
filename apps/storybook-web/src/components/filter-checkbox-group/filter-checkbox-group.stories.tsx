import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterCheckboxGroup } from "@swiss-activities/ui";
import { getHomepageFilterGroups } from "../../story-data";

const [categoryGroup] = getHomepageFilterGroups();

const meta = {
  title: "Components/FilterCheckboxGroup",
  component: FilterCheckboxGroup,
  parameters: {
    layout: "padded",
  },
  args: {
    title: categoryGroup.title,
    items: categoryGroup.items,
  },
} satisfies Meta<typeof FilterCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  args: {
    type: "inline",
  },
  render: (args) => (
    <div className="w-full max-w-[360px]">
      <FilterCheckboxGroup {...args} />
    </div>
  ),
};

export const Accordion: Story = {
  args: {
    type: "accordion",
  },
  render: (args) => (
    <div className="w-full max-w-[360px]">
      <FilterCheckboxGroup {...args} />
    </div>
  ),
};
