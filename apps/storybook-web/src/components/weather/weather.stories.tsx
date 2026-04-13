import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Weather } from "@swiss-activities/ui";

function Sun() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
      <circle cx="12" cy="12" r="5" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function Cloud() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
    </svg>
  );
}

function CloudRain() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="8" y1="22" x2="8" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="12" y1="22" x2="12" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="16" y1="22" x2="16" y2="24" />
    </svg>
  );
}

function CloudStorm() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <path fill="#fbbf24" d="M11 14h3l-2 4h2l-3 5v-5h-2z" />
    </svg>
  );
}

const days = [
  { id: "today", label: "Heute", icon: <Sun />, low: 6, high: 22 },
  { id: "mi", label: "Mi", icon: <Cloud />, low: 6, high: 22 },
  { id: "do", label: "Do", icon: <CloudRain />, low: 6, high: 22 },
  { id: "fr", label: "Fr", icon: <CloudStorm />, low: 6, high: 22 },
  { id: "sa", label: "Sa", icon: <Sun />, low: 8, high: 24 },
  { id: "so", label: "So", icon: <Cloud />, low: 7, high: 21 },
  { id: "mo", label: "Mo", icon: <CloudRain />, low: 5, high: 19 },
  { id: "di", label: "Di", icon: <Sun />, low: 7, high: 23 },
];

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
        <Weather {...args} selected={selected} onSelect={setSelected} />
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
        <Weather {...args} selected={selected} onSelect={setSelected} />
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
