import { defineTokens } from '@pandacss/dev'
import { borders } from './borders'
import { durations } from './durations'
import { radii } from './radii'
import { sizes } from './size'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'

export const tokens = defineTokens({
  sizes,
  spacing,
  durations,
  borders,
  radii,
  fontSizes,
  fontWeights,
  letterSpacings,
  fonts,
  lineHeights,
})
