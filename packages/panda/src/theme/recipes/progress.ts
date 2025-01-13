import { defineSlotRecipe } from '@pandacss/dev'

export const progress = defineSlotRecipe({
  className: 'progress',
  description: 'Styles for the Progress component',
  slots: ['root', 'label', 'lineTrack', 'lineFill', 'circleTrack', 'circleFill'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '{spacing.gap.inline.md}',
    },
  },
  variants: {
    strokeLinecap: {
      butt: {
        lineTrack: {
          strokeLinecap: 'butt',
        },
        lineFill: {
          strokeLinecap: 'butt',
        },
        circleTrack: {
          strokeLinecap: 'butt',
        },
        circleFill: {
          strokeLinecap: 'butt',
        },
      },
      round: {
        lineTrack: {
          strokeLinecap: 'round',
        },
        lineFill: {
          strokeLinecap: 'round',
        },
        circleTrack: {
          strokeLinecap: 'round',
        },
        circleFill: {
          strokeLinecap: 'round',
        },
      },
    },
    size: {
      sm: {
        lineTrack: {
          strokeWidth: 1,
        },
        lineFill: {
          strokeWidth: 1,
        },
        circleTrack: {
          strokeWidth: 3,
        },
        circleFill: {
          strokeWidth: 3,
        },
      },
      md: {
        lineTrack: {
          strokeWidth: 2,
        },
        lineFill: {
          strokeWidth: 2,
        },
        circleTrack: {
          strokeWidth: 5,
        },
        circleFill: {
          strokeWidth: 5,
        },
      },
      lg: {
        lineTrack: {
          strokeWidth: 4,
        },
        lineFill: {
          strokeWidth: 4,
        },
        circleTrack: {
          strokeWidth: 8,
        },
        circleFill: {
          strokeWidth: 8,
        },
      },
    },
    color: {
      primary: {
        lineTrack: {
          stroke: '{colors.primary.bg}',
        },
        lineFill: {
          stroke: '{colors.primary}',
        },
        circleTrack: {
          stroke: '{colors.primary.bg}',
        },
        circleFill: {
          stroke: '{colors.primary}',
        },
      },
      success: {
        lineTrack: {
          stroke: '{colors.success.bg}',
        },
        lineFill: {
          stroke: '{colors.success}',
        },
        circleTrack: {
          stroke: '{colors.success.bg}',
        },
        circleFill: {
          stroke: '{colors.success}',
        },
      },
      error: {
        lineTrack: {
          stroke: '{colors.error.bg}',
        },
        lineFill: {
          stroke: '{colors.error}',
        },
        circleTrack: {
          stroke: '{colors.error.bg}',
        },
        circleFill: {
          stroke: '{colors.error}',
        },
      },
    },
    shape: {
      line: {},
      circle: {},
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'md',
    strokeLinecap: 'butt',
    color: 'primary',
    shape: 'line',
  },
})
