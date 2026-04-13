import type { Meta, StoryObj } from "@storybook/react-vite";
import { Hero } from "@swiss-activities/ui";
import { Container } from "../container";

const img1 = (
  <img
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg"
    alt="Jungfraujoch"
  />
);

const img2 = (
  <img
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
    alt="Grindelwald"
  />
);

const img3 = (
  <img
    src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
    alt="Pilatus"
  />
);

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Interlaken",
    image: img1,
  },
  render: (args) => (
    <Container>
      <Hero {...args} />
    </Container>
  ),
};

export const WithBackButton: Story = {
  args: {
    title: "Interlaken",
    image: img1,
    backLabel: "Interlaken",
    backHref: "#",
  },
  render: (args) => (
    <Container>
      <Hero {...args} />
    </Container>
  ),
};

export const Gallery: Story = {
  args: {
    title: "Jungfraujoch",
    images: [img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3],
    backLabel: "Interlaken",
    backHref: "#",
  },
  render: (args) => (
    <Container>
      <Hero {...args} />
    </Container>
  ),
};
