import { defineSlotRecipe } from '@pandacss/dev'

export const slider = defineSlotRecipe({
  className: 'slider',
  description: 'Styles for the Slider component',
  slots: ['root', 'track', 'range', 'thumb'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      w: 'full',
      touchAction: 'none',
      userSelect: 'none',
      alignItems: 'center',
    },
    track: {
      position: 'relative',
      h: '1',
      w: 'full',
      flexGrow: '1',
      overflow: 'hidden',
      rounded: 'full',
      bg: '{colors.fill.secondary}',
      _hover: {
        cursor: 'pointer',
        bg: '{colors.fill}',
      },
      transition: 'common',
      _disabled: {
        cursor: 'not-allowed!',
        bg: '{colors.fill.disabled}',
        border: '{borders.input.disabled}',
        _hover: {
          bg: '{colors.fill.disabled}',
        },
      },
    },
    range: {
      position: 'absolute',
      h: 'full',
      bg: '{colors.primary}',
      _hover: {
        bg: '{colors.primary.active}',
      },
      _disabled: {
        bg: '{colors.fill.tertiary}',
        _hover: {
          bg: '{colors.fill.tertiary}',
        },
      },
    },
    thumb: {
      display: 'block',
      cursor: 'pointer',
      rounded: 'full',
      border: '{borders.sliderThumb.default}',
      bg: '{colors.surface.elevated}',
      focusRingOffsetColor: '{colors.surface.elevated}',
      transition: 'common',

      _hover: {
        border: '{borders.sliderThumb.hover}',
        shadow: '{shadows.sliderThumb}',
      },

      _focusVisible: {
        outline: 'none',
        border: '{borders.sliderThumb.hover}',
        shadow: '{shadows.sliderThumb}',
      },

      _disabled: {
        cursor: 'not-allowed',
        border: '{borders.input.disabled}',
        _hover: {
          shadow: 'none!',
          border: '{borders.input.disabled}!',
        },
      },
    },
  },
  variants: {
    thumbSize: {
      sm: {
        thumb: {
          h: '{sizes.icon.sm}',
          w: '{sizes.icon.sm}',
        },
      },
      md: {
        thumb: {
          h: '{sizes.icon.md}',
          w: '{sizes.icon.md}',
          _hover: {
            border: '{borders.sliderThumb.hoverMd}',
            shadow: '{shadows.sliderThumbMd}',
          },
          _focusVisible: {
            border: '{borders.sliderThumb.hoverMd}',
            shadow: '{shadows.sliderThumbMd}',
          },
        },
      },
      lg: {
        thumb: {
          h: '{sizes.icon.lg}',
          w: '{sizes.icon.lg}',
          _hover: {
            border: '{borders.sliderThumb.hoverLg}',
            shadow: '{shadows.sliderThumbLg}',
          },
          _focusVisible: {
            border: '{borders.sliderThumb.hoverLg}',
            shadow: '{shadows.sliderThumbLg}',
          },
        },
      },
    },
    trackSize: {
      sm: {
        track: {
          h: 1,
        },
      },
      md: {
        track: {
          h: 2,
        },
      },
      lg: {
        track: {
          h: 3,
        },
      },
    },
  },
  defaultVariants: {
    thumbSize: 'sm',
    trackSize: 'sm',
  },
})
