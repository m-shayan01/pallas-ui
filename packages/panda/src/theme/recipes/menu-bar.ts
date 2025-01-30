import { defineSlotRecipe } from '@pandacss/dev'

export const menubar = defineSlotRecipe({
  className: 'menubar',
  description: 'Styles for the Menubar component',
  slots: [
    'root',
    'group',
    'sub',
    'radioGroup',
    'trigger',
    'subTrigger',
    'subContent',
    'content',
    'item',
    'checkboxItem',
    'radioItem',
    'itemIndicator',
    'label',
    'separator',
    'shortcut',
    'arrow',
  ],
  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    trigger: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      px: '3',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'medium',
      outline: '2px solid transparent',

      _focus: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },

      _open: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },
    },
    subTrigger: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      p: '{spacing.padding.block.sm} {spacing.padding.inline.sm}',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },

      _open: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },
    },
    subContent: {
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: '{radii.lg}',
      bg: '{colors.surface.elevated}',
      color: '{colors.text}',
      shadow: '{shadows.lg}',
      p: '{spacing.padding.block.lg} {spacing.padding.inline.md}',

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
    content: {
      zIndex: 50,
      minWidth: '72',
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
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      px: '{spacing.padding.inline.sm}',
      py: '{spacing.padding.block.sm}',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },

      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    checkboxItem: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      py: '{spacing.padding.block.sm}',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },

      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    radioItem: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      py: '{spacing.padding.block.sm}',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: '{colors.primary.bgHover}',
        color: '{colors.primary.textActive}',
      },

      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    itemIndicator: {
      position: 'absolute',
      left: '2',
      display: 'flex',
      h: '3.5',
      w: '3.5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      px: '{spacing.padding.inline.sm}',
      py: '{spacing.padding.block.sm}',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    separator: {
      my: '{spacing.padding.block.sm}',
      h: '1px',
      bg: '{colors.border}',
    },
    arrow: {
      fill: '{colors.surface.elevated}',
    },
  },
})
