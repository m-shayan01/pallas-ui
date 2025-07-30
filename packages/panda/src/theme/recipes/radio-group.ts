import { defineSlotRecipe } from '@pandacss/dev'

export const radioGroup = defineSlotRecipe({
  className: 'radioGroup',
  description: 'Styles for the RadioGroup component',
  slots: ['root', 'item', 'indicator', 'icon'],
  base: {
    root: {
      display: 'grid',
    },
    item: {
      aspectRatio: 'square',
      rounded: '{radii.full}',
      border: '{borders.input.defaultSm}',
      color: '{colors.text}',
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
        // opacity: 0.5,
        fill: '{colors.fill.disabled}',
        border: '{borders.input.disabledSm}',
        _hover: {
          border: '{borders.input.disabledSm}',
        },
      },

      transition: 'common',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      _after: {
        w: '60%',
        h: '60%',
        content: '""',
        display: 'block',
        rounded: '{radii.full}',
        backgroundColor: '{colors.primary}',
        animationStyle: 'fadeInScale',
      },
    },
    icon: {
      h: '{sizes.icon.sm}',
      w: '{sizes.icon.sm}',
      fill: 'current',
      color: 'current',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          gap: '{spacing.gap.inline.xs}',
        },
        item: {
          h: '{sizes.selectionControl.sm}',
          w: '{sizes.selectionControl.sm}',
        },
      },

      md: {
        root: {
          gap: '{spacing.gap.inline.sm}',
        },
        item: {
          h: '{sizes.selectionControl.md}',
          w: '{sizes.selectionControl.md}',
        },
      },
      lg: {
        root: {
          gap: '{spacing.gap.inline.md}',
        },
        item: {
          h: '{sizes.selectionControl.lg}',
          w: '{sizes.selectionControl.lg}',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
