import { defineSlotRecipe } from '@pandacss/dev'

export const carousel = defineSlotRecipe({
  className: 'carousel',
  description: 'Styles for the Carousel component',
  slots: ['root', 'list', 'item', 'previous', 'next', 'dots'],
  base: {
    root: {
      position: 'relative',
    },
    list: {
      display: 'flex',
    },
    item: {
      minWidth: '0',
      flexShrink: '0',
      flexGrow: '0',
      // flexBasis: 'full',
      width: 'full'
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

    },
  },
  variants: {
    orientation: {
      horizontal: {
        list: {
          ml: '-4'
        },
        item: {
          pl: '4'
        }
      },
      vertical: {
        list: {
          flexDirection: 'column',
          mt: '-4'
        },
        item: {
          pt: '4'
        }
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})
