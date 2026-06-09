import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@swiss-activities/ui";

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button type="secondary" text="Open popover" />} />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Filter details</PopoverTitle>
          <PopoverDescription>
            Use popovers for compact contextual controls.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

const meta = {
  title: "UI/Popover",
  component: PopoverDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PopoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
