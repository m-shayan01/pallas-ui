import { defineSlotRecipe } from '@pandacss/dev'

export const form = defineSlotRecipe({
  className: 'form',
  description: 'Styles for the Form component',
  slots: ['provider', 'label', 'description', 'message'],
  base: {
    provider: {
      backgroundColor: '{colors.background.primary}',
    },
    label: {
      textStyle: 'sm',
      leading: 'none',
      fontWeight: 'medium',
      color: '{colors.text.secondary}',
      lineHeight: '{lineHeights.normal}',
      _peerDisabled: {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
      },
    },
    description: {
      textStyle: 'sm',
      color: '{colors.text.secondary}',
      lineHeight: '{lineHeights.normal}',
    },
    message: {
      textStyle: 'sm',
      fontWeight: 'semibold',
      _errorState: {
        color: '{colors.error}',
      },
    },
  },
})
