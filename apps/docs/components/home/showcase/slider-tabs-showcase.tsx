'use client'

import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import Tabs from '@/components/ui/tabs'
import { css } from '@styled-system/css'
import { VStack } from '@styled-system/jsx'
import { Box } from '@styled-system/jsx'
import { HStack } from '@styled-system/jsx'
import React, { useState } from 'react'
import { ShowcaseCard } from './showcase-card'

export const SliderTabsShowcase = () => {
  const [volume, setVolume] = useState(50)
  const [brightness, setBrightness] = useState(75)
  const [contrast, setContrast] = useState(60)

  return (
    <ShowcaseCard
      title="Display Settings"
      description="Adjust display and audio settings with tabs and sliders"
    >
      <Tabs.Root defaultValue="display">
        <Tabs.TabList
          className={css({
            mb: 'padding.block.md',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
          })}
        >
          <Tabs.Trigger value="display">Display</Tabs.Trigger>
          <Tabs.Trigger value="audio">Audio</Tabs.Trigger>
        </Tabs.TabList>

        <Tabs.Content value="display">
          <VStack gap="gap.component.lg" py="padding.block.md">
            <Box>
              <HStack justify="space-between" mb="2">
                <Label htmlFor="brightness" className={css({ fontWeight: 'medium' })}>
                  Brightness
                </Label>
                <span>{brightness}%</span>
              </HStack>
              <Slider
                id="brightness"
                value={[brightness]}
                onValueChange={(value) => setBrightness(value[0] ?? 0)}
                min={0}
                max={100}
                step={1}
              />
            </Box>

            <Box>
              <HStack justify="space-between" mb="2">
                <Label htmlFor="contrast" className={css({ fontWeight: 'medium' })}>
                  Contrast
                </Label>
                <span>{contrast}%</span>
              </HStack>
              <Slider
                id="contrast"
                value={[contrast]}
                onValueChange={(value) => setContrast(value[0] ?? 0)}
                min={0}
                max={100}
                step={1}
              />
            </Box>
          </VStack>
        </Tabs.Content>

        <Tabs.Content value="audio">
          <VStack gap="gap.component.lg" py="padding.block.md">
            <Box>
              <HStack justify="space-between" mb="2">
                <Label htmlFor="volume" className={css({ fontWeight: 'medium' })}>
                  Volume
                </Label>
                <span>{volume}%</span>
              </HStack>
              <Slider
                id="volume"
                value={[volume]}
                onValueChange={(value) => setVolume(value[0] ?? 0)}
                min={0}
                max={100}
                step={1}
              />
            </Box>
          </VStack>
        </Tabs.Content>
      </Tabs.Root>
    </ShowcaseCard>
  )
}
