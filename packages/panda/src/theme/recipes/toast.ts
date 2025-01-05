import { defineSlotRecipe } from '@pandacss/dev'

export const toast = defineSlotRecipe({
  className: 'toast',
  description: 'Styles for the Toast component',
  slots: ['root', 'icon', 'title', 'description', 'close', 'action', 'actions', 'viewport'],
  base: {
    viewport: {
      padding: '{spacing.padding.block.md}',
      position: 'fixed',
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '390px',
      maxWidth: '100vw',
      margin: 0,
      listStyle: 'none',
      zIndex: '2147483647',
      outline: 'none',
    },
    root: {
      display: 'grid',
      gridTemplateAreas: `'icon title close' 'icon description description' 'icon actions actions'`,
      gridTemplateColumns: 'auto auto 20px',
      rowGap: '{spacing.padding.block.md}',
      columnGap: '{spacing.padding.inline.sm}',
      borderRadius: '{radii.md}',
      borderWidth: '1px',
      borderColor: '{colors.border}',
      paddingBlock: '{spacing.padding.block.lg}',
      paddingInline: '{spacing.padding.inline.lg}',
      _open: {
        animationStyle: 'slideIn',
      },
      _closed: {
        animationStyle: 'slideOut',
      },
    },
    title: {
      gridArea: 'title',
      textStyle: '{md}',
      fontWeight: 'medium',
      paddingRight: 25,
    },
    description: {
      gridArea: 'description',
      textStyle: '{sm}',
    },
    close: {
      gridArea: 'close',
      padding: '0!',
      height: '20px!',
    },
    actions: {
      gridArea: 'actions',
      marginTop: '{spacing.padding.block.md}',
      rowGap: '{spacing.gap.component.sm}',
    },
    icon: {
      color: '{colors.info}',
    },
  },
  variants: {
    variant: {
      shadow: {
        root: {
          borderWidth: '0',
          boxShadow: `
            hsl(206 22% 7% / 35%) -10px 12px {radii.4xl} {spacing.-3}, 
            hsl(206 22% 7% / 35%) 5px -6px {radii.4xl} {spacing.-3}
          `,
        },
      },
    },
    iconType: {
      warning: {
        icon: {
          color: '{colors.warning}',
        },
      },
      success: {
        icon: {
          color: '{colors.success}',
        },
      },
      error: {
        icon: {
          color: '{colors.error}',
        },
      },
    },
  },
})
