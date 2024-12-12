import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Input } from '../ui/input'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack align="flex-start">
    <Input size="sm" placeholder="Pallas UI" />
    <Input size="md" placeholder="Pallas UI" />
    <Input size="lg" placeholder="Pallas UI" />
  </Stack>
)
