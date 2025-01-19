import { defineSlotRecipe } from '@pandacss/dev'

export const popover = defineSlotRecipe({
  className: 'popover',
  description: 'Styles for the Popover component',
  slots: ['root', 'trigger', 'portal', 'content', 'arrow', 'close'],
  base: {
    content: {
      zIndex: 50,
      w: '72',
      rounded: '{radii.lg}',
      bg: '{colors.surface.elevated}',
      p: '{spacing.padding.block.lg} {spacing.padding.inline.md}',
      color: '{colors.text}',
      outline: 'none',
      boxShadow: '{shadows.lg}',

      _open: {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
      },

      _closed: {
        animateOut: true,
        fadeOut: 0,
        zoomOut: 95,
      },

      _top: {
        slideInFromBottom: '2',
      },

      _bottom: {
        slideInFromTop: '2',
      },

      _left: {
        slideInFromRight: '2',
      },

      _right: {
        slideInFromLeft: '2',
      },
    },
    arrow: {
      fill: '{colors.surface.elevated}',
    },
    close: {
      position: 'absolute',
      right: 5,
      top: 5,
      outline: 'none',
      cursor: 'pointer',
    },
  },
})
