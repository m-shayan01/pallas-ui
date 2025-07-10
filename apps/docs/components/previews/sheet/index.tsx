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
            <Box w={{ base: '100%', md: '50%' }} maxW="2xl" mx="auto">
              <Sheet.Header>
                <Sheet.Title>Are you absolutely sure?</Sheet.Title>
                <Sheet.Description>This action cannot be undone.</Sheet.Description>
              </Sheet.Header>

              <Paragraph css={{ marginX: '{spacing.padding.inline.md}' }}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Paragraph>

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
