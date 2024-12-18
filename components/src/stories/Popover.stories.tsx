import type { Meta } from '@storybook/react'
import { Button } from '~/ui/button'
import Popover from '~/ui/popover'

const meta: Meta<typeof Popover.Root> = {
  component: Popover.Root,
  title: 'Components/Popover',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button>Open Popover</Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content sideOffset={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam, quos.
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)
