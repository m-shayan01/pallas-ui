'use client'

import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip/tooltip'
import { HStack } from '@styled-system/jsx'

export default function TooltipPositionsDemo() {
  return (
    <Tooltip.Provider>
      <HStack gap="4">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Top</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="top">Tooltip on top</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Right</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">Tooltip on right</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Bottom</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom">Tooltip on bottom</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Left</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">Tooltip on left</Tooltip.Content>
        </Tooltip.Root>
      </HStack>
    </Tooltip.Provider>
  )
}
