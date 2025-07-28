import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Slider } from '../ui/slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Forms/Slider',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
  },
}

export const Disabled = () => (
  <Stack>
    <Slider max={100} min={0} step={1} disabled />
  </Stack>
)
