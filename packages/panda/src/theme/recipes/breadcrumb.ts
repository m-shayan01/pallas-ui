// panda.config.ts or a separate file like recipes/breadcrumb.recipe.ts
import { defineSlotRecipe } from '@pandacss/dev'

export const breadcrumb = defineSlotRecipe({
  className: 'breadcrumb',
  description: 'Styles for the Breadcrumb component',
  slots: ['root', 'list', 'item', 'link', 'page', 'separator', 'ellipsis'],
  base: {
    root: {
      width: 'full',
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'spacing.gap.inline.sm',
      wordBreak: 'break-word',
      fontSize: 'sm',
      color: 'text.secondary',
      sm: {
        gap: 'spacing.gap.inline.md',
      },
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'spacing.gap.inline.sm',
    },
    link: {
      transitionProperty: 'colors',
      transitionDuration: 'fast',
      _hover: {
        color: 'text',
      },
    },
    page: {
      fontWeight: 'normal',
      color: 'text',
    },

    separator: {
      display: 'flex',
      alignItems: 'center',
      '& > svg': {
        width: 'sizes.icon.sm',
        height: 'sizes.icon.sm',
      },
    },
    ellipsis: {
      display: 'flex',
      height: 'sizes.icon.lg',
      width: 'sizes.icon.lg',
      alignItems: 'center',
      justifyContent: 'center',
      '& > svg': {
        width: 'sizes.icon.md',
        height: 'sizes.icon.md',
      },
    },
  },
})
