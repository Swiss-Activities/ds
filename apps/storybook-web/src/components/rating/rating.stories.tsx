import type { Meta, StoryObj } from '@storybook/react-vite'

import { Rating } from '@swiss-activities/ui'
import { ratingSizes, type RatingSize } from '@swiss-activities/ui/rating/rating.types'

const meta = {
  title: 'Web & Mobile/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    score: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    count: {
      control: { type: 'number', min: 0 },
    },
    size: {
      options: [...ratingSizes],
      control: 'inline-radio',
    },
    showScore: {
      control: 'boolean',
    },
  },
  args: {
    score: 4.8,
    count: 187,
    showScore: true,
    size: 'default',
  },
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = {
  args: {
    score: 4.5,
    showScore: false,
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    score: 4.8,
    count: 42,
    size: 'sm',
  },
}

export const ExtraSmall: Story = {
  args: {
    score: 4.2,
    count: 12,
    size: 'xs',
  },
}

export const WithLabel: Story = {
  args: {
    score: 4.6,
    label: (
      <span className="text-xs text-gray-700">
        (215 Reviews - 1,240x booked)
      </span>
    ),
  },
}

export const HalfStar: Story = {
  args: {
    score: 3.5,
    count: 64,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {ratingSizes.map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-16 text-sm text-gray-500">{size}</span>
          <Rating
            score={4.5}
            count={120}
            size={size as RatingSize}
            label={
              size === 'default' || size === 'lg' ? (
                <span className="text-xs text-gray-700">(120 Reviews)</span>
              ) : undefined
            }
          />
        </div>
      ))}
    </div>
  ),
}
