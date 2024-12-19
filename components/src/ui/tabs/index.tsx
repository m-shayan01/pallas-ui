'use client'

import { type TabsVariantProps, tabs } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import { TabList as List, Tab as TabItem, TabPanel, Tabs as TabsRoot } from 'react-aria-components'
import { createStyleContext } from '~/utils/style-context'
import type { Assign, WithFixedClassName } from '~/utils/types'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProps = WithFixedClassName<ComponentProps<typeof TabsRoot>>
export const Root = withProvider<
  React.ElementRef<typeof TabsRoot>,
  Assign<RootProps, TabsVariantProps>
>(TabsRoot, 'root')

export const TabList = withContext<
  React.ElementRef<typeof List>,
  Assign<WithFixedClassName<ComponentProps<typeof List>>, JsxStyleProps>
>(List, 'tabList')

export const Trigger = withContext<
  React.ElementRef<typeof TabItem>,
  Assign<WithFixedClassName<ComponentProps<typeof TabItem>>, JsxStyleProps>
>(TabItem, 'trigger')

// const InkBar = withContext<React.ElementRef<'div'>, Assign<ComponentProps<'div'>, JsxStyleProps>>(
//   'div',
//   'inkBar',
// )

export const Content = withContext<
  React.ElementRef<typeof TabPanel>,
  Assign<WithFixedClassName<ComponentProps<typeof TabPanel>>, JsxStyleProps>
>(TabPanel, 'content')

const Tabs = {
  Root,
  TabList,
  Trigger,
  Content,
}

export default Tabs
