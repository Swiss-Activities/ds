import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { heroTitles } from "@swiss-activities/dummy-data";
import { Hero } from "@swiss-activities/ui";
import { View } from "react-native";
import { getHeroGallery, getHeroImage } from "./story-data";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.hero,
    image: getHeroImage(),
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Hero {...args} />
    </View>
  ),
};

export const WithBackButton: Story = {
  args: {
    title: heroTitles.hero,
    image: getHeroImage(),
    backLabel: heroTitles.hero,
    onBack: () => {},
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Hero {...args} />
    </View>
  ),
};

export const Gallery: Story = {
  args: {
    title: heroTitles.gallery,
    images: getHeroGallery(),
    backLabel: heroTitles.hero,
    onBack: () => {},
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Hero {...args} />
    </View>
  ),
};
