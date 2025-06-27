'use client'

import { Button } from '@/components/ui/button'
import Sheet from '@/components/ui/sheet'
import { Paragraph } from '@/components/ui/typography'
import { css } from '@styled-system/css'
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
            <Box w={{ base: '100%', md: '50%' }} mx="auto">
              <Sheet.Header>
                <Sheet.Title>Parent Sheet</Sheet.Title>
                <Sheet.Description>
                  This is the parent sheet. You can open a nested sheet from here.
                </Sheet.Description>
              </Sheet.Header>
              <Paragraph className={css({ marginX: '{spacing.padding.inline.md}' })}>
                This demonstrates how to create nested sheets. Click the button below to open a
                nested sheet.
              </Paragraph>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant="outlined">Close Parent</Button>
                </Sheet.Close>

                {/* Nested Sheet */}
                <Sheet.NestedRoot>
                  <Sheet.Trigger asChild>
                    <Button>Open Nested Sheet</Button>
                  </Sheet.Trigger>
                  <Sheet.Portal>
                    <Sheet.Overlay />
                    <Sheet.Content>
                      <Sheet.Handle />
                      <Box w={{ base: '100%', md: '50%' }} mx="auto">
                        <Sheet.Header>
                          <Sheet.Title>Nested Sheet</Sheet.Title>
                          <Sheet.Description>
                            This is a nested sheet within the parent sheet.
                          </Sheet.Description>
                        </Sheet.Header>
                        <Box px="{spacing.padding.inline.md}">
                          <Paragraph>
                            This nested sheet is rendered on top of the parent sheet. You can have
                            multiple levels of nesting.
                          </Paragraph>
                          <Paragraph>
                            If you pull this drawer down a bit, it'll scale the drawer underneath it
                            as well.
                          </Paragraph>
                        </Box>
                        <Sheet.Footer>
                          <Sheet.Close asChild>
                            <Button variant="outlined">Close Nested</Button>
                          </Sheet.Close>
                        </Sheet.Footer>
                      </Box>
                    </Sheet.Content>
                  </Sheet.Portal>
                </Sheet.NestedRoot>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}
