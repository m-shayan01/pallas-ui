import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  description: 'Styles for the Carousel component',
  slots: ['root', 'item', 'previous', 'next'],
  base: {
    root: { overflow: 'hidden' },
    item: {
      display: 'none',
      '&[data-visible]': {
        display: 'block',
      },
    },
    previous: {
      position: 'absolute',
      left: '{spacing.padding.inline.md}',
      top: '50%',
      translate: '0 -50%',
    },
    next: {
      position: 'absolute',
      right: '{spacing.padding.inline.md}',
      top: '50%',
      translate: '0 -50%',
    },
  },
  variants: {
    orientation: {
      vertical: {},
    },
  },
})
