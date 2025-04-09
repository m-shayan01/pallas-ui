'use client'

import Tabs from '@/components/ui/tabs'
import { css } from '@styled-system/css'

const triggerStyle = css({
  position: 'relative',
  h: '9',
  rounded: '0',
  borderBottom: '2px solid transparent',
  bg: 'transparent',
  px: '4',
  pb: '3',
  pt: '2',
  fontWeight: 'semibold',
  color: 'text.tertiary',
  shadow: 'none',
  transition: 'none',
  cursor: 'pointer',

  '&[data-state=active]': {
    borderBottomColor: 'primary',
    color: 'text.primary',
    shadow: 'none',
  },
})

export default function TabsCustomStylesDemo() {
  return (
    <Tabs.Root defaultValue="tab1" position="top">
      <Tabs.TabList>
        <Tabs.Trigger className={triggerStyle} value="tab1">
          Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger className={triggerStyle} value="tab2">
          Tab 2
        </Tabs.Trigger>
      </Tabs.TabList>
      <Tabs.Content value="tab1">Content 1</Tabs.Content>
      <Tabs.Content value="tab2">Content 2</Tabs.Content>
    </Tabs.Root>
  )
}
