'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Popover from '@/components/ui/popover/popover'
import Tooltip from '@/components/ui/tooltip/tooltip'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { css } from '@styled-system/css'
import { Box, HStack, VStack } from '@styled-system/jsx'
import { InfoIcon, Settings } from 'lucide-react'
import { ShowcaseCard } from './showcase-card'

export const PopoverTooltipShowcase = () => {
  return (
    <ShowcaseCard
      title="Interactive Controls"
      description="Tooltips for information and popovers for interactive content"
    >
      <HStack justify="space-between" align="center" gap="gap.component.lg" py="4">
        {/* Tooltip example */}
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant="outlined" icon={<InfoIcon />}>
                Help
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <Paragraph size={'compact'}>Helpful information about this feature</Paragraph>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>

        {/* Popover example */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button variant="primary">
              <Settings size={16} />
              <span className={css({ ml: '2' })}>Settings</span>
            </Button>
          </Popover.Trigger>
          <Popover.Content className={css({ width: '220px' })}>
            <Box p="3">
              <Heading level={3} className={css({ fontWeight: 'semibold', mb: '2' })}>
                Display Settings
              </Heading>
              <VStack gap="2" align="start">
                <HStack gap="2">
                  <Checkbox id="show-notifications" defaultChecked />
                  <Label htmlFor="show-notifications">Show notifications</Label>
                </HStack>
                <HStack gap="2">
                  <Checkbox id="dark-mode" />
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </HStack>
                <HStack mt="2">
                  <Button variant="primary" className={css({ width: '100%' })}>
                    Save
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Popover.Content>
        </Popover.Root>
      </HStack>
    </ShowcaseCard>
  )
}
