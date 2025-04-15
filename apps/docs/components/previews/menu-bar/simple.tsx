'use client'

import Menubar from '@/components/ui/menu-bar'
import { icon } from '@styled-system/recipes'

export default function Example() {
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New Tab <span className={icon()}>⌘T</span>
          </Menubar.Item>
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
          <Menubar.Item>Zoom In</Menubar.Item>
          <Menubar.Item>Zoom Out</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Reset Zoom</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  )
}
