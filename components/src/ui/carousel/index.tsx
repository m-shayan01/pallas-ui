'use client'
import type { CarouselVariantProps } from '@styled-system/recipes'
import type { Assign, ComponentProps, HTMLStyledProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import type { WithFixedClassName } from '~/utils/types'
import { Root, withContext } from './root'

export type RootProps = WithFixedClassName<
  Assign<
    ComponentProps<'div'> & JsxStyleProps & CarouselVariantProps,
    {
      children: (props: RootChildrenProps) => React.ReactNode
      itemsVisible?: number
    }
  >
>

export type RootChildrenProps = {
  next: () => void
  previous: () => void
  goTo: (index: number) => void
  currentIndex: number
}

export const Item = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'item')

export const Previous = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'previous',
)

export const Next = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'next')

export const Dots = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'dots')

const Carousel = {
  Root,
  Item,
  Previous,
  Next,
  Dots,
}

export default Carousel
