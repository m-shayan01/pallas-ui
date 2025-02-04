import { defineRecipe } from '@pandacss/dev'

export const separator = defineRecipe({
  className: 'separator',
  description: 'Styles for the Separator component',
  base: {},
  variants: {
    rounded: {
      true: {
        borderRadius: '{full}',
      },
    },
  },
})
