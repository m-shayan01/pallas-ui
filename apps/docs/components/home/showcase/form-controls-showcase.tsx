'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/typography/heading'
import { css } from '@styled-system/css'
import { Box, HStack, VStack } from '@styled-system/jsx'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const FormControlsShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <VStack gap="layout.internal.lg" w="full">
        <Box css={{ spaceY: '4' }}>
          <Heading level={5}>Theme Preference</Heading>
          <RadioGroup.Root
            defaultValue="system"
            className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.inline.sm' })}
          >
            <HStack gap="gap.inline.xs">
              <RadioGroup.Item value="light" id="theme-light" />
              <Label htmlFor="theme-light">Light</Label>
            </HStack>
            <HStack gap="gap.inline.xs">
              <RadioGroup.Item value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark">Dark</Label>
            </HStack>
            <HStack gap="gap.inline.xs">
              <RadioGroup.Item value="system" id="theme-system" />
              <Label htmlFor="theme-system">System</Label>
            </HStack>
          </RadioGroup.Root>
        </Box>

        <Separator />

        <Box css={{ spaceY: '4' }}>
          <Heading level={5}>Notification Settings</Heading>
          <VStack gap="gap.inline.sm">
            <HStack gap="gap.inline.xs">
              <Checkbox id="notify-email" defaultChecked />
              <Label htmlFor="notify-email">Email notifications</Label>
            </HStack>
            <HStack gap="gap.inline.xs">
              <Checkbox id="notify-sms" />
              <Label htmlFor="notify-sms">SMS notifications</Label>
            </HStack>
            <HStack gap="gap.inline.xs">
              <Checkbox id="notify-browser" defaultChecked />
              <Label htmlFor="notify-browser">Browser notifications</Label>
            </HStack>
          </VStack>
        </Box>

        <Separator />

        <Box css={{ spaceY: '4' }}>
          <Heading level={5}>Privacy Settings</Heading>
          <VStack gap="gap.inline.sm">
            <HStack gap="gap.inline.xs">
              <Checkbox id="privacy-profile" defaultChecked />
              <Label htmlFor="privacy-profile">Public profile</Label>
            </HStack>
            <HStack gap="gap.inline.xs">
              <Checkbox id="privacy-activity" />
              <Label htmlFor="privacy-activity">Show activity status</Label>
            </HStack>
          </VStack>
        </Box>

        <HStack gap="gap.inline.sm" justify="flex-end" mt="2">
          <Button variant="outlined">Cancel</Button>
          <Button variant="primary">Save Preferences</Button>
        </HStack>
      </VStack>
    </ShowcaseCard>
  )
}
