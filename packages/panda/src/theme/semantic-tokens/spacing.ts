import { defineSemanticTokens } from '@pandacss/dev'

export const spacing = defineSemanticTokens.spacing({
  layout: {
    default: {
      sm: { value: '{spacing.2}' },
      md: { value: '{spacing.3}' },
      lg: { value: '{spacing.4}' },
    },
    internal: {
      sm: { value: '{spacing.3}' },
      md: { value: '{spacing.4}' },
      lg: { value: '{spacing.5}' },
    },
    section: {
      sm: { value: '{spacing.6}' },
      md: { value: '{spacing.8}' },
      lg: { value: '{spacing.10}' },
    },
  },
  gap: {
    component: {
      sm: { value: '{spacing.4}' },
      md: { value: '{spacing.5}' },
      lg: { value: '{spacing.6}' },
    },
    inline: {
      sm: { value: '{spacing.1}' },
      md: { value: '{spacing.2}' },
      lg: { value: '{spacing.3}' },
    },
  },
  padding: {
    block: {
      sm: { value: '{spacing.1}' },
      md: { value: '{spacing.2}' },
      lg: { value: '{spacing.3}' },
    },
    inline: {
      sm: { value: '{spacing.2}' },
      md: { value: '{spacing.3}' },
      lg: { value: '{spacing.4}' },
    },
  },
})
