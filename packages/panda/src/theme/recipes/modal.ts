import { defineSlotRecipe } from '@pandacss/dev'

export const modal = defineSlotRecipe({
  className: 'modal',
  description: 'Styles for the Modal component',
  slots: [
    'root',
    'trigger',
    'portal',
    'overlay',
    'content',
    'header',
    'footer',
    'title',
    'description',
    'action',
    'cancel',
  ],
  base: {
    overlay: {
      position: 'fixed',
      inset: '0',
      zIndex: 50,
      bga: '{colors.surface.elevated}',
      backdropBlur: 'sm',
      _open: {
        animateIn: true,
        fadeIn: 0,
      },
      _closed: {
        animateOut: true,
        fadeOut: 0,
      },
    },
    content: {
      position: 'fixed',
      left: '50%',
      top: '50%',
      zIndex: 50,
      display: 'grid',
      w: 'full',
      maxWidth: '{sizes.lg}',
      translateX: '-50%',
      translateY: '-50%',
      textStyle: 'sm',
      transitionDuration: 'normal',
      gap: '{spacing.gap.component.lg}',
      bg: 'background',
      p: '{spacing.padding.block.lg}',
      boxShadow: 'lg',
      border: '1px solid {colors.border}',
      _open: {
        animateIn: true,
        fadeIn: 0,
        zoomIn: 95,
        slideInFromLeft: '50%',
        slideInFromTop: '48%',
      },

      _closed: {
        animateOut: true,
        fadeOut: 0,
        zoomOut: 95,
        slideOutToLeft: '50%',
        slideOutToTop: '48%',
      },

      sm: {
        rounded: '{radii.lg}',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      spaceY: '{spacing.padding.block.sm}',
      textAlign: 'center',

      sm: {
        textAlign: 'left',
      },
    },
    footer: {
      display: 'flex',
      flexDirection: 'column-reverse',

      sm: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        spaceX: '{spacing.gap.inline.sm}',
      },
    },
    title: {
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      textStyle: 'xs',
      color: '{colors.text.secondary}',
    },
    cancel: {
      mt: {
        base: '{spacing.gap.component.sm}',
        sm: '0',
      },
    },
  },
})
