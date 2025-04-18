'use client'

import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import Tabs from '@/components/ui/tabs'
import { css } from '@styled-system/css'
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
          className={css({ mb: '4', borderBottom: '1px solid', borderColor: 'gray.200' })}
        >
          <Tabs.Trigger value="display">Display</Tabs.Trigger>
          <Tabs.Trigger value="audio">Audio</Tabs.Trigger>
        </Tabs.TabList>

        <Tabs.Content value="display">
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6', py: '2' })}>
            <div>
              <div className={css({ display: 'flex', justifyContent: 'space-between', mb: '2' })}>
                <Label htmlFor="brightness" className={css({ fontWeight: 'medium' })}>
                  Brightness
                </Label>
                <span>{brightness}%</span>
              </div>
              <Slider
                id="brightness"
                value={[brightness]}
                onValueChange={(value) => setBrightness(value[0] ?? 0)}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <div>
              <div className={css({ display: 'flex', justifyContent: 'space-between', mb: '2' })}>
                <Label htmlFor="contrast" className={css({ fontWeight: 'medium' })}>
                  Contrast
                </Label>
                <span>{contrast}%</span>
              </div>
              <Slider
                id="contrast"
                value={[contrast]}
                onValueChange={(value) => setContrast(value[0] ?? 0)}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="audio">
          <div className={css({ py: '2' })}>
            <div className={css({ display: 'flex', justifyContent: 'space-between', mb: '2' })}>
              <Label htmlFor="volume" className={css({ fontWeight: 'medium' })}>
                Volume
              </Label>
              <span>{volume}%</span>
            </div>
            <Slider
              id="volume"
              value={[volume]}
              onValueChange={(value) => setVolume(value[0] ?? 0)}
              min={0}
              max={100}
              step={1}
            />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </ShowcaseCard>
  )
}
