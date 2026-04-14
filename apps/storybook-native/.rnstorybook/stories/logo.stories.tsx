import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Logo, logoSizes } from "@swiss-activities/ui";

const meta = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    size: {
      options: logoSizes,
      control: "inline-radio",
    },
    className: {
      control: "text",
    },
  },
  args: {
    size: "default",
  },
  render: (args) => <Logo {...args} />,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};
