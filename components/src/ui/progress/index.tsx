'use client'
import { type ProgressVariantProps, progress } from '@styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from '@styled-system/types'
import type * as React from 'react'
import { ProgressBar } from 'react-aria-components'
import type { Assign, WithFixedClassName } from '~/utils/types'
import { createStyleContext } from '../../utils/style-context'
const { withProvider, withContext } = createStyleContext(progress)

export type RootProps = Assign<
  WithFixedClassName<ComponentProps<typeof ProgressBar>>,
  ProgressVariantProps & { width?: number; height?: number; strokeWidth?: number }
>

export const Root = withProvider<React.ElementRef<typeof ProgressBar>, RootProps>(
  ProgressBar,
  'root',
  { forwardProps: ['strokeWidth'] },
)

export const Label = withContext<React.ElementRef<'p'>, HTMLStyledProps<'p'>>('p', 'label')

export const LineTrack = withContext<React.ElementRef<'line'>, HTMLStyledProps<'line'>>(
  'line',
  'lineTrack',
)

export const LineFill = withContext<React.ElementRef<'line'>, HTMLStyledProps<'line'>>(
  'line',
  'lineFill',
)
export const CircleTrack = withContext<React.ElementRef<'circle'>, HTMLStyledProps<'circle'>>(
  'circle',
  'circleTrack',
)
export const CircleFill = withContext<React.ElementRef<'circle'>, HTMLStyledProps<'circle'>>(
  'circle',
  'circleFill',
)

const Progress = {
  Root,
  Label,
  LineTrack,
  LineFill,
  CircleTrack,
  CircleFill,
}

export default Progress
