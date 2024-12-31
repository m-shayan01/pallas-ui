import type { Meta } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import { X } from 'lucide-react'
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

const popovers = [
  {
    triggerText: 'Top',
    position: 'top',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Bottom',
    position: 'bottom',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Left',
    position: 'left',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    triggerText: 'Right',
    position: 'right',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

export const Variants = () => (
  <Stack align="center">
    <Stack gap={4} css={{ maxWidth: 200 }}>
      {popovers.map((item) => (
        <Popover.Root key={item.triggerText}>
          <Popover.Trigger asChild>
            <Button>{item.triggerText}</Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content side={item.position as unknown as 'left'} sideOffset={5}>
              {item.content}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ))}
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>With Close Icon</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content sideOffset={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            <Popover.Close css={{ position: 'absolute', top: 5, right: 5 }}>
              <X width={16} height={16} />
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Stack>
  </Stack>
)
