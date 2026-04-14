import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionScroller, sectionScrollerItemClassName, Card, Text } from "@swiss-activities/ui";

const meta = {
  title: "Sections/SectionScroller",
  component: SectionScroller,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SectionScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Section Title",
    children: Array.from({ length: 8 }, (_, i) => (
      <li key={i} className={sectionScrollerItemClassName}>
        <Card className="flex h-[200px] items-center justify-center">
          <Text gray>Item {i + 1}</Text>
        </Card>
      </li>
    )),
  },
  render: (args) => (
    <SectionScroller {...args} className="py-6" />
  ),
};

export const WithSubtitle: Story = {
  args: {
    title: "With Subtitle",
    subtitle: <Text as="span" size="xs" gray>12 items</Text>,
    children: Array.from({ length: 12 }, (_, i) => (
      <li key={i} className={sectionScrollerItemClassName}>
        <Card className="flex h-[160px] items-center justify-center">
          <Text gray>Item {i + 1}</Text>
        </Card>
      </li>
    )),
  },
  render: (args) => (
    <SectionScroller {...args} className="py-6" />
  ),
};
