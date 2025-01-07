import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'Styles for the Tabs component',
  slots: ['root', 'tabList', 'trigger', 'content'],
  base: {
    root: {
      width: 'full',
    },
    trigger: {
      overflow: 'hidden',
      py: '{spacing.padding.block.md}',
      mb: '-1.5px',
      outline: 'none',
      _selected: {
        color: '{colors.primary}',
        borderBottomWidth: '3px',
        borderColor: '{colors.primary}',
      },
      _disabled: {
        color: '{colors.border}',
      },
      _hover: {
        cursor: 'pointer',
        color: '{colors.primary.hover}',
      },
    },
    tabList: {
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '{spacing.gap.component.md}',
      borderBottomWidth: '1px',
      borderColor: '{colors.border}',
      fontWeight: 'medium',
    },
    content: {
      overflow: 'hidden',
      color: '{colors.text}',
      py: '{spacing.padding.block.lg}',
      textStyle: '{md}',
    },
  },
  variants: {
    size: {
      sm: {
        trigger: {
          textStyle: '{sm}',
        },
      },
      md: {
        trigger: {
          textStyle: '{md}',
        },
      },
      lg: {
        trigger: {
          textStyle: '{lg}',
        },
      },
    },
    align: {
      start: {
        tabList: {
          justifyContent: 'start',
        },
      },
      center: {
        tabList: {
          justifyContent: 'center',
        },
      },
      end: {
        tabList: {
          justifyContent: 'end',
        },
      },
    },
    position: {
      top: {},
      left: {
        root: {
          display: 'flex',
        },
        tabList: {
          flexDirection: 'column',
          borderWidth: '0',
          borderRightWidth: '1px',
        },
        trigger: {
          py: '{spacing.padding.block.md}',
          px: '{spacing.padding.block.lg}',
          margin: '0',
          mr: '-1.5px',
          _selected: {
            borderWidth: '0',
            borderRightWidth: '3px',
          },
          textWrap: 'nowrap',
        },
        content: {
          px: '{spacing.padding.block.lg}',
        },
      },
      right: {
        root: {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
        tabList: {
          flexDirection: 'column',
          borderWidth: '0',
          borderLeftWidth: '1px',
        },
        trigger: {
          py: '{spacing.padding.block.md}',
          px: '{spacing.padding.block.lg}',
          margin: '0',
          ml: '-1.5px',
          _selected: {
            borderWidth: '0',
            borderLeftWidth: '3px',
          },
          textWrap: 'nowrap',
        },
        content: {
          px: '{spacing.padding.block.lg}',
        },
      },
      bottom: {
        root: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
        tabList: {
          borderWidth: '0',
          borderTopWidth: '1px',
        },
        trigger: {
          py: '{spacing.padding.block.md}',
          margin: '0',
          mt: '-1px',
          _selected: {
            borderWidth: '0',
            borderTopWidth: '3px',
          },
        },
      },
    },
    variant: {
      simple: {},
      card: {
        tabList: {
          gap: '{spacing.gap.inline.sm}',
        },
        trigger: {
          backgroundColor: '{colors.fill.disabled}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          px: '{spacing.padding.block.lg}',
          _selected: {
            color: '{colors.primary}',
            backgroundColor: '{colors.surface.elevated}',
          },
          _disabled: {
            color: '{colors.border}',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'start',
    variant: 'simple',
    position: 'top',
  },
  compoundVariants: [
    {
      variant: 'card',
      position: 'top',
      css: {
        trigger: {
          borderRadius: '0',
          borderTopRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          mb: '-1.5px',
          _selected: {
            borderBottomColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'bottom',
      css: {
        trigger: {
          borderRadius: '0',
          borderBottomRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          _selected: {
            borderTopColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'left',
      css: {
        trigger: {
          borderRadius: '0',
          borderLeftRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          _selected: {
            borderRightColor: '{colors.surface.elevated}',
          },
        },
      },
    },
    {
      variant: 'card',
      position: 'right',
      css: {
        trigger: {
          borderRadius: '0',
          borderRightRadius: '{radii.lg}',
          borderWidth: '1px',
          borderColor: '{colors.border}',
          _selected: {
            borderLeftColor: '{colors.surface.elevated}',
          },
        },
      },
    },
  ],
})
