import type { Meta, StoryObj } from "@storybook/react-vite";
import { heroTitles } from "@swiss-activities/dummy-data";
import { Hero } from "@swiss-activities/ui";
import { getHeroGallery, getHeroImage } from "../../story-data";
import { Container } from "../container";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: heroTitles.hero,
    image: getHeroImage(),
  },
  render: (args) => (
    <Container>
      <Hero {...args} />
    </Container>
  ),
};

export const Gallery: Story = {
  args: {
    title: heroTitles.gallery,
    images: getHeroGallery(),
  },
  render: (args) => (
    <Container>
      <Hero {...args} />
    </Container>
  ),
};
