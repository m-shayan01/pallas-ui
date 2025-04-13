'use client'

import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'

export default function Example() {
  return (
    <form className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
        <Label htmlFor="notification-type">Notification type</Label>
        <RadioGroup.Root defaultValue="all" name="notification-type">
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="all" id="all" />
            <Label htmlFor="all">All new messages</Label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="mentions" id="mentions" />
            <Label htmlFor="mentions">Direct messages and mentions</Label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="none" id="none" />
            <Label htmlFor="none">Nothing</Label>
          </div>
        </RadioGroup.Root>
      </div>
      <Button type="submit" className={css({ alignSelf: 'flex-start' })}>
        Submit
      </Button>
    </form>
  )
}