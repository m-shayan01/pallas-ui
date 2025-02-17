import { defineRecipe } from '@pandacss/dev'

export const separator = defineRecipe({
  className: 'separator',
  description: 'Styles for the Separator component',
  base: {},
  variants: {
    orientation: {
      horizontal: {
        borderBlockEndWidth: '{sizes.0.5}',
      },
      vertical: {
        height: '{full}',
        borderInlineEndWidth: '{sizes.0.5}',
      },
    },
    rounded: {
      true: {
        borderRadius: '{full}',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
