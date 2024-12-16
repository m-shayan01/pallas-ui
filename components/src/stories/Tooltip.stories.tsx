import type { Meta } from '@storybook/react'
import { Button } from '~/ui/button'
import Tooltip from '~/ui/tooltip/tooltip'

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  title: 'Components/Tooltip',
  tags: ['autodocs'],
}

export default meta

export const Default = () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content sideOffset={5}>Tooltip content</Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
)
