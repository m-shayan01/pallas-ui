'use client'

import { type SegmentedVariantProps, segmented } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'
import { createStyleContext } from '~/utils/style-context'
import type { Assign, WithFixedClassName } from '~/utils/types'

const { withProvider, withContext } = createStyleContext(segmented)

export type RootProps = WithFixedClassName<ComponentProps<'div'>>

export const Root = withProvider<
  React.ElementRef<'div'>,
  Assign<RootProps, SegmentedVariantProps & JsxStyleProps>
>('div', 'root')

export const Option = withContext<
  React.ElementRef<'div'>,
  Assign<WithFixedClassName<ComponentProps<'div'>>, JsxStyleProps>
>('div', 'option')

export const Text = withContext<
  React.ElementRef<'p'>,
  Assign<WithFixedClassName<ComponentProps<'p'>>, JsxStyleProps>
>('p', 'text')

const Segmented = {
  Root,
  Option,
  Text,
}

export default Segmented
