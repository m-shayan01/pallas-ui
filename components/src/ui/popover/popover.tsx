'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { popover } from '@styled-system/recipes'
import type { JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import { createStyleContext } from '~/utils/style-context'
import type { Assign, WithFixedClassName } from '~/utils/types'

const { withProvider, withContext } = createStyleContext(popover)

export const Portal = PopoverPrimitive.Portal

export type RootProps = WithFixedClassName<React.ComponentProps<typeof PopoverPrimitive.Root>>
export const Root = withProvider<
  React.ElementRef<typeof PopoverPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(PopoverPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentProps<typeof PopoverPrimitive.Trigger>
>(PopoverPrimitive.Trigger, 'trigger')

export const Content = withContext<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  Assign<React.ComponentProps<typeof PopoverPrimitive.Content>, JsxStyleProps>
>(PopoverPrimitive.Content, 'content')

const Popover = {
  Root,
  Trigger,
  Content,
  Portal,
}

export default Popover
