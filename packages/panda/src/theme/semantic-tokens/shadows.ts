import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      base: '0px 1px 2px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 1px 1px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
  sm: {
    value: {
      base: '0px 2px 4px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 2px 4px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
  md: {
    value: {
      base: '0px 4px 8px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 4px 8px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
  lg: {
    value: {
      base: '0px 8px 16px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 8px 16px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
  xl: {
    value: {
      base: '0px 16px 24px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 16px 24px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
  '2xl': {
    value: {
      _light: '0px 24px 40px {colors.grey.500}, 0px 0px 1px {colors.grey.700}',
      _dark: '0px 24px 40px {colors.grey.500._dark}, 0px 0px 1px inset {colors.grey.700._dark}',
    },
  },
})
