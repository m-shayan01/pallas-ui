'use client'

import Menubar from '@/components/ui/menu-bar/menu-bar'
import { css } from '@styled-system/css'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const MenubarShowcase = () => {
  return (
    <ShowcaseCard paddingBlock="0" paddingTitle="0">
      <div className={css({ py: '2', display: 'flex', justifyContent: 'center' })}>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>New Tab</Menubar.Item>
              <Menubar.Item>New Window</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Share</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Print</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>Edit</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>Undo</Menubar.Item>
              <Menubar.Item>Redo</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Cut</Menubar.Item>
              <Menubar.Item>Copy</Menubar.Item>
              <Menubar.Item>Paste</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>View</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.CheckboxItem checked>Show Toolbar</Menubar.CheckboxItem>
              <Menubar.CheckboxItem>Show Statusbar</Menubar.CheckboxItem>
              <Menubar.Separator />
              <Menubar.SubMenu>
                <Menubar.SubTrigger>Appearance</Menubar.SubTrigger>
                <Menubar.SubContent>
                  <Menubar.RadioGroup value="system">
                    <Menubar.RadioItem value="light">Light</Menubar.RadioItem>
                    <Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>
                    <Menubar.RadioItem value="system">System</Menubar.RadioItem>
                  </Menubar.RadioGroup>
                </Menubar.SubContent>
              </Menubar.SubMenu>
            </Menubar.Content>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
    </ShowcaseCard>
  )
}
