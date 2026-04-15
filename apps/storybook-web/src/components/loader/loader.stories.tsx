import type { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "@swiss-activities/ui";

const sizes = ["md", "sm", "xs", "base"] as const;
const colors = [
  { label: "Black", value: "text-black" },
  { label: "Blue", value: "text-blue" },
  { label: "Primary", value: "text-primary" },
  { label: "White", value: "text-white" },
  { label: "Yellow", value: "text-yellow-600" },
  { label: "Hex", value: "#ff385c" },
] as const;

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

function StoryCard({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-xl border border-solid p-6 shadow-sm",
        dark ? "border-gray-700 bg-[#002f49]" : "border-gray-200 bg-white",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export const Default: Story = {
  args: {
    size: "md",
    color: "text-black",
  },
};

export const Sizes: Story = {
  render: () => (
    <StoryCard>
      <div className="flex w-[360px] items-center justify-between gap-6">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center gap-3">
            <Loader size={size} color="text-blue" />
            <span className="text-xs font-medium text-gray-500">{size}</span>
          </div>
        ))}
      </div>
    </StoryCard>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <StoryCard>
        <div className="flex w-[460px] items-center justify-between gap-6">
          {colors.slice(0, 5).map((color) => (
            <div key={color.label} className="flex flex-col items-center gap-3">
              <Loader size="sm" color={color.value} />
              <span className="text-xs font-medium text-gray-500">
                {color.label}
              </span>
            </div>
          ))}
        </div>
      </StoryCard>
      <StoryCard dark>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader size="sm" color="text-white" />
            <span className="text-xs font-medium text-white">White</span>
          </div>
        </div>
      </StoryCard>
    </div>
  ),
};
