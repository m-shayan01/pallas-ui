'use client'

import { Button } from '@/components/ui/button'
import Sheet from '@/components/ui/sheet'
import { Paragraph } from '@/components/ui/typography'
import { Box } from '@styled-system/jsx'
import { useState } from 'react'

export default function SheetSnapPointsDemo() {
  const snapPoints = ['200px', '400px', 0.7, 1]
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0] as string | number)

  return (
    <>
      <Sheet.Root
        variant="snap"
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <Sheet.Trigger asChild>
          <Button>Open Sheet with Snap Points</Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Box w={{ base: '100%', md: '50%' }} maxW="2xl" mx="auto">
              <Sheet.Header>
                <Sheet.Title>Snap Points Demo</Sheet.Title>
                <Sheet.Description>
                  Drag to different snap points or use the handle.
                </Sheet.Description>
              </Sheet.Header>
              <Box px="padding.inline.md">
                <Paragraph>
                  This sheet has multiple snap points: 200px, 400px, 70% of viewport height, and
                  full height. You can drag the handle to snap to different positions.
                </Paragraph>
                <Paragraph>
                  The snap points feature allows users to drag the sheet to predefined positions,
                  providing a more controlled and predictable interaction pattern. This is
                  especially useful for forms, settings panels, or any content that benefits from
                  different viewing heights. The sheet will smoothly animate between snap points and
                  can be configured with pixel values, percentages, or a combination of both.
                </Paragraph>
              </Box>
              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant="outlined">Close</Button>
                </Sheet.Close>
                <Sheet.Close asChild>
                  <Button>Ok</Button>
                </Sheet.Close>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}
