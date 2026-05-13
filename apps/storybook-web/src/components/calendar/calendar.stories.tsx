import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar, type CalendarAvailabilityMap } from "@swiss-activities/ui";

const availableDates: CalendarAvailabilityMap = {
  "2026-06-10": { capacity: 8 },
  "2026-06-11": { capacity: 3 },
  "2026-06-14": { capacity: "none" },
  "2026-06-17": { capacity: 12 },
  "2026-06-21": true,
  "2026-06-24": true,
  "2026-07-03": true,
  "2026-07-09": true,
};

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  args: {
    availableDates,
    initialMonth: "2026-06-01",
    months: 2,
    selectedDate: "2026-06-17",
  },
  render: (args) => (
    <div className="w-[392px] rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <Calendar {...args} />
    </div>
  ),
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAvailability: Story = {
  args: {
    availableDates: undefined,
    selectedDate: "2026-06-21",
  },
};
