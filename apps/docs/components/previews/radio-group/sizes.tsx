'use client'

import { Label } from '@/components/ui/label'
import RadioGroup from '@/components/ui/radio-group'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '3' })}>Small</h3>
        <RadioGroup.Root defaultValue="option-one">
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-one" id="s1" />
            <Label htmlFor="s1">Option One</Label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-two" id="s2" />
            <Label htmlFor="s2">Option Two</Label>
          </div>
        </RadioGroup.Root>
      </div>

      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '3' })}>Medium (Default)</h3>
        <RadioGroup.Root defaultValue="option-one">
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-one" id="m1" />
            <Label htmlFor="m1">Option One</Label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-two" id="m2" />
            <Label htmlFor="m2">Option Two</Label>
          </div>
        </RadioGroup.Root>
      </div>

      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', mb: '3' })}>Large</h3>
        <RadioGroup.Root defaultValue="option-one">
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-one" id="l1" />
            <Label htmlFor="l1">Option One</Label>
          </div>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '2' })}>
            <RadioGroup.Item value="option-two" id="l2" />
            <Label htmlFor="l2">Option Two</Label>
          </div>
        </RadioGroup.Root>
      </div>
    </div>
  )
}
