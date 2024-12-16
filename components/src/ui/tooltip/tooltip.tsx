'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tooltip } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

export type RootProps = WithFixedClassName<ComponentProps<typeof TooltipPrimitive.Root>>

const Provider = TooltipPrimitive.Provider
const Portal = TooltipPrimitive.Portal

export const Root = withProvider<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(TooltipPrimitive.Root, 'root')

export const Trigger = withContext<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  Assign<ComponentProps<typeof TooltipPrimitive.Trigger>, JsxStyleProps>
>(TooltipPrimitive.Trigger, 'trigger')

export const Content = withContext<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  Assign<ComponentProps<typeof TooltipPrimitive.Content>, JsxStyleProps>
>(TooltipPrimitive.Content, 'content')

const Tooltip = {
  Root,
  Trigger,
  Content,
  Provider,
  Portal,
}

export default Tooltip
