import { defineSlotRecipe } from '@pandacss/dev'

export const avatar = defineSlotRecipe({
  className: 'avatar',
  description: 'Styles for the Avatar component',
  slots: ['root', 'image', 'fallback'],
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      overflow: 'hidden',
      userSelect: 'none',
      width: 50,
      height: 50,
      borderRadius: '{full}',
      backgroundColor: '{colors.border.secondary}',
    },
    image: {
      width: '{full}',
      height: '{full}',
      objectFit: 'cover',
      borderRadius: 'inherit',
    },
    fallback: {
      width: '{full}',
      height: '{full}',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '{colors.text}',
      textStyle: '{md}',
      fontWeight: '{medium}',
    },
  },
})
