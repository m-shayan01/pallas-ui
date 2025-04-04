'use client'

import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Popover from '@/components/ui/popover'

export default function Example() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outlined">Open popover</Button>
      </Popover.Trigger>
      <Popover.Content css={{ width: '320px' }}>
        <div className={css({ display: 'grid', gap: '4' })}>
          <div className={css({ spaceY: '2' })}>
            <h4 className={css({ fontWeight: 'medium', lineHeight: 'none' })}>Dimensions</h4>
            <p className={css({ color: 'text.muted', fontSize: 'sm' })}>
              Set the dimensions for the layer.
            </p>
          </div>
          <div className={css({ display: 'grid', gap: '2' })}>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="width">Width</Label>
              <Input.Text id="width" defaultValue="100%" />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input.Text id="maxWidth" defaultValue="300px" />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="height">Height</Label>
              <Input.Text id="height" defaultValue="25px" />
            </div>
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems: 'center',
                gap: '4',
              })}
            >
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input.Text id="maxHeight" defaultValue="none" />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}