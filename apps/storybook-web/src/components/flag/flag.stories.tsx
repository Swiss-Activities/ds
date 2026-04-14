import type { Meta, StoryObj } from "@storybook/react-vite";
import { flagCountries } from "@swiss-activities/dummy-data";
import { Flag } from "@swiss-activities/ui";

const meta = {
  title: "Components/Flag",
  component: Flag,
  parameters: { layout: "centered" },
  argTypes: {
    countryCode: { control: "text" },
  },
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { countryCode: "CH" },
};

export const Countries: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {flagCountries.map((code) => (
        <div key={code} className="flex items-center gap-2">
          <Flag countryCode={code} />
          <span className="text-sm text-gray-600">{code}</span>
        </div>
      ))}
    </div>
  ),
};
