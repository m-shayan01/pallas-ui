import { defineSemanticTokens } from '@pandacss/dev'

export const borders = defineSemanticTokens.borders({
  input: {
    default: { value: '{borders.xs} {colors.border}' },
    hover: { value: '{borders.xs} {colors.primary.hover}' },
    disabled: { value: '{borders.xs} {colors.border.secondary}' },

    success: { value: '{borders.xs} {colors.success.border}' },
    successHover: { value: '{borders.xs} {colors.success.borderHover}' },

    error: { value: '{borders.xs} {colors.error.border}' },
    errorHover: { value: '{borders.xs} {colors.error.borderHover}' },

    warning: { value: '{borders.xs} {colors.warning.border}' },
    warningHover: { value: '{borders.xs} {colors.warning.borderHover}' },
  },
})
