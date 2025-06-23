'use client'

import { Button } from '@/components/ui/button'
import Sheet from '@/components/ui/sheet'
import { Paragraph } from '@/components/ui/typography'
import { Box } from '@styled-system/jsx'

export default function SheetNestedDemo() {
  return (
    <>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <Button>Open Parent Sheet</Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Box w="50%" mx="auto">
              <Sheet.Header>
                <Sheet.Title>Parent Sheet</Sheet.Title>
                <Sheet.Description>
                  This is the parent sheet. You can open a nested sheet from here.
                </Sheet.Description>
              </Sheet.Header>
              <Box px="4">
                <Paragraph>
                  This demonstrates how to create nested sheets. Click the button below to open a
                  nested sheet.
                </Paragraph>
              </Box>

              {/* Nested Sheet */}
              <Sheet.NestedRoot>
                <Sheet.Trigger asChild>
                  <Box m="4">
                    <Button>Open Nested Sheet</Button>
                  </Box>
                </Sheet.Trigger>
                <Sheet.Portal>
                  <Sheet.Overlay />
                  <Sheet.Content>
                    <Sheet.Handle />
                    <Box w="50%" mx="auto">
                      <Sheet.Header>
                        <Sheet.Title>Nested Sheet</Sheet.Title>
                        <Sheet.Description>
                          This is a nested sheet within the parent sheet.
                        </Sheet.Description>
                      </Sheet.Header>
                      <Box px="4">
                        <Paragraph>
                          This nested sheet is rendered on top of the parent sheet. You can have
                          multiple levels of nesting.
                        </Paragraph>
                        <Paragraph>
                          The nested sheet inherits the context and styling from the parent sheet.
                        </Paragraph>
                      </Box>
                      <Sheet.Footer>
                        <Sheet.Close asChild>
                          <Button variant="outlined">Close Nested</Button>
                        </Sheet.Close>
                        <Button>Confirm</Button>
                      </Sheet.Footer>
                    </Box>
                  </Sheet.Content>
                </Sheet.Portal>
              </Sheet.NestedRoot>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant="outlined">Close Parent</Button>
                </Sheet.Close>
                <Button>Save</Button>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}
