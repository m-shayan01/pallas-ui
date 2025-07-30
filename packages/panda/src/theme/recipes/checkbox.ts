import { defineSlotRecipe } from '@pandacss/dev'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  slots: ['root', 'indicator'],
  base: {
    root: {
      flexShrink: '0',
      rounded: '{radii.sm}',
      border: '{borders.input.defaultSm}',
      cursor: 'pointer',
      boxShadow: '{shadows.insetMinimal}',
      _hover: {
        border: '{borders.input.hover}',
      },
      _focusVisible: {
        outline: 'none',
      },

      _disabled: {
        cursor: 'not-allowed',
        bg: '{colors.fill.disabled}',
        _hover: {
          border: '{borders.input.defaultSm}',
        },
      },
      _checked: {
        bg: '{colors.primary}',
      },
      _indeterminate: {
        bg: '{colors.primary}',
      },
      transition: 'common',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.surface.elevated}',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          h: '{sizes.selectionControl.sm}',
          w: '{sizes.selectionControl.sm}',
          rounded: '{radii.sm}',
        },
      },
      md: {
        root: {
          h: '{sizes.selectionControl.md}',
          w: '{sizes.selectionControl.md}',
          rounded: '{radii.md}',
        },
      },
      lg: {
        root: {
          h: '{sizes.selectionControl.lg}',
          w: '{sizes.selectionControl.lg}',
          rounded: '{radii.lg}',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
