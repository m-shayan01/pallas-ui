import { defineRecipe } from '@pandacss/dev'

export const separator = defineRecipe({
  className: 'separator',
  description: 'Styles for the Separator component',
  base: {
    flexShrink: 0,
    borderColor: '{colors.border}',
  },
  variants: {
    orientation: {
      horizontal: {
        borderBlockEndWidth: '{sizes.0.5}',
      },
      vertical: {
        height: '{full}',
        width: '1px',
        borderInlineEndWidth: '{sizes.0.5}',
      },
    },
    rounded: {
      true: {
        borderRadius: '{full}',
      },
    },
    type: {
      solid: {},
      dotted: {
        borderStyle: 'dotted',
      },
      dashed: {
        borderStyle: 'dashed',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
