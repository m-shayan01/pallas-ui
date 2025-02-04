import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { Separator } from '~/ui/separator'

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  tags: ['autodocs'],
  render: (props) => (
    <Stack direction={props.orientation === 'horizontal' ? 'column' : 'row'}>
      <div>Lorem ipsum dolor sit amet</div>
      <Separator {...props} />
      <div>Lorem ipsum dolor sit amet</div>
      <Separator {...props} />
      <div>Lorem ipsum dolor sit amet</div>
    </Stack>
  ),
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
    },
    rounded: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Variants = () => (
  <Stack>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

    <Separator />

    <Stack direction="row">
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" />
      <div>dolor sit amet</div>
      <Separator orientation="vertical" css={{ borderWidth: '2' }} />
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" css={{ borderWidth: '3' }} />
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" css={{ borderWidth: '5' }} />
      <div>Lorem ipsum</div>
    </Stack>

    <Separator color="success.border" />

    <Stack direction="row">
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" rounded />
      <div>dolor sit amet</div>
      <Separator orientation="vertical" css={{ borderWidth: '2' }} rounded />
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" css={{ borderWidth: '4' }} rounded />
      <div>Lorem ipsum</div>
      <Separator orientation="vertical" css={{ borderWidth: '5' }} rounded />
      <div>Lorem ipsum</div>
    </Stack>

    <Separator color="error.border" />

    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

    <Separator color="info.border" />

    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </Stack>
)
