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
    }
  >
>

export type RootChildrenProps = { onClickNext: () => void; onClickPrevious: () => void }

export const Item = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'item')

export const Previous = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>(
  'div',
  'previous',
)

export const Next = withContext<React.ElementRef<'div'>, HTMLStyledProps<'div'>>('div', 'next')

const Carousel = {
  Root,
  Item,
  Previous,
  Next,
}

export default Carousel
