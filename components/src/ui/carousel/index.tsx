'use client'
import * as CarouselPrimitive from '@pallas-ui/carousel'
import { type Assign, type WithFixedClassName, createStyleContext } from '@pallas-ui/style-context'
import { carousel } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(carousel)

export type RootProps = WithFixedClassName<ComponentProps<typeof CarouselPrimitive.Root>>

export const Root = withProvider<
  React.ComponentRef<typeof CarouselPrimitive.Root>,
  Assign<RootProps, JsxStyleProps>
>(CarouselPrimitive.Root, 'root')

export const List = withContext<
  React.ComponentRef<typeof CarouselPrimitive.List>,
  Assign<ComponentProps<typeof CarouselPrimitive.List>, JsxStyleProps>
>(CarouselPrimitive.List, 'list')

export const Item = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Item>,
  Assign<ComponentProps<typeof CarouselPrimitive.Item>, JsxStyleProps>
>(CarouselPrimitive.Item, 'item')

export const Previous = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Previous>,
  Assign<ComponentProps<typeof CarouselPrimitive.Previous>, JsxStyleProps>
>(CarouselPrimitive.Previous, 'previous')

export const Next = withContext<
  React.ComponentRef<typeof CarouselPrimitive.Next>,
  Assign<ComponentProps<typeof CarouselPrimitive.Next>, JsxStyleProps>
>(CarouselPrimitive.Next, 'next')

const Carousel = {
  Root,
  List,
  Item,
  Previous,
  Next,
}

export default Carousel
