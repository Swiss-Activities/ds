import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@swiss-activities/ui";
import { Clock3, MapPin, Mountain, Star } from "@swiss-activities/ui/icons";

const sizes = ["xs", "sm", "default", "md", "lg"] as const;
const colors = [
  { label: "Blue", value: "#002f49" },
  { label: "Primary", value: "#ff385c" },
  { label: "Gray", value: "#737373" },
] as const;
const strokeWidths = [1.5, 1.8, 2.2] as const;

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

function StoryCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-solid border-gray-200 bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}

export const Default: Story = {
  args: {
    icon: MapPin,
    color: "#002f49",
  },
};

export const Sizes: Story = {
  args: {
    icon: Mountain,
  },
  render: () => (
    <StoryCard>
      <div className="flex w-[440px] items-end justify-between gap-6">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Icon icon={Mountain} size={size} color="#002f49" />
            <span className="text-xs font-medium text-gray-500">{size}</span>
          </div>
        ))}
      </div>
    </StoryCard>
  ),
};

export const Colors: Story = {
  args: {
    icon: Star,
  },
  render: () => (
    <StoryCard>
      <div className="flex w-[280px] items-center justify-between gap-6">
        {colors.map((color) => (
          <div key={color.label} className="flex flex-col items-center gap-2">
            <Icon icon={Star} size="md" color={color.value} />
            <span className="text-xs font-medium text-gray-500">
              {color.label}
            </span>
          </div>
        ))}
      </div>
    </StoryCard>
  ),
};

export const StrokeWidths: Story = {
  args: {
    icon: Clock3,
  },
  render: () => (
    <StoryCard>
      <div className="flex w-[280px] items-center justify-between gap-6">
        {strokeWidths.map((strokeWidth) => (
          <div
            key={strokeWidth}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              icon={Clock3}
              size="md"
              color="#002f49"
              strokeWidth={strokeWidth}
            />
            <span className="text-xs font-medium text-gray-500">
              {strokeWidth}
            </span>
          </div>
        ))}
      </div>
    </StoryCard>
  ),
};
