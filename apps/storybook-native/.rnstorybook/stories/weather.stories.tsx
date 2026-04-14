import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Weather } from "@swiss-activities/ui";
import { View } from "react-native";
import { getWeatherDaysShort } from "./story-data";

const meta = {
  title: "Components/Weather",
  component: Weather,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Weather>;

export default meta;

type Story = StoryObj<typeof meta>;

const days = getWeatherDaysShort();

function DarkWeather(args: React.ComponentProps<typeof Weather>) {
  const [selected, setSelected] = useState(args.selected);

  return (
    <View
      style={{
        width: 320,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#1447e6",
      }}
    >
      <Weather {...args} selected={selected} onSelect={setSelected} />
    </View>
  );
}

function LightWeather(args: React.ComponentProps<typeof Weather>) {
  const [selected, setSelected] = useState(args.selected);

  return (
    <View
      style={{
        width: 320,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Weather {...args} selected={selected} onSelect={setSelected} />
    </View>
  );
}

export const Dark: Story = {
  args: {
    variant: "dark",
    days,
    selected: "today",
  },
  render: (args) => <DarkWeather {...args} />,
};

export const Light: Story = {
  args: {
    variant: "light",
    days,
    selected: "today",
  },
  render: (args) => <LightWeather {...args} />,
};

export const NonInteractive: Story = {
  args: {
    variant: "dark",
    days,
  },
  render: (args) => (
    <View
      style={{
        width: 320,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#1447e6",
      }}
    >
      <Weather {...args} />
    </View>
  ),
};
