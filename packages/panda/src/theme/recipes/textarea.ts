import { defineRecipe } from '@pandacss/dev'

export const textarea = defineRecipe({
  className: 'textarea',
  description: 'Styles for the Textarea component',
  base: {
    display: 'flex',
    minH: '80px',
    w: 'full',
    rounded: '{radii.md}',
    border: '{borders.input.default}',
    bg: '{colors.surface.elevated}',
    px: '{spacing.padding.inline.md}',
    py: '{spacing.padding.block.md}',
    textStyle: 'sm',
    focusRingOffsetColor: '{colors.fill.secondary}',

    _hover: {
      border: '{borders.input.hover}',
    },
    _focus: {
      border: '{borders.input.hover}',
      shadow: '{shadows.input.default}',
    },
    _placeholder: {
      color: '{colors.text.secondary}',
    },

    _focusVisible: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
    },

    _disabled: {
      cursor: 'not-allowed',
      // opacity: '0.5',
      color: '{colors.text.disabled}',
      bg: '{colors.fill.disabled}',
      border: '{borders.input.disabled}',
    },
  },
})
