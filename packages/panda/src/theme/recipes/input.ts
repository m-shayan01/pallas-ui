import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  description: 'Styles for the Input component',
  base: {
    display: 'flex',
    h: '{spacing.controlHeight.md}',
    w: 'full',
    rounded: '{radii.md}',
    border: '1px solid {colors.border}',
    bg: '{colors.surface.elevated}',
    px: '{spacing.padding.inline.md}',
    py: '{spacing.padding.block.md}',
    textStyle: 'sm',
    focusRingOffsetColor: '{colors.fill.secondary}',

    _file: {
      border: 'none',
      bg: 'transparent',
      textStyle: 'sm',
      fontWeight: 'medium',
    },

    _placeholder: {
      color: 'muted.foreground',
    },

    _focusVisible: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      focusRingWidth: '2',
      focusRingColor: '{colors.primary.border}',
      focusRingOffsetWidth: '2',
    },

    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
  variants: {
    size: {
      sm: {
        h: '{spacing.controlHeight.sm}',
        px: '{spacing.padding.inline.sm}',
        py: '{spacing.padding.block.sm}',
        textStyle: 'sm',
      },
      md: {
        h: '{spacing.controlHeight.md}',
        px: '{spacing.padding.inline.md}',
        py: '{spacing.padding.block.md}',
        textStyle: 'md',
      },
      lg: {
        h: '{spacing.controlHeight.lg}',
        px: '{spacing.padding.inline.lg}',
        py: '{spacing.padding.block.lg}',
        textStyle: 'lg',
      },
    },
    shape: {
      default: {
        borderRadius: '0',
      },
      rounded: {
        borderRadius: '{radii.4xl}',
      },
      circle: {
        borderRadius: '{radii.full}',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
