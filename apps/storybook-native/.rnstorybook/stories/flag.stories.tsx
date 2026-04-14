import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { flagCountries } from "@swiss-activities/dummy-data";
import { Flag, Text } from "@swiss-activities/ui";
import { View } from "react-native";

const meta = {
  title: "Components/Flag",
  component: Flag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    countryCode: {
      control: "text",
    },
  },
} satisfies Meta<typeof Flag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    countryCode: "CH",
  },
};

export const Countries: Story = {
  args: {
    countryCode: "CH",
  },
  render: () => (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {flagCountries.map(
        (code) => (
          <View
            key={code}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Flag countryCode={code} />
            <Text gray>{code}</Text>
          </View>
        )
      )}
    </View>
  ),
};
