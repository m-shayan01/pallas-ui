import { defineSlotRecipe } from '@pandacss/dev'

export const tooltip = defineSlotRecipe({
  className: 'tooltip',
  description: 'Styles for the Tooltip component',
  slots: ['root', 'trigger', 'content'],
  base: {
    content: {
      zIndex: 50,
      overflow: 'hidden',
      rounded: '{radii.lg}',
      borderColor: '{colors.border}',
      borderWidth: '1px',
      bg: '{colors.surface.elevated}',
      px: '{spacing.padding.inline.sm}',
      py: '{spacing.padding.block.sm}',
      color: '{colors.text}',
      animateIn: true,
      fadeIn: 0,
      zoomIn: 95,

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
  },
})
