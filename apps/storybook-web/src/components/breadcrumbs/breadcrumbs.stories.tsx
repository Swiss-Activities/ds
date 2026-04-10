import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "@swiss-activities/ui";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    white: { control: "boolean" },
    ignoreLast: { control: "boolean" },
    gradient: {
      options: [false, "white", "gray"],
      control: "inline-radio",
    },
  },
  args: {
    items: [
      { label: "Switzerland", href: "/en/activities" },
      { label: "Zurich", href: "/en/activities/zurich" },
      { label: "Boat Tours", href: "/en/activities/zurich/boat-tours" },
    ],
    gradient: "white",
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const White: Story = {
  args: {
    white: true,
    gradient: false,
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-gray-800 p-4">
        <Story />
      </div>
    ),
  ],
};

export const IgnoreLast: Story = {
  args: {
    ignoreLast: true,
    gradient: "gray",
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: "Switzerland", href: "/en/activities" },
      { label: "Canton of Zurich", href: "/en/activities/zurich" },
      { label: "City of Zurich", href: "/en/activities/zurich/city" },
      { label: "Outdoor Activities", href: "/en/activities/zurich/outdoor" },
      { label: "Water Sports", href: "/en/activities/zurich/water-sports" },
      { label: "Boat Tours", href: "/en/activities/zurich/boat-tours" },
      {
        label: "Lake Zurich Sunset Cruise",
        href: "/en/activities/zurich/boat-tours/sunset-cruise",
      },
    ],
    gradient: "white",
  },
};
