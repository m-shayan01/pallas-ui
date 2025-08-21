import { defineSlotRecipe } from '@pandacss/dev'

export const chat = defineSlotRecipe({
  className: 'chat',
  description: 'Accessible chat component',
  slots: [
    'root',
    'message',
    'avatar',
    'bubble',
    'metadata',
    'input',
    'textarea',
    'inputActions',
    'suggestions',
    'suggestion',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      gap: 'gap.component.md',
      p: 'padding.block.lg',
    },
    message: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: 'gap.inline.sm',
    },
    avatar: {
      gridArea: 'avatar',
      flexShrink: 0,
      overflow: 'hidden',
    },
    bubble: {
      gridArea: 'bubble',
      width: 'fit-content',
      maxWidth: '3/4',
      p: 'padding.block.lg',
      py: 'padding.block.md',
      rounded: 'md',
      color: 'text',
      cursor: 'text',
    },
    metadata: {
      gridArea: 'meta',
      textStyle: 'xs',
      color: 'text.tertiary',
    },
    input: {
      display: 'flex',
      gap: 'gap.inline.sm',
      px: 'padding.block.md',
      py: 'padding.block.lg',
      border: '1px solid {colors.border}',
      rounded: 'md',

      _focusWithin: {
        borderColor: 'primary.border',
        shadow: 'sm',
      },
    },
    textarea: {
      '--textarea-min-height': '30px',
      '--textarea-max-height': '120px',

      w: 'full',
      minH: 'var(--textarea-min-height)',
      maxH: 'var(--textarea-max-height)',
      resize: 'none',
      border: 'none',
      rounded: 'md',
      textStyle: 'sm',
      transition: 'height 0.1s ease',

      _placeholder: {
        color: 'text.tertiary',
      },
      _focus: {
        outline: 'none',
      },
    },
    inputActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'gap.inline.xs',
      flexShrink: 0,
    },
    suggestions: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'gap.inline.xs',
      p: 'padding.block.md',
    },
    suggestion: {
      border: '1px solid {colors.border.secondary}',
      textStyle: 'sm',
      fontWeight: 'medium',
      color: 'text.secondary',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      userSelect: 'none',
      whiteSpace: 'nowrap',

      _hover: {
        border: '1px solid {colors.primary.border}',
      },

      _active: {
        transform: 'scale(0.98)',
        outline: '2px solid {colors.primary.border}',
      },
    },
  },
  variants: {
    variant: {
      user: {
        message: {
          gridTemplateColumns: '1fr auto',
          gridTemplateAreas: '"bubble avatar" "meta ...."',
          justifyItems: 'end',
        },
        bubble: {
          bg: 'primary.bg',
          color: 'text',
        },
      },
      assistant: {
        message: {
          gridTemplateAreas: '"avatar bubble" ".... meta"',
        },
        bubble: {
          bg: 'fill.tertiary',
          color: 'text',
        },
      },
    },
    layout: {
      vertical: {
        input: {
          flexDirection: 'column',
        },
        textarea: {
          pl: 'padding.inline.md',
        },
        inputActions: {
          w: 'full',
        },
      },
      horizontal: {
        input: {
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 'gap.inline.xs',
          p: 'padding.block.md',
        },
        textarea: {
          p: '0',
        },
        inputActions: {
          w: 'fit',
          h: 'fit',
          gap: 'gap.inline.xs',
          alignItems: 'flex-end',
        },
      },
    },
    suggestionVariant: {
      filled: {
        suggestion: {
          bg: 'fill.tertiary',
          color: 'text.secondary',

          _hover: {
            bg: 'fill.secondary',
            color: 'text',
          },
        },
      },
      primary: {
        suggestion: {
          bg: 'primary.bg',
          color: 'primary.text',

          _hover: {
            bg: 'primary.bgHover',
            color: 'primary.textHover',
          },
        },
      },
      outlined: {
        suggestion: {
          bg: 'transparent',
          border: '1px solid {colors.border}',
          color: 'text.secondary',

          _hover: {
            bg: 'fill.secondary',
            borderColor: 'primary.border',
            color: 'text',
          },
          _active: {
            bg: 'fill.tertiary',
          },
        },
      },
    },
    suggestionShape: {
      pill: {
        suggestion: {
          rounded: 'full',
          px: 'padding.block.lg',
          py: 'padding.block.sm',
        },
      },
      card: {
        suggestion: {
          rounded: 'md',
          px: 'padding.block.lg',
          py: 'padding.block.md',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'assistant',
    layout: 'vertical',
    suggestionVariant: 'outlined',
    suggestionShape: 'pill',
  },
})
