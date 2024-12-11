import { defineSemanticTokens } from '@pandacss/dev'

export const sizes = defineSemanticTokens.sizes({
  controlHeight: {
    md: { value: '2rem' },
    lg: { value: '2.5rem' },
    sm: { value: '1.5rem' },
  },
})
