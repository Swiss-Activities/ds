import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HorizontalScroller,
  horizontalScrollerVariants,
  useHorizontalScroller,
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

export const WithTitle: Story = {
  args: {
    variant: "white",
    title: "Popular Activities",
    children: items,
  },
};

export const Compound: StoryObj = {
  render: () => (
    <HorizontalScroller.Root>
      <div className="mb-4 flex items-center justify-between">
        <HorizontalScroller.Title>Custom Layout</HorizontalScroller.Title>
        <div className="flex gap-2">
          <HorizontalScroller.Prev variant="white" />
          <HorizontalScroller.Next variant="white" />
        </div>
      </div>
      <HorizontalScroller.Track>{items}</HorizontalScroller.Track>
    </HorizontalScroller.Root>
  ),
};

function CustomControls() {
  const { canScrollLeft, canScrollRight, scrollPrev, scrollNext } =
    useHorizontalScroller();
  return (
    <div className="mt-3 flex gap-2">
      <button
        disabled={!canScrollLeft}
        onClick={scrollPrev}
        className="rounded bg-gray-200 px-3 py-1 text-sm disabled:opacity-30"
      >
        Prev
      </button>
      <button
        disabled={!canScrollRight}
        onClick={scrollNext}
        className="rounded bg-gray-200 px-3 py-1 text-sm disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}

export const CompoundWithHook: StoryObj = {
  render: () => (
    <HorizontalScroller.Root>
      <HorizontalScroller.Title>With Custom Controls</HorizontalScroller.Title>
      <HorizontalScroller.Track className="mt-2">{items}</HorizontalScroller.Track>
      <CustomControls />
    </HorizontalScroller.Root>
  ),
};

export const MobileBleed: StoryObj = {
  render: () => (
    <div className="bg-gray-50 px-4">
      <HorizontalScroller.Root>
        <HorizontalScroller.Title>Edge to Edge</HorizontalScroller.Title>
        <HorizontalScroller.Track bleed className="mt-2">
          {items}
        </HorizontalScroller.Track>
      </HorizontalScroller.Root>
    </div>
  ),
};

