import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { Button, buttonSizes, buttonVariants } from "@swiss-activities/ui";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: buttonVariants,
      control: "select",
    },
    size: {
      options: buttonSizes,
      control: "inline-radio",
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    text: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  args: {
    text: "Book Activity",
    type: "primary",
    size: "md",
    disabled: false,
  },
  render: (args) => <Button {...args} />,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const storyFor = (
  type: (typeof buttonVariants)[number],
  text: string = "Book Activity",
  size: (typeof buttonSizes)[number] = "md"
): Story => ({
  args: {
    type,
    size,
    text,
  },
});

export const Primary: Story = storyFor("primary");
export const Secondary: Story = storyFor("secondary");
export const Outline: Story = storyFor("outline", "See Details");
export const OutlineGray: Story = storyFor("outline-gray", "See Details");
export const Tertiary: Story = storyFor("tertiary", "See Details");
export const Transparent: Story = storyFor("transparent", "Continue");
export const Blue: Story = storyFor("blue");
export const BlueOutline: Story = storyFor("blue-outline", "See Details");
export const Gray: Story = storyFor("gray");
export const Danger: Story = storyFor("danger", "Delete");
export const Instruction: Story = storyFor("instruction", "Info");
export const Link: Story = storyFor("link", "Read More");
export const LinkGray: Story = storyFor("linkGray", "Read More");
export const White: Story = storyFor("white", "Continue");

export const Pill: Story = storyFor("pill", "Book");
export const PillPrimary: Story = storyFor("pill-primary", "Book");

export const Disabled: Story = {
  args: {
    type: "primary",
    size: "md",
    text: "Book Activity",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    type: "primary",
    size: "md",
    text: "Book Activity",
    loading: true,
  },
};

export const SizeSmall: Story = storyFor("primary", "Book Activity", "sm");
export const SizeXSmall: Story = storyFor("primary", "Book Activity", "xs");
