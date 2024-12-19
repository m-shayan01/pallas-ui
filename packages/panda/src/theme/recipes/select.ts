import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  description: 'Styles for the Select component',
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
  base: {
    trigger: {
      display: 'flex',
      h: '{sizes.controlHeight.md}',
      w: 'full',
      alignItems: 'center',
      justifyContent: 'space-between',
      rounded: 'md',
      border: 'input',
      bg: '{colors.fill.secondary}',
      px: '{spacing.padding.inline.md}',
      py: '{spacing.padding.block.md}',
      textStyle: 'sm',
      cursor: 'pointer',
      focusRingOffsetColor: 'background',

      _placeholder: {
        color: '{colors.text.secondary}',
      },

      _focus: {
        outline: '2px solid {colors.border.primary}',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        color: '{colors.text.disabled}',
        bg: '{colors.fill.disabled}',
        borderColor: '{colors.border.secondary}',
      },
    },
    viewport: {
      p: '1',

      '&[data-position=popper]': {
        h: 'var(--radix-select-trigger-height)',
        w: 'full',
        minW: 'var(--radix-select-trigger-width)',
      },
    },
    content: {
      position: 'relative',
      zIndex: 50,
      minW: '8rem',
      overflow: 'hidden',
      rounded: 'md',
      border: 'base',
      bg: '{colors.fill.secondary}',
      color: '{colors.text.secondary}',
      shadow: 'md',

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

      '&[data-position=popper]': {
        _top: {
          translateY: '-1',
        },

        _bottom: {
          translateY: '1',
        },

        _left: {
          translateX: '-1',
        },

        _right: {
          translateX: '1',
        },
      },
    },
    label: {
      py: '1.5',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    item: {
      position: 'relative',
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      rounded: 'sm',
      py: '1.5',
      pl: '8',
      pr: '2',
      textStyle: 'sm',
      outline: '2px solid transparent',

      _focus: {
        bg: 'accent',
        color: 'accent.foreground',
      },

      ['&[data-disabled]']: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    itemIndicator: {
      position: 'absolute',
      left: '{spacing.padding.inline.md}',
      display: 'flex',
      h: '{sizes.iconSize.sm}',
      w: '{sizes.iconSize.sm}',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      mx: '-1',
      my: '1',
      h: '1px',
      bg: '{colors.border.secondary}',
    },
  },
})
