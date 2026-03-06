import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, ImageCard } from '@swiss-activities/ui'

const meta = {
  title: 'Web & Mobile/ImageCard',
  component: ImageCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Add a scenic cliff walk to your adventure',
    image: (
      <img
        src="https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg"
        alt="Grindelwald First Cliff Walk"
      />
    ),
    button: <Button variant="secondary" size="sm">Add Ticket</Button>,
  },
  render: args => (
    <div className="w-[360px] max-w-full">
      <ImageCard {...args} />
    </div>
  ),
}
