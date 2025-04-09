'use client'

import Tabs from '@/components/ui/tabs'
import { css } from '@styled-system/css'

export default function TabsVerticalDemo() {
  return (
    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <div className={css({ display: 'flex', gap: 6 })}>
        <Tabs.TabList>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.TabList>
        <div className={css({ flex: 1 })}>
          <Tabs.Content value="tab1">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '2' })}>Content 1</h3>
            <p>
              This is the content for Tab 1. You can place any content here that you want to display
              when Tab 1 is active.
            </p>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '2' })}>Content 2</h3>
            <p>
              This is the content for Tab 2. You can place any content here that you want to display
              when Tab 2 is active.
            </p>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: '2' })}>Content 3</h3>
            <p>
              This is the content for Tab 3. You can place any content here that you want to display
              when Tab 3 is active.
            </p>
          </Tabs.Content>
        </div>
      </div>
    </Tabs.Root>
  )
}
