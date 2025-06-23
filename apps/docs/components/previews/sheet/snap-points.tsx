'use client'

import { Button } from '@/components/ui/button'
import Sheet from '@/components/ui/sheet'
import { Paragraph } from '@/components/ui/typography'
import { Box } from '@styled-system/jsx'
import { useState } from 'react'

export default function SheetSnapPointsDemo() {
  const snapPoints = ['200px', '400px', 0.7, 0.9]
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0] as string | number)

  return (
    <>
      <Sheet.Root
        mode="snap"
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
            <Box w="50%" mx="auto">
              <Sheet.Header>
                <Sheet.Title>Snap Points Demo</Sheet.Title>
                <Sheet.Description>
                  Drag to different snap points or use the handle.
                </Sheet.Description>
              </Sheet.Header>
              <Box px="4">
                <Paragraph>
                  This sheet has multiple snap points: 200px, 400px, 70% of viewport height, and
                  full height. You can drag the handle to snap to different positions.
                </Paragraph>
                <Paragraph>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English.
                </Paragraph>
              </Box>
              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant="outlined">Cancel</Button>
                </Sheet.Close>
                <Button>Submit</Button>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}
