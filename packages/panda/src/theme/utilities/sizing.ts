import { defineUtility } from '@pandacss/dev'

export const sizing = defineUtility({
  className: 'sizing',
  values: 'sizing',
  shorthand: ['size', 'sz'],
  transform: (value: string) => {
    return {
      width: value,
      height: value,
    }
  },
})
