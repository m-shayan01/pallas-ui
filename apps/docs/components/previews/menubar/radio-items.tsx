'use client'

import Menubar from '@/components/ui/menu-bar'
import { useState } from 'react'

export default function Example() {
  const [profile, setProfile] = useState("benoit")

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.RadioGroup value={profile} onValueChange={setProfile}>
            <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
            <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
            <Menubar.RadioItem value="luis">Luis</Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item>Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  )
}