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
          base: '{fontSizes.sm}',
          lg: '{fontSizes.md}',
          '2xl': '{fontSizes.lg}',
        },
      },
      large: {
        fontSize: {
          base: '{fontSizes.md}',
          lg: '{fontSizes.lg}',
          '2xl': '{fontSizes.xl}',
        },
      },
      compact: {
        fontSize: {
          base: '{fontSizes.xs}',
          lg: '{fontSizes.sm}',
          '2xl': '{fontSizes.md}',
        },
      },
      subscript: {
        fontSize: {
          base: '{fontSizes.2xs}',
          lg: '{fontSizes.xs}',
          '2xl': '{fontSizes.sm}',
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
