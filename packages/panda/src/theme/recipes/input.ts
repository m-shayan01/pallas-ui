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

    _hover: {
      borderColor: '{colors.primary.hover}',
    },
    _focus: {
      borderColor: '{colors.primary.hover}',
      shadow: '0 0 0 2px {colors.primary.bgHover}',
    },
    _file: {
      border: 'none',
      bg: 'transparent',
      textStyle: 'sm',
      fontWeight: 'medium',
    },

    _placeholder: {
      color: '{colors.text.secondary}',
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
      color: '{colors.text.disabled}',
      bg: '{colors.fill.disabled}',
      borderColor: '{colors.border.secondary}',
    },
  },
  variants: {
    size: {
      sm: {
        h: '{sizes.controlHeight.sm}',
        px: '{spacing.padding.inline.sm}',
        py: '{spacing.padding.block.sm}',
        textStyle: 'sm',
      },
      md: {
        h: '{sizes.controlHeight.md}',
        px: '{spacing.padding.inline.md}',
        py: '{spacing.padding.block.md}',
        textStyle: 'md',
      },
      lg: {
        h: '{sizes.controlHeight.lg}',
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
