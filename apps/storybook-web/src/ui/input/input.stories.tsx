import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@swiss-activities/ui";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Jetzt suchen",
  },
  decorators: [
    (Story) => (
      <div className="w-[min(360px,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Bewertungen suchen",
  },
};
