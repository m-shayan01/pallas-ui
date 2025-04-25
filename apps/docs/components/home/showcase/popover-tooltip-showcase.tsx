'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import Popover from '@/components/ui/popover/popover'
import Tooltip from '@/components/ui/tooltip/tooltip'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { css } from '@styled-system/css'
import { HStack, VStack } from '@styled-system/jsx'
import { InfoIcon, Settings } from 'lucide-react'
import { ShowcaseCard } from './showcase-card'

export const PopoverTooltipShowcase = () => {
  return (
    <ShowcaseCard
      title="Interactive Controls"
      description="Tooltips for information and popovers for interactive content"
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '6',
          py: '4',
        })}
      >
        {/* Tooltip example */}
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant="outlined" size="sm">
                <InfoIcon size={16} />
                <span className={css({ ml: '2' })}>Help</span>
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
            <div className={css({ p: '3' })}>
              <Heading level={3} className={css({ fontWeight: 'semibold', mb: '2' })}>
                Display Settings
              </Heading>
              <VStack gap="2">
                <HStack gap="2">
                  <Checkbox id="show-notifications" defaultChecked />
                  <Label htmlFor="show-notifications">Show notifications</Label>
                </HStack>
                <HStack gap="2">
                  <Checkbox id="dark-mode" />
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </HStack>
                <HStack className={css({ mt: '2' })}>
                  <Button size="sm" variant="primary" className={css({ width: '100%' })}>
                    Save
                  </Button>
                </HStack>
              </VStack>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </ShowcaseCard>
  )
}
