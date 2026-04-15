import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Icon, Text } from "@swiss-activities/ui";
import { Clock3, MapPin, Mountain, Star } from "@swiss-activities/ui/icons";
import { View } from "react-native-css/components";

const sizes = ["xs", "sm", "default", "md", "lg"] as const;
const colors = [
  { label: "Blue", value: "#002f49" },
  { label: "Primary", value: "#ff385c" },
  { label: "Gray", value: "#737373" },
] as const;
const strokeWidths = [1.5, 1.8, 2.2] as const;

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

function StoryCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#e5e5e5",
        backgroundColor: "#ffffff",
        padding: 24,
        width: 320,
      }}
    >
      {children}
    </View>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text size="xs" gray bold>
      {children}
    </Text>
  );
}

export const Default: Story = {
  args: {
    icon: MapPin,
    color: "#002f49",
  },
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Icon {...args} />
    </View>
  ),
};

export const Sizes: Story = {
  args: {
    icon: Mountain,
  },
  render: () => (
    <View style={{ padding: 16 }}>
      <StoryCard>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {sizes.map((size) => (
            <View
              key={size}
              style={{ alignItems: "center", justifyContent: "flex-end", gap: 8 }}
            >
              <Icon icon={Mountain} size={size} color="#002f49" />
              <Label>{size}</Label>
            </View>
          ))}
        </View>
      </StoryCard>
    </View>
  ),
};

export const Colors: Story = {
  args: {
    icon: Star,
  },
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
          {colors.map((color) => (
            <View key={color.label} style={{ alignItems: "center", gap: 8 }}>
              <Icon icon={Star} size="md" color={color.value} />
              <Label>{color.label}</Label>
            </View>
          ))}
        </View>
      </StoryCard>
    </View>
  ),
};

export const StrokeWidths: Story = {
  args: {
    icon: Clock3,
  },
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
          {strokeWidths.map((strokeWidth) => (
            <View key={strokeWidth} style={{ alignItems: "center", gap: 8 }}>
              <Icon
                icon={Clock3}
                size="md"
                color="#002f49"
                strokeWidth={strokeWidth}
              />
              <Label>{strokeWidth}</Label>
            </View>
          ))}
        </View>
      </StoryCard>
    </View>
  ),
};
