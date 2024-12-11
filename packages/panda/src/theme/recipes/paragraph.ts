import { defineRecipe } from '@pandacss/dev'

export const paragraph = defineRecipe({
  className: 'paragraph',
  description: 'Styles for the Paragraph component',
  base: {
    fontSize: {
      base: '{fontSizes.md}',
      lg: '{fontSizes.lg}',
      '2xl': '{fontSizes.xl}',
    },
    lineHeight: '1.5',
    fontFamily: 'body',
    textAlign: { base: 'center', md: 'left' },
    display: 'block',
  },
  variants: {
    size: {
      base: {
        fontSize: {
          base: '{fontSizes.md}',
          lg: '{fontSizes.lg}',
          '2xl': '{fontSizes.xl}',
        },
      },
      large: {
        fontSize: {
          base: '{fontSizes.lg}',
          lg: '{fontSizes.xl}',
          '2xl': '{fontSizes.2xl}',
        },
      },
      compact: {
        fontSize: {
          base: '{fontSizes.sm}',
          lg: '{fontSizes.md}',
          '2xl': '{fontSizes.lg}',
        },
      },
    },
    color: {
      default: { color: '{colors.text}' },
      secondary: { color: '{colors.text.secondary}' },
      success: { color: '{colors.success}' },
      warning: { color: '{colors.warning}' },
      error: { color: '{colors.error}' },
      disabled: { color: '{colors.text.disabled}' },
    },
    textAlign: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
      justify: { textAlign: 'justify' },
    },
    textStyle: {
      italic: { fontStyle: 'italic' },
      bold: { fontWeight: 'bold' },
      underline: { textDecoration: 'underline' },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'base',
  },
})
