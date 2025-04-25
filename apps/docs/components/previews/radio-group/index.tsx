'use client'

import { css } from '@styled-system/css'
import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'

export default function Example() {
  return (
    <RadioGroup.Root defaultValue="comfortable">
      <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
        <RadioGroup.Item value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
        <RadioGroup.Item value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
        <RadioGroup.Item value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup.Root>
  )
}