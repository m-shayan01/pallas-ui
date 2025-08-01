import { defineSemanticTokens } from '@pandacss/dev'

export const borders = defineSemanticTokens.borders({
  dialog: {
    value: '{borders.sm} {colors.border}',
  },
  control: {
    value: '{borders.sm} {colors.border}',
  },
  date: {
    value: '{borders.sm} {colors.primary}',
  },
  input: {
    default: { value: '{borders.xs} {colors.border}' },
    defaultSm: { value: '{borders.sm} {colors.border}' },

    hover: { value: '{borders.xs} {colors.primary.hover}' },
    hoverSm: { value: '{borders.sm} {colors.primary.hover}' },

    disabled: { value: '{borders.xs} {colors.border.secondary}' },
    disabledSm: { value: '{borders.sm} {colors.border.secondary}' },

    success: { value: '{borders.xs} {colors.success.border}' },
    successHover: { value: '{borders.xs} {colors.success.borderHover}' },

    error: { value: '{borders.xs} {colors.error.border}' },
    errorHover: { value: '{borders.xs} {colors.error.borderHover}' },

    warning: { value: '{borders.xs} {colors.warning.border}' },
    warningHover: { value: '{borders.xs} {colors.warning.borderHover}' },
  },

  sliderThumb: {
    default: { value: '{borders.md} {colors.primary}' },
    hover: { value: '{borders.lg} {colors.primary}' },
    hoverMd: { value: '{borders.xl} {colors.primary}' },
    hoverLg: { value: '{borders.2xl} {colors.primary}' },

    disabled: { value: '{borders.md} {colors.border.secondary}' },
  },

  switch: { value: '{borders.md} transparent' },
})
