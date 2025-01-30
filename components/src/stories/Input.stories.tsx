import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
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
    <Stack align="flex-start">
      <Input size="sm" placeholder="Pallas UI" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
      <Input size="md" placeholder="Pallas UI" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
      <Input size="lg" placeholder="Pallas UI" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </Stack>

    <Stack align="flex-start">
      <Input size="md" disabled placeholder="Pallas UI" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </Stack>
  </Stack>
)
