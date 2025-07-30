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
      _disabled: {
        // pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
    track: {
      position: 'relative',
      h: '1',
      w: 'full',
      flexGrow: '1',
      overflow: 'hidden',
      rounded: 'full',
      bg: '{colors.fill.secondary}',
    },
    range: {
      position: 'absolute',
      h: 'full',
      bg: '{colors.primary}',
    },
    thumb: {
      display: 'block',
      h: '{sizes.icon.sm}',
      w: '{sizes.icon.sm}',
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
        // outlineOffset: '2px',
        border: '{borders.sliderThumb.hover}',
        shadow: '{shadows.sliderThumb}',
        // focusRingWidth: '2',
        // focusRingColor: 'ring',
        // focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        border: '{borders.input.default}',
        _hover: {
          shadow: 'none',
          border: '{borders.input.default}',
        },
        // opacity: '0.5',
      },
    },
  },
})
