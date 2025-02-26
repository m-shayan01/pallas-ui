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
      width: '{full}',
      position: 'absolute',
      visibility: 'hidden',
      overflow: 'hidden',
      height: 'inherit',
      '&[data-visible=right]': {
        visibility: 'visible',
        animationStyle: 'carousel.slideInRight',
        zIndex: 99,
      },
      '&[data-visible=left]': {
        visibility: 'visible',
        animationStyle: 'carousel.slideInLeft',
        zIndex: 99,
      },
      '&[data-exit]': {
        transition: 'visibility 1s',
      },
    },
    previous: {
      position: 'absolute',
      left: '{spacing.0}',
      top: '50%',
      translate: '0 -50%',
      zIndex: 100,
    },
    next: {
      position: 'absolute',
      right: '{spacing.0}',
      top: '50%',
      translate: '0 -50%',
      zIndex: 100,
    },
    dots: {
      position: 'absolute',
      bottom: '{spacing.0}',
      left: '50%',
      translate: '-50% 0',
      display: 'flex',
      zIndex: 100,
    },
  },
  variants: {
    orientation: {
      vertical: {},
    },
  },
})
