import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { grayColors, saColors } from "@swiss-activities/ui/tokens";
import { ScrollView, View } from "react-native";
import { Text } from "@swiss-activities/ui";

const swissActivitiesColors = [
  { label: "Primary", hex: saColors.primary, cssVar: "--color-primary" },
  { label: "Dark", hex: saColors.dark, cssVar: "--color-dark" },
  { label: "Medium", hex: saColors.medium, cssVar: "--color-medium" },
  { label: "Light", hex: saColors.light, cssVar: "--color-light" },
  { label: "Background", hex: saColors.bg, cssVar: "--color-bg" },
  { label: "Border", hex: saColors.border, cssVar: "--color-border" },
  { label: "Blue", hex: saColors.blue, cssVar: "--color-blue" },
];

const neutralGrayColors = Object.entries(grayColors).map(([scale, hex]) => ({
  label: `Gray ${scale}`,
  hex,
  cssVar: `--color-gray-${scale}`,
}));

function ColorGrid({
  title,
  tokens,
}: {
  title: string;
  tokens: { label: string; hex: string; cssVar: string }[];
}) {
  return (
    <View style={{ gap: 16 }}>
      <Text size="xl" bold>
        {title}
      </Text>
      <View style={{ gap: 12 }}>
        {tokens.map((token) => (
          <View
            key={token.cssVar}
            style={{
              borderWidth: 1,
              borderColor: "#e5e5e5",
              borderRadius: 16,
              backgroundColor: "#ffffff",
              padding: 16,
              gap: 12,
            }}
          >
            <View
              style={{
                height: 64,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "#e5e5e5",
                backgroundColor: token.hex,
              }}
            />
            <View style={{ gap: 4 }}>
              <Text bold>{token.label}</Text>
              <Text size="xs" gray>
                {token.hex.toUpperCase()}
              </Text>
              <Text size="xs" gray>
                {token.cssVar}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
  render: () => (
    <ScrollView
      contentContainerStyle={{
        padding: 24,
        gap: 32,
        backgroundColor: "#fafafa",
      }}
    >
      <View style={{ gap: 8 }}>
        <Text size="2xl" bold>
          Swiss Activities Color Tokens
        </Text>
        <Text gray>
          Reference for brand and neutral colors across the design system.
        </Text>
      </View>
      <ColorGrid
        title="Swiss Activities Palette"
        tokens={swissActivitiesColors}
      />
      <ColorGrid title="Neutral Gray Palette" tokens={neutralGrayColors} />
    </ScrollView>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
