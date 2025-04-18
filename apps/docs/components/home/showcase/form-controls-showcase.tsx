'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/typography/heading'
import { css } from '@styled-system/css'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const FormControlsShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',

          gap: '6',
          py: '2',
        })}
      >
        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>Theme Preference</Heading>
          <RadioGroup.Root
            defaultValue="system"
            className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <RadioGroup.Item value="light" id="theme-light" />
              <Label htmlFor="theme-light">Light</Label>
            </div>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <RadioGroup.Item value="dark" id="theme-dark" />
              <Label htmlFor="theme-dark">Dark</Label>
            </div>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <RadioGroup.Item value="system" id="theme-system" />
              <Label htmlFor="theme-system">System</Label>
            </div>
          </RadioGroup.Root>
        </div>

        <Separator />

        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>Notification Settings</Heading>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <Checkbox id="notify-email" defaultChecked />
              <Label htmlFor="notify-email">Email notifications</Label>
            </div>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <Checkbox id="notify-sms" />
              <Label htmlFor="notify-sms">SMS notifications</Label>
            </div>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <Checkbox id="notify-browser" defaultChecked />
              <Label htmlFor="notify-browser">Browser notifications</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>Privacy Settings</Heading>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <Checkbox id="privacy-profile" defaultChecked />
              <Label htmlFor="privacy-profile">Public profile</Label>
            </div>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <Checkbox id="privacy-activity" />
              <Label htmlFor="privacy-activity">Show activity status</Label>
            </div>
          </div>
        </div>

        <div className={css({ display: 'flex', justifyContent: 'flex-end', gap: '3', mt: '2' })}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="primary">Save Preferences</Button>
        </div>
      </div>
    </ShowcaseCard>
  )
}
