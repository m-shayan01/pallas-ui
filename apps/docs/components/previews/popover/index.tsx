'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Popover from '@/components/ui/popover'
import { css } from '@styled-system/css'

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
              <Input id="width" size="md">
                <Input.Text defaultValue="100%" />
              </Input>
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
              <Input id="maxWidth" size="md">
                <Input.Text defaultValue="300px" />
              </Input>
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
              <Input id="height" size="md">
                <Input.Text defaultValue="25px" />
              </Input>
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
              <Input id="maxHeight" size="md">
                <Input.Text defaultValue="none" />
              </Input>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}
