import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Linking } from "react-native";
import { Text, View } from "react-native-css/components";

const meta = {
  title: "Welcome/Start",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fafafa",
        padding: 24,
      }}
    >
      <View
        style={{
          borderRadius: 24,
          borderWidth: 1,
          borderColor: "#e5e5e5",
          backgroundColor: "#ffffff",
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            lineHeight: 38,
            fontWeight: "700",
            color: "#0a0a0a",
          }}
        >
          Welcome to the Swiss Activities Design System
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 16,
            lineHeight: 24,
            color: "#525252",
          }}
        >
          Use the sidebar to open Button, Card, and Flow stories. This screen is
          the start page for native Storybook.
        </Text>
        <Text
          onPress={() =>
            Linking.openURL(
              "https://swissactivities.atlassian.net/wiki/spaces/P/pages/505675778/Design+System"
            )
          }
          style={{
            marginTop: 18,
            fontSize: 14,
            fontWeight: "600",
            color: "#404040",
            textDecorationLine: "underline",
          }}
        >
          Open internal documentation
        </Text>
      </View>
    </View>
  ),
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
