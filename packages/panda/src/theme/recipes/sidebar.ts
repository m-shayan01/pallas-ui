import { defineSlotRecipe } from '@pandacss/dev'

export const sidebar = defineSlotRecipe({
  className: 'sidebar',
  description: 'Styles for the Sidebar component',
  slots: [
    'root',
    'group',
    'value',
    'trigger',
    'viewport',
    'content',
    'label',
    'item',
    'itemIndicator',
    'separator',
  ],
  base: {},
  defaultVariants: {},
})
