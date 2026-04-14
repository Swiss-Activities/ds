import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import {
  HorizontalScroller,
  horizontalScrollerVariants,
  useHorizontalScroller,
} from "@swiss-activities/ui";
import { Pressable, Text, View } from "react-native-css/components";

const items = Array.from({ length: 15 }, (_, i) => (
  <View key={i} className="shrink-0 rounded-full bg-gray-100 px-4 py-2">
    <Text className="text-sm">Item {i + 1}</Text>
  </View>
));

const meta = {
  title: "Components/HorizontalScroller",
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
      <View style={{ borderRadius: 16, backgroundColor: "#171717", padding: 24 }}>
        <Story />
      </View>
    ),
  ],
};

export const WithActiveId: Story = {
  args: {
    variant: "white",
    activeId: "10",
    children: Array.from({ length: 15 }, (_, i) => (
      <View
        key={i}
        nativeID={String(i + 1)}
        className="shrink-0 rounded-full bg-gray-100 px-4 py-2"
      >
        <Text className="text-sm">Item {i + 1}</Text>
      </View>
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
      <View className="mb-4 flex-row items-center justify-between">
        <HorizontalScroller.Title>Custom Layout</HorizontalScroller.Title>
        <View className="flex-row gap-2">
          <HorizontalScroller.Prev variant="white" />
          <HorizontalScroller.Next variant="white" />
        </View>
      </View>
      <HorizontalScroller.Track>{items}</HorizontalScroller.Track>
    </HorizontalScroller.Root>
  ),
};

function CustomControls() {
  const { canScrollLeft, canScrollRight, scrollPrev, scrollNext } =
    useHorizontalScroller();

  return (
    <View className="mt-3 flex-row gap-2">
      <Pressable
        disabled={!canScrollLeft}
        onPress={scrollPrev}
        className="rounded bg-gray-200 px-3 py-1"
        style={{ opacity: canScrollLeft ? 1 : 0.3 }}
      >
        <Text className="text-sm">Prev</Text>
      </Pressable>
      <Pressable
        disabled={!canScrollRight}
        onPress={scrollNext}
        className="rounded bg-gray-200 px-3 py-1"
        style={{ opacity: canScrollRight ? 1 : 0.3 }}
      >
        <Text className="text-sm">Next</Text>
      </Pressable>
    </View>
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
    <View className="bg-gray-50 px-4">
      <HorizontalScroller.Root>
        <HorizontalScroller.Title>Edge to Edge</HorizontalScroller.Title>
        <HorizontalScroller.Track bleed className="mt-2">
          {items}
        </HorizontalScroller.Track>
      </HorizontalScroller.Root>
    </View>
  ),
};
