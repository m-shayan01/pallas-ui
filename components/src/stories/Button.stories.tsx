import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Button } from '../ui/button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'solid',
    children: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack>
    <Stack direction="column" align="flex-start">
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
    </Stack>

    <Stack direction="row">
      <Button variant="solid">Solid Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="dashed">Dashed Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="link">Link Button</Button>
    </Stack>
  </Stack>
)
