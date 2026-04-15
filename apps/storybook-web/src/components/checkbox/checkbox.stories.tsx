import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@swiss-activities/ui";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Familienfreundlich",
    selected: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
