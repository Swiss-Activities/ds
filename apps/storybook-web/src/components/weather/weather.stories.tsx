import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Weather } from "@swiss-activities/ui";
import { getWeatherDaysShort } from "../../story-data";

const days = getWeatherDaysShort();

const meta = {
  title: "Components/Weather",
  component: Weather,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Weather>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
    days,
    selected: "today",
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    return (
      <div className="w-[320px] rounded-lg bg-blue p-4">
        <Weather
          {...args}
          selected={selected}
          onSelect={(id) => {
            if (typeof id === "string") {
              setSelected(id);
            }
          }}
        />
      </div>
    );
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    days,
    selected: "today",
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    return (
      <div className="w-[320px] rounded-lg bg-gray-50 p-4">
        <Weather
          {...args}
          selected={selected}
          onSelect={(id) => {
            if (typeof id === "string") {
              setSelected(id);
            }
          }}
        />
      </div>
    );
  },
};

export const NonInteractive: Story = {
  args: {
    variant: "dark",
    days,
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] rounded-lg bg-blue p-4">
        <Story />
      </div>
    ),
  ],
};
