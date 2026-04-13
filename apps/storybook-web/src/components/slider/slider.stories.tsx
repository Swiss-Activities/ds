import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@swiss-activities/ui";

const images = [
  <img
    key="1"
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
    alt="Jungfraujoch"
    className="h-full w-full object-cover"
  />,
  <img
    key="2"
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
    alt="Grindelwald"
    className="h-full w-full object-cover"
  />,
  <img
    key="3"
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
    alt="Pilatus"
    className="h-full w-full object-cover"
  />,
];

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: images,
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};

export const ManySlides: Story = {
  args: {
    slides: [...images, ...images, ...images, ...images],
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};

export const NoNav: Story = {
  args: {
    slides: images,
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
    slides: [images[0]],
  },
  render: (args) => (
    <div className="h-[300px] w-[500px] overflow-hidden rounded-lg">
      <Slider {...args} />
    </div>
  ),
};
