import { defineSlotRecipe } from '@pandacss/dev'

export const drawer = defineSlotRecipe({
  className: 'drawer',
  description: 'Styles for the Drawer component',
  slots: ['root', 'trigger', 'portal', 'overlay', 'content', 'close', 'title', 'description'],
  base: {
    root: {},
    overlay: {
      position: 'fixed',
      zIndex: 50,
      inset: 0,
      backgroundColor: '{colors.bgSolid.hover}',
    },
    content: {
      position: 'fixed',
      zIndex: '50',
      w: '3/4',
      h: 'full',
      bg: 'surface.elevated',
      boxShadow: 'lg',
      p: '{spacing.padding.block.lg} {spacing.padding.inline.md}',
      color: 'text',
      outline: 'none',
      insetY: '0',
    },
    trigger: {},
    close: {
      position: 'absolute',
      top: 4,
      right: 4,
      cursor: 'pointer',
    },
    title: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      color: 'text',
      mb: 'padding.block.sm',
    },
    description: {
      fontSize: 'sm',
      color: 'text.secondary',
      mb: 'padding.block.md',
    },
  },
  variants: {
    side: {
      left: {
        content: {
          left: '0',
          '&[data-state=open]': {
            animationStyle: 'slideInLeft',
          },
          '&[data-state=closed]': {
            animationStyle: 'slideOutLeft',
          },
        },
      },
      right: {
        content: {
          right: '0',
          '&[data-state=open]': {
            animationStyle: 'slideInRight',
          },
          '&[data-state=closed]': {
            animationStyle: 'slideOutRight',
          },
        },
      },
    },
  },
  defaultVariants: {
    side: 'left',
  },
})
