import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ImageCard, Text } from "@swiss-activities/ui";

const meta = {
  title: "Components/ImageCard",
  component: ImageCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Text size="default" bold className="text-white">
        Add a scenic cliff walk to your adventure
      </Text>
    ),
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="Grindelwald First Cliff Walk"
      />
    ),
    button: (
      <Button variant="secondary" size="sm">
        Add Ticket
      </Button>
    ),
  },
  render: (args) => (
    <div className="w-[360px] max-w-full">
      <ImageCard {...args} />
    </div>
  ),
};
