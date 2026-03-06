import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-native'
import { Image, View } from 'react-native-css/components'

import { Button, ImageCard } from '@swiss-activities/ui'

const meta = {
  title: 'Web & Mobile/ImageCard',
  component: ImageCard,
} satisfies Meta<typeof ImageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Add a scenic cliff walk to your adventure',
    image: (
      <Image
        source={{
          uri: 'https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg',
        }}
        className="absolute h-full w-full"
        resizeMode="cover"
      />
    ),
    button: <Button>Add Ticket</Button>,
  },
  render: args => (
    <View style={{ padding: 16, width: 360 }}>
      <ImageCard {...args} />
    </View>
  ),
}
