'use client'

import Menubar from '@/components/ui/menu-bar'
import { useState } from 'react'

export default function Example() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [showStatusBar, setShowStatusBar] = useState(true)

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.CheckboxItem 
            checked={showBookmarks} 
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem 
            checked={showFullUrls} 
            onCheckedChange={setShowFullUrls}
          >
            Show Full URLs
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem 
            checked={showStatusBar} 
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </Menubar.CheckboxItem>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  )
}