import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "@swiss-activities/ui";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Interlaken",
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
        alt="Interlaken"
      />
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};
