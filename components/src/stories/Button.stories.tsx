import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { ArrowRight } from 'lucide-react'
import Heading from '~/ui/typography/heading'
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
    variant: 'primary',
    children: 'Pallas UI',
  },
}

export const Variants = () => (
  <Stack direction="column" gap={4}>
    <Stack>
      <Heading level={4}>Sizes</Heading>
      <Stack direction="column" align="flex-start">
        <Button size="sm">Small Button</Button>
        <Button size="md">Medium Button</Button>
        <Button size="lg">Large Button</Button>
      </Stack>
    </Stack>

    <Stack>
      <Heading level={4}>Variants</Heading>
      <Stack direction="column" align="flex-start">
        <Button variant="primary">Primary Button</Button>
        <Button variant="default">Default Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="dashed">Dashed Button</Button>
        <Button variant="text">Text Button</Button>
        <Button variant="link">Link Button</Button>
      </Stack>
    </Stack>

    <Stack>
      <Heading level={4}>Icons</Heading>
      <Stack direction="column" align="flex-start">
        <Button icon={<ArrowRight />}>Icon Button</Button>
      </Stack>
    </Stack>

    <Stack>
      <Heading level={4}>Loading</Heading>
      <Stack direction="column" align="flex-start">
        <Button isLoading>Loading Button</Button>
      </Stack>
    </Stack>
  </Stack>
)
