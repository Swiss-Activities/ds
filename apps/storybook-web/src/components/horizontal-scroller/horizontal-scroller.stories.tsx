import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HorizontalScroller,
  horizontalScrollerVariants,
} from "@swiss-activities/ui";

const items = Array.from({ length: 15 }, (_, i) => (
  <li
    key={i}
    className="shrink-0 whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-sm"
  >
    Item {i + 1}
  </li>
));

const meta = {
  title: "Web & Mobile/HorizontalScroller",
  component: HorizontalScroller,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      control: "select",
      options: horizontalScrollerVariants,
    },
  },
  args: {
    variant: "white",
  },
} satisfies Meta<typeof HorizontalScroller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    variant: "white",
    children: items,
  },
};

export const WhiteButton: Story = {
  args: {
    variant: "white-button",
    children: items,
  },
};

export const Black: Story = {
  args: {
    variant: "black",
    children: items,
  },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-gray-900 p-6">
        <Story />
      </div>
    ),
  ],
};

export const WithActiveId: Story = {
  args: {
    variant: "white",
    activeId: "10",
    children: Array.from({ length: 15 }, (_, i) => (
      <li
        key={i}
        data-id={String(i + 1)}
        className="shrink-0 whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-sm"
      >
        Item {i + 1}
      </li>
    )),
  },
};
