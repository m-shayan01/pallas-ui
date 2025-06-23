'use client'

import { Button } from '@/components/ui/button'
import Sheet from '@/components/ui/sheet'
import { Paragraph } from '@/components/ui/typography'
import { Box } from '@styled-system/jsx'

export default function SheetDemo() {
  return (
    <>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <Button>Open Sheet</Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Title>Are you absolutely sure?</Sheet.Title>
              <Sheet.Description>This action cannot be undone.</Sheet.Description>
            </Sheet.Header>
            <Box px="4">
              <Paragraph>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Paragraph>
            </Box>
            <Sheet.Footer css={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Sheet.Close asChild>
                <Button variant="outlined">Cancel</Button>
              </Sheet.Close>
              <Button>Submit</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}
