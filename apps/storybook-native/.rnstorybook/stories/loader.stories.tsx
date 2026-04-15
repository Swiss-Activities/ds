import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Loader, Text } from "@swiss-activities/ui";
import { View } from "react-native-css/components";

const sizes = ["md", "sm", "xs", "base"] as const;
const colors = [
  { label: "Black", value: "#000000" },
  { label: "Blue", value: "#002f49" },
  { label: "Primary", value: "#ff385c" },
  { label: "White", value: "#ffffff" },
  { label: "Yellow", value: "#ca8a04" },
] as const;

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

function StoryCard({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: dark ? "#404040" : "#e5e5e5",
        backgroundColor: dark ? "#002f49" : "#ffffff",
        padding: 24,
        width: 320,
      }}
    >
      {children}
    </View>
  );
}

function Label({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Text
      size="xs"
      bold
      style={{
        color: dark ? "#ffffff" : "#737373",
      }}
    >
      {children}
    </Text>
  );
}

export const Default: Story = {
  args: {
    size: "md",
    color: "#000000",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Loader {...args} />
    </View>
  ),
};

export const Sizes: Story = {
  render: () => (
    <View style={{ padding: 16 }}>
      <StoryCard>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {sizes.map((size) => (
            <View key={size} style={{ alignItems: "center", gap: 12 }}>
              <Loader size={size} color="#002f49" />
              <Label>{size}</Label>
            </View>
          ))}
        </View>
      </StoryCard>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ padding: 16, gap: 16 }}>
      <StoryCard>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 16,
          }}
        >
          {colors.slice(0, 4).map((color) => (
            <View
              key={color.label}
              style={{ alignItems: "center", gap: 12, width: 120 }}
            >
              <Loader size="sm" color={color.value} />
              <Label>{color.label}</Label>
            </View>
          ))}
        </View>
      </StoryCard>
      <StoryCard dark>
        <View style={{ alignItems: "center", gap: 12 }}>
          <Loader size="sm" color="#ffffff" />
          <Label dark>White</Label>
        </View>
      </StoryCard>
    </View>
  ),
};
