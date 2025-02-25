import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  description: 'Styles for the Carousel component',
  slots: ['root', 'item', 'previous', 'next', 'dots'],
  base: {
    root: {
      position: 'relative',
      overflow: 'hidden',
    },
    item: {
      display: 'none',
      overflow: 'hidden',
      height: 'inherit',
      '&[data-visible]': {
        display: 'block',
      },
    },
    previous: {
      position: 'absolute',
      left: '{spacing.0}',
      top: '50%',
      translate: '0 -50%',
    },
    next: {
      position: 'absolute',
      right: '{spacing.0}',
      top: '50%',
      translate: '0 -50%',
    },
    dots: {
      position: 'absolute',
      bottom: '{spacing.0}',
      left: '50%',
      translate: '-50% 0',
      display: 'flex',
    },
  },
  variants: {
    orientation: {
      vertical: {},
    },
  },
})
