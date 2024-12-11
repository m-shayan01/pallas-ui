import { defineUtility } from '@pandacss/dev'

export const spaceX = defineUtility({
  className: 'space_x',
  values: 'spacing',
  transform: (value: string) => {
    return {
      '& > * + *': {
        marginLeft: value,
      },
    }
  },
})

export const spaceY = defineUtility({
  className: 'space_y',
  values: 'spacing',
  transform: (value: string) => {
    return {
      '& > * + *': {
        marginTop: value,
      },
    }
  },
})
