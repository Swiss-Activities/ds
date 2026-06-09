import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@swiss-activities/ui";

function SelectDemo() {
  const [value, setValue] = useState("de_CH");

  return (
    <Select value={value} onValueChange={(nextValue) => setValue(String(nextValue))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {value === "de_CH"
            ? "Deutsch"
            : value === "en_CH"
              ? "English"
              : value === "fr_CH"
                ? "Français"
                : "Italiano"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="de_CH">Deutsch</SelectItem>
        <SelectItem value="en_CH">English</SelectItem>
        <SelectItem value="fr_CH">Français</SelectItem>
        <SelectItem value="it_CH">Italiano</SelectItem>
      </SelectContent>
    </Select>
  );
}

const meta = {
  title: "UI/Select",
  component: SelectDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
