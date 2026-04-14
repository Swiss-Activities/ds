import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@swiss-activities/ui";
import { getSliderSlides } from "../../story-data";

const slides = getSliderSlides();

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides,
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};

export const ManySlides: Story = {
  args: {
    slides: [...slides, ...slides, ...slides, ...slides],
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};

export const NoNav: Story = {
  args: {
    slides,
    showNav: false,
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};

export const SingleSlide: Story = {
  args: {
    slides: [slides[0]],
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};
