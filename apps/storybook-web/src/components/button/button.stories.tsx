import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, buttonSizes, buttonVariants } from '@swiss-activities/ui'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: buttonVariants,
      control: 'select',
    },
    size: {
      options: buttonSizes,
      control: 'inline-radio',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Book Activity',
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const storyFor = (
  variant: (typeof buttonVariants)[number],
  children: string = 'Book Activity',
  size: (typeof buttonSizes)[number] = 'default',
): Story => ({
  args: {
    variant,
    size,
    children,
  },
})

export const Primary: Story = storyFor('primary')
export const Secondary: Story = storyFor('secondary')
export const Outline: Story = storyFor('outline', 'See Details')
export const OutlineGray: Story = storyFor('outline-gray', 'See Details')
export const Tertiary: Story = storyFor('tertiary', 'See Details')
export const Transparent: Story = storyFor('transparent', 'Continue')
export const Blue: Story = storyFor('blue')
export const BlueOutline: Story = storyFor('blue-outline', 'See Details')
export const Gray: Story = storyFor('gray')
export const Instruction: Story = storyFor('instruction', 'Info')
export const Link: Story = storyFor('link', 'Read More')
export const LinkGray: Story = storyFor('linkGray', 'Read More')

export const SizePill: Story = storyFor('primary', 'Book', 'pill')
export const SizeSmall: Story = storyFor('primary', 'Book Activity', 'sm')
export const SizeXSmall: Story = storyFor('primary', 'Book Activity', 'xs')

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'default',
    children: 'Book Activity',
    disabled: true,
  },
}
