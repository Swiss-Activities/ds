import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Icon,
  List,
  MapPin,
  SegmentedControl,
  type SegmentedControlProps,
} from "@swiss-activities/ui";

type ViewMode = "list" | "map";

const viewOptions = [
  {
    value: "list",
    label: "Liste",
    icon: <Icon icon={List} size="sm" />,
  },
  {
    value: "map",
    label: "Karte",
    icon: <Icon icon={MapPin} size="sm" />,
  },
] satisfies SegmentedControlProps<ViewMode>["options"];

type StatefulSegmentedControlProps = Omit<
  SegmentedControlProps<ViewMode>,
  "onChange" | "value"
> & {
  initialValue?: ViewMode;
};

function StatefulSegmentedControl({
  initialValue = "list",
  ...props
}: StatefulSegmentedControlProps) {
  const [value, setValue] = useState<ViewMode>(initialValue);

  return <SegmentedControl {...props} onChange={setValue} value={value} />;
}

const meta = {
  title: "Components/SegmentedControl",
  component: StatefulSegmentedControl,
  parameters: {
    layout: "centered",
  },
  args: {
    options: viewOptions,
  },
} satisfies Meta<typeof StatefulSegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListMapSwitch: Story = {
  args: {
    initialValue: "list",
  },
};

export const Small: Story = {
  args: {
    initialValue: "map",
    size: "sm",
  },
};

export const Rounded: Story = {
  args: {
    initialValue: "list",
    variant: "rounded",
  },
};
