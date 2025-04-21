import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import Drawer from '../ui/drawer'

const meta: Meta<typeof Drawer.Root> = {
  title: 'Components/Drawer',
  component: Drawer.Root,
  tags: ['autodocs'],
  render: (args) => (
    <Drawer.Root {...args}>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Title>Drawer Title</Drawer.Title>
        <Drawer.Description>This is a description for the drawer content.</Drawer.Description>
        <p>Here is some content inside the drawer.</p>
        <Drawer.Close>
          <X />
        </Drawer.Close>
      </Drawer.Content>
    </Drawer.Root>
  ),
  argTypes: {
    side: { control: 'inline-radio', options: ['left', 'right'] },
  },
}

export default meta

type Story = StoryObj<typeof Drawer.Root>

export const Default: Story = {
  args: {
    side: 'left',
  },
}
