'use client'

import { Button } from '@/components/ui/button'
import Tooltip from '@/components/ui/tooltip/tooltip'
import { VStack } from '@styled-system/jsx'

export default function TooltipAlignmentsDemo() {
  return (
    <Tooltip.Provider>
      <VStack gap="4">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Start Alignment</Button>
          </Tooltip.Trigger>
          <Tooltip.Content align="start">Aligned to the start</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">Center Alignment</Button>
          </Tooltip.Trigger>
          <Tooltip.Content align="center">Aligned to the center</Tooltip.Content>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outlined">End Alignment</Button>
          </Tooltip.Trigger>
          <Tooltip.Content align="end">Aligned to the end</Tooltip.Content>
        </Tooltip.Root>
      </VStack>
    </Tooltip.Provider>
  )
}
