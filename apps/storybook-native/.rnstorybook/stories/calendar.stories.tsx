import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Calendar, type CalendarAvailabilityMap } from "@swiss-activities/ui";
import { View } from "react-native";

const availableDates: CalendarAvailabilityMap = {
  "2026-06-10": { capacity: 8 },
  "2026-06-11": { capacity: 3 },
  "2026-06-14": { capacity: "none" },
  "2026-06-17": { capacity: 12 },
  "2026-06-21": true,
  "2026-06-24": true,
  "2026-07-03": true,
  "2026-07-09": true,
};

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  args: {
    availableDates,
    initialMonth: "2026-06-01",
    months: 2,
    selectedDate: "2026-06-17",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <View style={{ height: 560, width: 360 }}>
      <Calendar {...args} />
    </View>
  ),
};

export const WithoutAvailability: Story = {
  args: {
    availableDates: undefined,
    selectedDate: "2026-06-21",
  },
  render: (args) => (
    <View style={{ height: 560, width: 360 }}>
      <Calendar {...args} />
    </View>
  ),
};
