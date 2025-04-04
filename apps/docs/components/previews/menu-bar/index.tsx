'use client'

import Menubar from '@/components/ui/menu-bar'
import { icon } from '@styled-system/recipes'
import { Check, ChevronRight } from 'lucide-react'

export default function Example() {
  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New Tab <span className={icon()}>⌘T</span>
          </Menubar.Item>
          <Menubar.Item>
            New Window <span className={icon()}>⌘N</span>
          </Menubar.Item>
          <Menubar.Item disabled>New Incognito Window</Menubar.Item>
          <Menubar.Separator />
          <Menubar.SubMenu>
            <Menubar.SubTrigger>Share</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Email link</Menubar.Item>
              <Menubar.Item>Messages</Menubar.Item>
              <Menubar.Item>Notes</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.SubMenu>
          <Menubar.Separator />
          <Menubar.Item>
            Print... <span className={icon()}>⌘P</span>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Undo <span className={icon()}>⌘Z</span>
          </Menubar.Item>
          <Menubar.Item>
            Redo <span className={icon()}>⇧⌘Z</span>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.SubMenu>
            <Menubar.SubTrigger>Find</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>Search the web</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Find...</Menubar.Item>
              <Menubar.Item>Find Next</Menubar.Item>
              <Menubar.Item>Find Previous</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.SubMenu>
          <Menubar.Separator />
          <Menubar.Item>Cut</Menubar.Item>
          <Menubar.Item>Copy</Menubar.Item>
          <Menubar.Item>Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
          <Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Item>
            Reload <span className={icon()}>⌘R</span>
          </Menubar.Item>
          <Menubar.Item disabled>
            Force Reload <span className={icon()}>⇧⌘R</span>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Toggle Fullscreen</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Hide Sidebar</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value="benoit">
            <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
            <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
            <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item>Edit...</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  )
}