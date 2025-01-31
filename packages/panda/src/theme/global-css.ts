import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    background: 'bg.canvas',
    color: 'fg.default',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {},
})
