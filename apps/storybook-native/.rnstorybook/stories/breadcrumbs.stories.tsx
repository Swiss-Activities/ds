import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Breadcrumbs } from "@swiss-activities/ui";
import { View } from "react-native-css/components";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    white: { control: "boolean" },
    ignoreLast: { control: "boolean" },
    gradient: {
      options: [false, "white", "gray"],
      control: "inline-radio",
    },
  },
  args: {
    items: [
      { label: "Switzerland", href: "/en/activities" },
      { label: "Zurich", href: "/en/activities/zurich" },
      { label: "Boat Tours", href: "/en/activities/zurich/boat-tours" },
    ],
    gradient: "white",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Breadcrumbs {...args} />
    </View>
  ),
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const White: Story = {
  args: {
    white: true,
    gradient: false,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, borderRadius: 16, backgroundColor: "#262626" }}>
        <Story />
      </View>
    ),
  ],
};

export const IgnoreLast: Story = {
  args: {
    ignoreLast: true,
    gradient: "gray",
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: "Switzerland", href: "/en/activities" },
      { label: "Canton of Zurich", href: "/en/activities/zurich" },
      { label: "City of Zurich", href: "/en/activities/zurich/city" },
      { label: "Outdoor Activities", href: "/en/activities/zurich/outdoor" },
      { label: "Water Sports", href: "/en/activities/zurich/water-sports" },
      { label: "Boat Tours", href: "/en/activities/zurich/boat-tours" },
      {
        label: "Lake Zurich Sunset Cruise",
        href: "/en/activities/zurich/boat-tours/sunset-cruise",
      },
    ],
    gradient: "white",
  },
};
