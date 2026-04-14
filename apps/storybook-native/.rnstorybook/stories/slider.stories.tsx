import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Slider } from "@swiss-activities/ui";
import { View } from "react-native";
import { getSliderSlides } from "./story-data";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        width: 320,
        height: 220,
        overflow: "hidden",
        borderRadius: 12,
      }}
    >
      {children}
    </View>
  );
}

export const Default: Story = {
  args: {
    slides: getSliderSlides(),
  },
  render: (args) => (
    <Frame>
      <Slider {...args} />
    </Frame>
  ),
};

export const ManySlides: Story = {
  args: {
    slides: [...getSliderSlides(), ...getSliderSlides(), ...getSliderSlides()],
  },
  render: (args) => (
    <Frame>
      <Slider {...args} />
    </Frame>
  ),
};

export const NoNav: Story = {
  args: {
    slides: getSliderSlides(),
    showNav: false,
  },
  render: (args) => (
    <Frame>
      <Slider {...args} />
    </Frame>
  ),
};

export const SingleSlide: Story = {
  args: {
    slides: [getSliderSlides()[0]],
  },
  render: (args) => (
    <Frame>
      <Slider {...args} />
    </Frame>
  ),
};
