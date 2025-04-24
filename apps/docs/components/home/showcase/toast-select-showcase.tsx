'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Select from '@/components/ui/select'
import Toast from '@/components/ui/toast'
import { css } from '@styled-system/css'
import { Bell, Check } from 'lucide-react'
import React, { useState } from 'react'
import { ShowcaseCard } from './showcase-card'

export const ToastSelectShowcase = () => {
  const [open, setOpen] = useState(false)
  const [frequency, setFrequency] = useState('daily')

  const showToast = () => {
    setOpen(true)
    setTimeout(() => setOpen(false), 3000)
  }

  return (
    <ShowcaseCard
      title="Notification Preferences"
      description="Configure your notification settings and see real-time feedback"
    >
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '6', py: '2' })}>
        <div>
          <Label
            htmlFor="notification-frequency"
            className={css({ display: 'block', mb: '2', fontWeight: 'medium' })}
          >
            Notification Frequency
          </Label>
          <Select.Root value={frequency} onValueChange={setFrequency}>
            <Select.Trigger id="notification-frequency" className={css({ width: '100%' })}>
              <Select.Value placeholder="Select frequency" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="realtime">Real-time</Select.Item>
              <Select.Item value="hourly">Hourly</Select.Item>
              <Select.Item value="daily">Daily</Select.Item>
              <Select.Item value="weekly">Weekly</Select.Item>
              <Select.Item value="never">Never</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <Button onClick={showToast} className={css({ mt: '2' })}>
          Save Preferences
        </Button>

        <Toast.Provider>
          <Toast.Root open={open} onOpenChange={setOpen}>
            <Toast.Icon>
              <Check className={css({ color: 'green.500' })} />
            </Toast.Icon>
            <div>
              <Toast.Title>Preferences Updated</Toast.Title>
              <Toast.Description>
                Your notification frequency is now set to {frequency}.
              </Toast.Description>
            </div>
            <Toast.Close />
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>
      </div>
    </ShowcaseCard>
  )
}
