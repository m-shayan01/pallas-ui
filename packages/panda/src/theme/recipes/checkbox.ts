import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  slots: ['root', 'indicator'],
  base: {
    root: {
      h: '{sizes.selectionControl.md}',
      w: '{sizes.selectionControl.md}',
      flexShrink: '0',
      rounded: 'sm',
      border: '1px solid {colors.border}',
      cursor: 'pointer',
      focusRingOffsetColor: '{colors.primary}',
      _hover: {
        borderColor: '{colors.primary.bgHover}',
      },
      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: '{colors.primary}',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      _checked: {
        bg: '{colors.primary}',
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.surface.elevated}',
    },
  },
})
